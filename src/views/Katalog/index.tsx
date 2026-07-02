import Katalog1 from '../../assets/katalog11.jpg'
import Katalog2 from '../../assets/katalog2.png'
import Katalog3 from '../../assets/katalog3.png'
import Katalog4 from '../../assets/katalog4.png'
import { useTranslation } from "react-i18next";

const Katalog = () => {
  const { t } = useTranslation();

  return (
    <section id="katalog" className="max-w-7xl mx-auto px-2 sm:px-10 lg:px-0">
      <h3 className="text-[26px] sm:text-[35px] text-[rgba(9,37,33,0.9)] font-bold">
        {t("menu_3")}
      </h3>
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 items-center justify-between mt-10 px-5 sm:px-0">
        <div
          className="w-full lg:w-145 h-80 lg:h-195 bg-cover bg-center rounded-[10px]"
          style={{
            backgroundImage: `url(${Katalog1})`,
          }}
        >
          <div className="flex items-end justify-start h-full p-8">
            <p className="text-2xl sm:text-3xl lg:text-[40px] font-semibold">
              Classic
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 lg:gap-10 w-full lg:w-165">
          <div className="flex flex-col md:flex-row items-center gap-5 lg:gap-15">
            <div
              className="w-full sm:w-75 h-80 lg:h-88 rounded-[10px]"
              style={{
                backgroundImage: `url(${Katalog2})`,
              }}
            >
              <div className="flex items-end justify-start h-full p-8">
                <p className="text-2xl sm:text-3xl lg:text-[35px] font-semibold">
                  Apex
                </p>
              </div>
            </div>
            <div
              className="w-full sm:w-75 h-80 lg:h-88 rounded-[10px]"
              style={{
                backgroundImage: `url(${Katalog3})`,
              }}
            >
              <div className="flex items-end justify-start h-full p-8">
                <p className="text-2xl sm:text-3xl lg:text-[35px] font-semibold">
                  Pro-stone
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-full lg:w-165 h-80 lg:h-96 rounded-[10px]"
            style={{
              backgroundImage: `url(${Katalog4})`,
            }}
          >
            <div className="flex items-end justify-start h-full p-8">
              <p className="text-2xl sm:text-3xl lg:text-[35px] font-semibold">
                Gold
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Katalog