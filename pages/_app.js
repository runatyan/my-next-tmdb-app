// pages/_app.js

import "../app/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthProvider } from "../context/AuthContext";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // ヘッダーとフッターを表示するかどうかを判定する関数
  const showHeaderAndFooter = (path) => {
    // サインインとサインアップのページではヘッダーとフッターを表示しない
    const noHeaderFooterPaths = ["/signin", "/signup"];
    return !noHeaderFooterPaths.includes(path);
  };

  return (
    <>
      <AuthProvider>
        {showHeaderAndFooter(router.pathname) && <Header />}
        <Component {...pageProps} />
        {showHeaderAndFooter(router.pathname) && <Footer />}
      </AuthProvider>
    </>
  );
}

export default MyApp;
