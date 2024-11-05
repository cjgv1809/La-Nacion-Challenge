"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Button from "../../common/Button/Button";
import HeaderLogo from "./HeaderLogo";
import HeaderForm from "./HeaderForm";

function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  let debounceTimeout: NodeJS.Timeout;
  const DEBOUNCE_DELAY = 100;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) < 20) return;
      setIsScrollDown(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Clear search when on home page
  useEffect(() => {
    if (pathname === "/") {
      const urlParams = new URLSearchParams(window.location.search);
      const searchParam = urlParams.get("search");

      if (!searchParam) {
        setSearchTerm("");
        setIsSearchActive(false);
      } else {
        setSearchTerm(searchParam);
      }
    }
  }, [pathname]);

  // cancel the search when the user clicks outside the input
  useEffect(() => {
    if (isSearchActive) {
      const handleOutsideClick = (e: MouseEvent) => {
        if (!(e.target as HTMLElement).closest(".com-search")) {
          setIsSearchActive(false);
        }
      };

      document.addEventListener("click", handleOutsideClick);
      return () => document.removeEventListener("click", handleOutsideClick);
    }
  }, [isSearchActive]);

  const getHeaderClasses = () => {
    let classes = "header";
    if (isSearchActive) classes += " --active-search";
    if (isMenuActive) classes += " --active-menu";
    if (isScrollDown) classes += " --scrollDown";
    else classes += " --scrollUp";
    return classes;
  };

  const getMobileHeaderClasses = () => {
    const classes = "header-mobile";
    return classes;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSearchActive(false);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
      if (!term) {
        router.push("/");
      } else {
        router.push(`/?search=${term}`);
      }
    }, DEBOUNCE_DELAY);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className={getHeaderClasses()}>
        <div className="header__container">
          <div className="header__left">
            <div
              className="com-hamburger"
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
              <span className="com-hamburger__bar"></span>
              <span className="com-hamburger__bar"></span>
              <span className="com-hamburger__bar"></span>
            </div>

            <div className="com-search">
              <HeaderForm
                handleSubmit={handleSubmit}
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                setIsSearchActive={setIsSearchActive}
              />
            </div>
          </div>

          <div className="header__middle">
            <HeaderLogo />
          </div>

          <div className="header__right">
            <div className="com-usuario header__right-btn-container">
              <Button text="Ingresá" />
              <Button text="Suscribite" className="--btn --primary" />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className={getMobileHeaderClasses()}>
        <div className="header-mobile__container">
          <button className="header-mobile__menu-button">MENÚ</button>

          <div className="header-mobile__logo">
            <span className="logo-la-nacion">LA NACION</span>
          </div>

          <Link href="#" className="header-mobile__subscribe-link">
            Suscribite
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
