// import React from "react";
// import useScrollDirection from "./useScrollDirection"; // フックをインポート
// import Link from "next/link";
// import { useRouter } from "next/router";

// const Header = () => {
//   const scrollDirection = useScrollDirection();

//   const router = useRouter();

//   // 詳細ページかどうかを判定する関数
//   const isDetailPage = () => {
//     return (
//       router.pathname.includes("/movies/") ||
//       router.pathname.includes("/anime/")
//     );
//   };

//   return (
//     <header
//       className={`header header__back ${
//         scrollDirection === "down" ? "fade" : ""
//       }`}
//     >
//       <div className="w-11/12 py-3 mx-auto">
//         <div className="header">
//           {isDetailPage() ? (
//             <button className="text-2xl" onClick={() => router.back()}>
//               ＜
//             </button>
//           ) : (
//             <Link href="/">
//               <img
//                 className="w-1/5 custom-lg:w-1/12 header__logo"
//                 src="/logo.svg"
//               />
//             </Link>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// components/Header.js

import React from "react";
import { useAuth } from "../context/AuthContext";
// import { auth } from "../firebaseConfig";
import Link from "next/link";
import { useRouter } from "next/router";
import useScrollDirection from "./useScrollDirection"; // このフックをインポート
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { currentUser } = useAuth();
  const scrollDirection = useScrollDirection(); // スクロール方向のフックを使用
  const router = useRouter();

  // const handleLogout = async () => {
  //   try {
  //     await auth.signOut();
  //     router.push("/signin"); // ログアウト後のリダイレクト先
  //   } catch (error) {
  //     console.error("ログアウトエラー", error);
  //   }
  // };

  const goToProfile = () => {
    router.push("/profile"); // ユーザーのプロファイルページへのパス
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
              className="w-1/5 custom-lg:w-1/4 header__logo"
              src="/logo.svg"
            />
          </Link>
        ) : (
          <button className="text-2xl" onClick={() => router.back()}>
            ＜
          </button>
        )}
        {/* <div className="relative">
          {currentUser ? (
            <div>
              <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                <FontAwesomeIcon icon={faUser} />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                  <Link href="/profile">
                    <p className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                      {currentUser.email}
                    </p>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    ログアウト
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/signin">
              <p className="text-sm px-4 py-2 rounded-md bg-blue-500 text-white">
                ログイン
              </p>
            </Link>
          )}
        </div> */}
        <div className="relative">
          {currentUser ? (
            <div>
              <button onClick={goToProfile}>
                <FontAwesomeIcon icon={faUser} size="lg" />
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
