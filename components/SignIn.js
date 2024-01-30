// components/SignIn.js

import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); // ログイン後のリダイレクト先
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          setError("メールアドレスの形式が正しくありません。");
          break;
        case "auth/user-disabled":
          setError("このユーザーは無効です。");
          break;
        case "auth/user-not-found":
          setError("ユーザーが見つかりません。");
          break;
        case "auth/wrong-password":
          setError("パスワードが間違っています。");
          break;
        default:
          setError("ログインに失敗しました。もう一度お試しください。");
          break;
      }
      console.error(error.message);
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // ユーザー情報がresult.user内に含まれる
      console.log(result.user);
      router.push("/"); // ログイン後のリダイレクト先
    } catch (error) {
      console.error("Googleでのログインに失敗しました:", error);
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
      <div className="pb-7 mb-7 custom-lg:pb-9 custom-lg:mb-9 custom-lg:w-7/12 custom-lg:mx-auto custom-lg:block border-b border-yellow-400 ">
        <form onSubmit={handleSignIn} className="mb-5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="メールアドレス"
            style={{
              color: "#000",
            }}
            className="w-full p-3 mb-5 custom-lg:w-1/2 custom-lg:mx-auto custom-lg:block "
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
            ログイン
          </button>
        </form>
        <div>
          <p className="text-sm text-gray-400 mb-5 text-center">もしくは</p>
          <button
            onClick={signInWithGoogle}
            className="w-full p-3 custom-lg:w-1/2 custom-lg:mx-auto custom-lg:block bg-yellow-400 text-black hover:bg-black hover:text-yellow-400 hover:border hover:border-yellow-400"
          >
            Googleでログイン
          </button>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-400 mb-5">アカウントをお持ちでないですか？</p>
        <Link href="/signup">
          <p className="border-b border-white inline-block text-lg">
            新規会員登録はこちら
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
