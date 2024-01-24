import React from "react";
import useScrollDirection from "./useScrollDirection"; // フックをインポート
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const scrollDirection = useScrollDirection();

  const router = useRouter();

  // 詳細ページかどうかを判定する関数
  const isDetailPage = () => {
    return (
      router.pathname.includes("/movies/") ||
      router.pathname.includes("/anime/")
    );
  };

  return (
    <header
      className={`header header__back ${
        scrollDirection === "down" ? "fade" : ""
      }`}
    >
      <div className="w-11/12 py-3 mx-auto">
        <div className="header">
          {isDetailPage() ? (
            <button className="text-2xl" onClick={() => router.back()}>
              ＜
            </button>
          ) : (
            <Link href="/">
              <img
                className="w-1/5 custom-lg:w-1/12 header__logo"
                src="/logo.svg"
              />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
