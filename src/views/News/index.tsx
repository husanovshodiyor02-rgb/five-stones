import New1 from '../../assets/news1.png'
import New2 from '../../assets/news2.png'
import New3 from '../../assets/news3.png'
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();

  return (
    <section
      id="news"
      className="max-w-7xl mx-auto px-2 sm:px-10 lg:px-0 py-15"
    >
      <h3 className="text-[26px] sm:text-[35px] text-[#0f172a] font-bold">
        {t("menu_4")}
      </h3>

      <div className="flex justify-between gap-5 mt-10 overflow-x-auto">
        <div className="shrink-0 w-80 md:w-100">
          <img className="w-full h-105 md:h-125" src={New1} alt="" />
          <p className="text-[16px] font-semibold text-[rgba(9,37,33,0.8)] pt-5">
            {t("sana_1")}
          </p>
          <p className="text-[19px] sm:text-xl font-semibold py-2">
            {t("info_3")}
          </p>
          <span className="text-sm font-medium text-[#4e4e4e] leading-none">
            {t("info_4")}
          </span>
        </div>
        <div className="shrink-0 w-80 md:w-100">
          <img className="w-full h-105 md:h-125" src={New2} alt="" />
          <p className="text-[16px] font-semibold text-[rgba(9,37,33,0.8)] pt-5">
            {t("sana_2")}
          </p>
          <p className="text-[19px] sm:text-xl font-semibold py-2">
            {t("info_5")}
          </p>
          <span className="text-sm font-medium text-[#4e4e4e]">
            {t("info_6")}
          </span>
        </div>
        <div className="shrink-0 w-80 md:w-100">
          <img className="w-full h-105 md:h-125" src={New3} alt="" />
          <p className="text-[16px] font-semibold text-[rgba(9,37,33,0.8)] pt-5">
            {t("sana_3")}
          </p>
          <p className="text-[19px] sm:text-xl font-semibold py-2">
            {t("info_7")}
          </p>
          <span className="text-sm font-medium text-[#4e4e4e]">
            {t("info_8")}
          </span>
        </div>
      </div>
    </section>
  );
}

export default News;
