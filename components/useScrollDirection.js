import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        // 下にスクロール
        setScrollDirection("down");
      } else if (currentScrollTop < lastScrollTop) {
        // 上にスクロール
        setScrollDirection("up");
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // ネガティブな値を避ける
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return scrollDirection;
};

export default useScrollDirection;
