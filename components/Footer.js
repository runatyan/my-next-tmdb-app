import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faBookmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  // アクティブなアイコンのスタイル
  const activeStyle = "text-white";
  const inactiveStyle = "text-gray-400";

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black py-3 z-50">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <Link href="/" passHref className="w-1/4">
          <div
            className={`${
              currentPath === "/" ? activeStyle : inactiveStyle
            } flex flex-col items-center`}
          >
            <FontAwesomeIcon icon={faHome} size="sm" className="mb-1" />
            <span className="text-sm">ホーム</span>
          </div>
        </Link>
        <Link href="/genres" passHref className="w-1/4">
          <div
            className={`${
              currentPath === "/genres" ? activeStyle : inactiveStyle
            } flex flex-col items-center`}
          >
            <FontAwesomeIcon icon={faBars} size="sm" className="mb-1" />
            <span className="text-sm">ジャンル</span>
          </div>
        </Link>
        <Link href="/bookmarks" passHref className="w-1/4">
          <div
            className={`${
              currentPath === "/bookmarks" ? activeStyle : inactiveStyle
            } flex flex-col items-center`}
          >
            <FontAwesomeIcon icon={faBookmark} size="sm" className="mb-1" />
            <span className="text-sm">ブックマーク</span>
          </div>
        </Link>

        <Link href="/search" passHref className="w-1/4">
          <div
            className={`${
              currentPath === "/search" ? activeStyle : inactiveStyle
            } flex flex-col items-center`}
          >
            <FontAwesomeIcon icon={faSearch} size="sm" className="mb-1" />
            <span className="text-sm">検索</span>
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
