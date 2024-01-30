// components / SignUp.js;

import React, { useState } from "react";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Firebase設定ファイルをインポート
import Link from "next/link";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/signin"); // 登録後のリダイレクト先
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("このメールアドレスは既に使用されています。");
      } else {
        setError("アカウントの作成に失敗しました。");
      }
      console.error(error.message);
    }
  };

  return (
    <div className="w-11/12 mx-auto mt-20 pb-10">
      <img className="w-2/6 custom-lg:w-1/5 mx-auto mb-16" src="/logo.svg" />

      <div className="custom-lg:w-7/12 custom-lg:mx-auto custom-lg:block">
        {error && (
          <p className="text-red-500  mb-1 custom-lg:w-1/2 custom-lg:mx-auto custom-lg:block">
            {error}
          </p>
        )}
      </div>
      <form
        onSubmit={handleSignUp}
        className="custom-lg:w-7/12 custom-lg:mx-auto custom-lg:block"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="メールアドレス"
          style={{
            color: "#000",
          }}
          className="w-full p-3 mb-5 custom-lg:w-1/2 custom-lg:mx-auto custom-lg:block"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="6〜20文字以内の半角英数字のパスワード"
          style={{
            color: "#000",
          }}
          className="w-full p-3 mb-5 custom-lg:w-1/2 custom-lg:mx-auto custom-lg:block"
        />
        <button
          className="w-full p-3 custom-lg:w-1/2 custom-lg:mx-auto custom-lg:block bg-yellow-400 text-black hover:bg-black hover:text-yellow-400 hover:border hover:border-yellow-400"
          type="submit"
        >
          新規登録
        </button>
      </form>
      <div className=" mt-10 custom-lg:w-7/12 custom-lg:mx-auto custom-lg:block">
        <Link
          className="custom-lg:w-1/2 custom-lg:mx-auto custom-lg:block"
          href="/signin"
        >
          <p className="text-sm border-b border-white inline-block">
            ＜ ログインページに戻る
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
