// pages/profile.js

import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebaseConfig";

const Profile = () => {
  const { currentUser } = useAuth();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.push("/signin");
    } catch (error) {
      console.error("Logout Error", error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await auth.currentUser.delete();
      // ログアウト処理やリダイレクトなど
      router.push("/signin");
    } catch (error) {
      if (error.code === "auth/requires-recent-login") {
        // ユーザーに再ログインを促すメッセージを表示
        alert(
          "セキュリティ上の理由から、アカウントを削除するには再度ログインが必要です。"
        );
        // 再ログインフォームを表示するロジック（モーダルを使用するなど）
      } else {
        console.error("アカウント削除エラー", error);
      }
    }
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="w-11/12 mx-auto mt-20 md:mt-20 custom-lg:mt-20 pb-10">
      <h1 className="text-2xl font-bold mb-8 custom-lg:text-4xl">
        アカウント情報
      </h1>
      {currentUser && (
        <>
          <div className="mb-4">
            <p className="text-lg">メールアドレス: {currentUser.email}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg">パスワード: ********</p>
          </div>
        </>
      )}
      <div className="custom-lg:flex custom-lg:items-center custom-lg:flex-wrap custom-lg:mt-8">
        <button
          onClick={handleLogout}
          className="mt-20 py-4 mb-5 w-full rounded-md border-red-500 border text-red-500 custom-lg:w-1/5 custom-lg:m-0 custom-lg:mr-5 hover:bg-red-900 hover:text-red-200 hover:border-red-900"
        >
          ログアウト
        </button>
        <button
          onClick={openModal}
          className=" py-4 w-full rounded-md bg-red-500 text-white custom-lg:w-1/5 hover:bg-red-700"
        >
          アカウント削除
        </button>
      </div>
      {showModal && (
        <>
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal">
            <div className="modal-content text-center">
              <h3 className="text-lg mb-3 custom-lg:text-xl">
                アカウントを削除しますか？
              </h3>
              <p className="text-xs mb-10 custom-lg:text-sm">
                ※この操作は元に戻せません。
              </p>
              <div className="flex justify-between flex-wrap max-w-xs mx-auto">
                <button
                  onClick={closeModal}
                  className="rounded-2xl border border-red-500 py-4 w-28"
                >
                  キャンセル
                </button>
                <button
                  onClick={handleDeleteAccount}
                  className="rounded-2xl border border-red-500 bg-red-500 text-white py-4 w-28 "
                >
                  削除
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
