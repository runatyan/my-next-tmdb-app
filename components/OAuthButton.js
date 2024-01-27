// components/OAuthButton.js

import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Firebase設定ファイルをインポート

const OAuthButton = () => {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // 成功した場合の処理（例: ホームページにリダイレクト）
    } catch (error) {
      console.error(error.message);
    }
  };

  return <button onClick={handleGoogleSignIn}>Googleでログイン</button>;
};

export default OAuthButton;
