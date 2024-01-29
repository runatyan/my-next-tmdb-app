import React from "react";
import { useAuth } from "../context/AuthContext";

import Link from "next/link";
import { useRouter } from "next/router";
import useScrollDirection from "./useScrollDirection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

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
              className="w-1/5 custom-lg:w-5/12 header__logo"
              src="/logo.svg"
            />
          </Link>
        ) : (
          <button className="text-2xl" onClick={() => router.back()}>
            ＜
          </button>
        )}

        <div className="relative">
          {currentUser ? (
            <div>
              <button onClick={goToProfile}>
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-lg custom-lg:text-3xl hover:text-yellow-400"
                />
              </button>
            </div>
          ) : (
            <Link href="/signin">
              <p className="text-sm px-4 py-2 rounded-md bg-blue-500 text-white">
                ログイン
              </p>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
