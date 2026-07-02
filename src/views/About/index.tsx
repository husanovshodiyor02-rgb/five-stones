import About1 from '../../assets/About1.png'
import About2 from '../../assets/About2.png'
import About3 from '../../assets/About3.png'
import About4 from '../../assets/About4.png'
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-2 sm:px-10 lg:px-0 py-9 sm:py-15"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
        <div>
          <h3 className="text-[26px] sm:text-[35px] text-[rgba(9,37,33,0.9)] font-bold">
            {t("menu_2")}
          </h3>
          <p className="max-w-165 text-lg sm:text-[25px] font-medium mt-5">
            {t("info_2")}
          </p> <br />
          <p className="max-w-171 text-lg sm:text-[25px] font-medium mt-5">
            {t("info_2_2")}
          </p>

          <div className="flex items-center gap-4 mt-10 lg:overflow-visible overflow-x-auto">
            <img className="w-54 h-35" src={About1} alt="" />
            <img className="w-54 h-35" src={About2} alt="" />
            <img className="w-54 h-35" src={About3} alt="" />
          </div>
        </div>
        <div>
          <img className="w-140 h-100 lg:h-198" src={About4} alt="" />
        </div>
      </div>
    </section>
  );
}

export default About