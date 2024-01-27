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

  //   const handleDeleteAccount = async () => {
  //     try {
  //       await currentUser.delete();
  //       router.push("/signin");
  //     } catch (error) {
  //       console.error("Account Deletion Error", error);
  //     }
  //   };

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
      <h1 className="text-2xl font-bold mb-8">アカウント情報</h1>
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
      <button
        onClick={handleLogout}
        className="mt-20 py-4 mb-5 w-full rounded-md border-red-500 border text-red-500"
      >
        ログアウト
      </button>
      <button
        onClick={openModal}
        className=" py-4 w-full rounded-md bg-red-500 text-white"
      >
        アカウント削除
      </button>

      {showModal && (
        <>
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal">
            <div className="modal-content">
              <h3 className="text-lg mb-3">アカウントを削除しますか？</h3>
              <p className="text-xs mb-10">この操作は元に戻せません。</p>
              <div className="flex justify-between w-4/5">
                <button
                  onClick={handleDeleteAccount}
                  className="rounded-2xl border border-red-500 bg-red-500 text-white p-4"
                >
                  削除
                </button>
                <button
                  onClick={closeModal}
                  className="rounded-2xl border border-red-500 p-4"
                >
                  キャンセル
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
