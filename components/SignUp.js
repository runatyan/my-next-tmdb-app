// components / SignUp.js;

import React, { useState } from "react";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Firebase設定ファイルをインポート
import Link from "next/link";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/signin"); // 登録後のリダイレクト先
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="w-11/12 mx-auto mt-20 pb-10">
      <img className="w-2/6 mx-auto mb-16" src="/logo.svg" />
      <Link href="/signin">
        <p className="text-sm mb-10 border-b border-white inline-block">
          ＜ ログインページに戻る
        </p>
      </Link>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="メールアドレス"
          style={{
            color: "#000",
          }}
          className="w-full p-3 mb-5"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="6〜20文字以内の半角英数字"
          style={{
            color: "#000",
          }}
          className="w-full p-3 mb-5"
        />
        <button className="w-full p-3 bg-yellow-400 text-black" type="submit">
          新規登録
        </button>
      </form>
    </div>
  );
};

export default SignUp;
