import React from "react";
import useScrollDirection from "./useScrollDirection"; // フックをインポート

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header className={`header ${scrollDirection === "down" ? "fade" : ""}`}>
      <div className="w-11/12 py-3 mx-auto">
        <img className="w-1/5 custom-lg:w-1/12 header__logo" src="/next.svg" />
      </div>
    </header>
  );
};

export default Header;
