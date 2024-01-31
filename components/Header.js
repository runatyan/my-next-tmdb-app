import React from "react";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";
import useScrollDirection from "./useScrollDirection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { currentUser } = useAuth();
  const scrollDirection = useScrollDirection();
  const router = useRouter();

  const goToProfile = () => {
    router.push("/profile");
  };

  const isDetailPage =
    router.pathname.includes("/movies/") ||
    router.pathname.includes("/anime/") ||
    router.pathname.includes("/profile");

  const isDetailPageShera =
    router.pathname.includes("/movies/") || router.pathname.includes("/anime/");

  const handleShareFallback = () => {
    const shareURL = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      window.location.href
    )}&text=${encodeURIComponent(document.title)}`;

    // 新しいウィンドウでSNSのシェアページを開く
    window.open(shareURL, "_blank", "noopener,noreferrer");
  };

  // シェアボタンのイベントハンドラ
  const handleShare = async () => {
    // シェアのロジックをここに実装します
    console.log("Share button clicked");

    if (navigator.share) {
      try {
        // 現在のページURLを共有
        await navigator.share({
          title: document.title,
          text: "この作品をチェックしてみてください！",
          url: window.location.href,
        });
        console.log("コンテンツを共有しました。");
      } catch (error) {
        console.error("コンテンツの共有に失敗しました。", error);
      }
    } else {
      // Web Share APIが利用できない場合のフォールバック
      console.log("Web Share APIはこのブラウザでは利用できません。");
      handleShareFallback();
    }
  };

  return (
    <header
      className={`header header__back ${
        scrollDirection === "down" ? "fade" : ""
      }`}
    >
      <div className="flex items-center justify-between w-11/12 mx-auto">
        {!isDetailPage ? (
          <Link href="/">
            <img
              className="w-1/2 custom-lg:w-5/12 header__logo"
              src="/logo.svg"
            />
          </Link>
        ) : (
          <>
            <button className="text-2xl" onClick={() => router.back()}>
              ＜
            </button>
          </>
        )}

        <div className="flex items-center">
          {isDetailPageShera && (
            <button onClick={handleShare} className="mr-4 custom-lg:mr-8">
              <FontAwesomeIcon
                icon={faArrowUpFromBracket}
                className="text-lg custom-lg:text-2xl"
              />
            </button>
          )}
          <div className="relative">
            {currentUser ? (
              <button onClick={goToProfile}>
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-lg custom-lg:text-2xl hover:text-yellow-400"
                />
              </button>
            ) : (
              <Link href="/signin">
                <p className="text-sm px-4 py-2 rounded-md bg-blue-500 text-white">
                  ログイン
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
