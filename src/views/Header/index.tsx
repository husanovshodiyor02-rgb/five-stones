import { Menu, X } from "lucide-react";
import Logo from "../../assets/logo.svg";
import Hero from "../../assets/hero.png";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const isUz = i18n.language === "uz";

  const buttonWidthClass = isUz ? "w-[233px]" : "w-53";

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleLangChange = () => {
    const currentLang = i18n.language.toLowerCase();
    const nextLang = currentLang.startsWith("ru") ? "uz" : "ru";
    i18n.changeLanguage(nextLang);
  };

  const displayLang = i18n.language.toLowerCase().startsWith("ru")
    ? "RU"
    : "UZ";
  return (
    <div
      className="w-full h-[100vh] font-family bg-cover bg-center px-2 sm:px-10 py-5 text-white"
      style={{
        backgroundImage: `url(${Hero})`,
      }}
    >
      <header
        id="header"
        className="max-w-7xl mx-auto flex items-center justify-between"
      >
        <div>
          <a href="/">
            <img className="w-35 lg:w-40 h-20" src={Logo} alt="logo" />
          </a>
        </div>
        <nav className="hidden lg:flex items-center gap-15 text-sm font-medium">
          <a href="#header">{t("menu_1")}</a>
          <a href="#about">{t("menu_2")}</a>
          <a href="#katalog">{t("menu_3")}</a>
          <a href="#news">{t("menu_4")}</a>
          <a href="#footer">{t("menu_5")}</a>
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={handleLangChange}
            className="w-10.5 h-9.5 flex items-center justify-center rounded-[8px] bg-[rgba(9,37,33,0.8)] text-sm font-medium active:scale-95 transition-all cursor-pointer"
          >
            {displayLang}
          </button>
          <button className="w-45 h-9.5 flex items-center justify-center rounded-[8px] bg-[rgba(9,37,33,0.8)] text-[15px] font-semibold">
            {t("button_1")}
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white z-50"
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>

        <div
          className={`fixed top-0 right-0 h-screen w-full bg-[#092521] text-white p-8 duration-300 z-40 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <a href="/">
              <img className="w-35 lg:w-40 h-20" src={Logo} alt="logo" />
            </a>
          </div>
          <nav className="flex flex-col gap-8 text-lg mt-20">
            <a href="#header" onClick={() => setOpen(false)}>
              {t("menu_1")}
            </a>

            <a href="#about" onClick={() => setOpen(false)}>
              {t("menu_2")}
            </a>

            <a href="#katalog" onClick={() => setOpen(false)}>
              {t("menu_3")}
            </a>

            <a href="#news" onClick={() => setOpen(false)}>
              {t("menu_4")}
            </a>

            <a href="#footer" onClick={() => setOpen(false)}>
              {t("menu_5")}
            </a>
          </nav>

          <div className="flex items-center gap-4 mt-5">
            <button className="w-45 h-9.5 flex items-center justify-center rounded-[8px] bg-white text-black text-[15px] font-semibold">
              {t("button_1")}
            </button>
            <button
              onClick={handleLangChange}
              className="w-10.5 h-9.5 flex items-center justify-center rounded-[8px] bg-white text-black text-sm font-medium cursor-pointer select-none"
            >
              {displayLang}
            </button>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto">
        <h1 className="max-w-150 text-3xl sm:text-[40px] md:text-[50px] font-bold leading-none flex flex-col gap-0 mt-20">
          {t("header_1")}
        </h1>
        <p className="max-w-160 font-medium text-xs sm:text-[13px] mt-5">
          {t("info_1")}
        </p>

        <div className="flex flex-wrap items-center gap-5 mt-8 mb-30">
          <button
            className={`${buttonWidthClass} h-11.25 flex items-center px-4 gap-3 rounded-[8px] bg-[rgba(9,37,33,0.8)] text-sm font-semibold cursor-pointer`}
          >
            <div>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.2037 18.25L19.6637 17.96C19.0537 17.89 18.4537 18.1 18.0237 18.53L16.1837 20.37C13.3537 18.93 11.0337 16.62 9.59367 13.78L11.4437 11.93C11.8737 11.5 12.0837 10.9 12.0137 10.29L11.7237 7.77C11.6037 6.76 10.7537 6 9.73367 6H8.00367C6.87367 6 5.93367 6.94 6.00367 8.07C6.53367 16.61 13.3637 23.43 21.8937 23.96C23.0237 24.03 23.9637 23.09 23.9637 21.96V20.23C23.9737 19.22 23.2137 18.37 22.2037 18.25Z"
                  fill="white"
                />
              </svg>
            </div>
            {t("button_1")}
          </button>
          <a
            href="/Five stones.pdf"
            download="Five stones.pdf"
            className={`${buttonWidthClass} h-11.25 flex items-center px-6 gap-4 rounded-[8px] bg-[rgba(9,37,33,0.8)] text-sm font-semibold cursor-pointer text-white no-underline`}
          >
            <div>
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM9 2C9.55 2 10 2.45 10 3C10 3.55 9.55 4 9 4C8.45 4 8 3.55 8 3C8 2.45 8.45 2 9 2ZM10 16H5C4.45 16 4 15.55 4 15C4 14.45 4.45 14 5 14H10C10.55 14 11 14.45 11 15C11 15.55 10.55 16 10 16ZM13 12H5C4.45 12 4 11.55 4 11C4 10.45 4.45 10 5 10H13C13.55 10 14 10.45 14 11C14 11.55 13.55 12 13 12ZM13 8H5C4.45 8 4 7.55 4 7C4 6.45 4.45 6 5 6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z"
                  fill="white"
                />
              </svg>
            </div>
            {t("button_2")}
          </a>
          <a
            href="/Лаборатория.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonWidthClass} h-11.25 flex items-center px-6 gap-5 rounded-[8px] bg-[rgba(9,37,33,0.8)] text-sm font-semibold cursor-pointer text-white no-underline`}
          >
            <div>
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM9 2C9.55 2 10 2.45 10 3C10 3.55 9.55 4 9 4C8.45 4 8 3.55 8 3C8 2.45 8.45 2 9 2ZM6.29 15.29L3.7 12.7C3.51275 12.5132 3.40751 12.2595 3.40751 11.995C3.40751 11.7305 3.51275 11.4768 3.7 11.29C4.09 10.9 4.72 10.9 5.11 11.29L7 13.17L12.88 7.29C13.27 6.9 13.9 6.9 14.29 7.29C14.68 7.68 14.68 8.31 14.29 8.7L7.7 15.29C7.32 15.68 6.68 15.68 6.29 15.29Z"
                  fill="white"
                />
              </svg>
            </div>
            {t("button_3")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Header;
