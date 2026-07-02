import React, { useState } from "react";
import Insta from "../../assets/insta.png";
import Tg from "../../assets/tg.png";
import { useTranslation } from "react-i18next";

const baseUrl = "https://api.fivestones.uz";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const isUz = (i18n.language || "ru").toLowerCase().startsWith("uz");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998 ");
  const [question, setQuestion] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const formatPhoneNumber = (value: string): string => {
    const digits = value.replace(/\D/g, "");

    if (digits.length <= 3) {
      return "+998 ";
    }

    const rawNumber = digits.slice(3, 12);
    let formatted = "+998 ";

    if (rawNumber.length > 0) {
      formatted += rawNumber.slice(0, 2);
    }
    if (rawNumber.length > 2) {
      formatted += " " + rawNumber.slice(2, 5);
    }
    if (rawNumber.length > 5) {
      formatted += " " + rawNumber.slice(5, 7);
    }
    if (rawNumber.length > 7) {
      formatted += " " + rawNumber.slice(7, 9);
    }

    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    if (!input.startsWith("+998 ")) {
      setPhone("+998 ");
      return;
    }

    setPhone(formatPhoneNumber(input));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || phone.trim() === "+998") return;

    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch(`${baseUrl}/lead`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.replace(/\s+/g, ""),
          question: question.trim(),
        }),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setPhone("+998 ");
        setQuestion("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[rgb(9,37,33)]">
      <footer
        id="footer"
        className="max-w-7xl mx-auto px-2 sm:px-10 py-15 text-white"
      >
        <h3 className="text-lg sm:text-xl font-semibold pb-4">{t("menu_5")}</h3>

        <div className="flex flex-col lg:flex-row gap-15 lg:gap-80">
          <form onSubmit={handleSubmit} className="space-y-5">
            <h3 className="text-xl sm:text-2xl md:text-[30px] font-semibold leading-none">
              {t("header_3")} <br />
              {t("header_3_3")}
            </h3>

            <input
              className="w-full md:w-95 lg:w-132 h-10 sm:h-13.75 rounded-[15px] sm:rounded-[20px] bg-white text-[#3f3f3f] px-7 outline-none"
              type="text"
              placeholder={t("input_1")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={loading}
            />
            <br />

            <input
              className="w-full md:w-95 lg:w-132 h-10 sm:h-13.75 rounded-[15px] sm:rounded-[20px] bg-white text-[#3f3f3f] px-7 outline-none"
              type="text"
              placeholder="+998 90 000 00 00"
              value={phone}
              onChange={handlePhoneChange}
              required
              disabled={loading}
            />
            <br />

            <textarea
              className="w-full md:w-95 lg:w-132 h-37.5 bg-white text-[#3f3f3f] border rounded-[15px] sm:rounded-[20px] py-4 px-7 outline-none resize-none"
              placeholder={t("input_2")}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              disabled={loading}
            ></textarea>

            <div className="flex flex-col items-end gap-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-45 h-10 sm:h-12.5 rounded-[15px] sm:rounded-[20px] bg-white text-black text-sm sm:text-[16px] font-medium cursor-pointer active:scale-95 transition-all flex items-center justify-center disabled:opacity-50"
              >
                {loading ? "..." : t("button_4")}
              </button>

              {status === "success" && (
                <span className="text-xs text-green-400 mt-1">
                  {isUz ? "Muvaffaqiyatli yuborildi!" : "Успешно отправлено!"}
                </span>
              )}
              {status === "error" && (
                <span className="text-xs text-red-400 mt-1">
                  {isUz
                    ? "Yuborishda xatolik yuz berdi."
                    : "Произошла ошибка при отправке."}
                </span>
              )}
            </div>
          </form>

          <div className="space-y-1.5">
            <p className="text-lg sm:text-2xl md:text-[30px] font-semibold">
              {t("button_1")}
            </p>
            <p className="text-lg sm:text-2xl md:text-[30px] font pt-4">
              {t("info_9")}
            </p>
            <a
              href="tel:+998999922022"
              className="text-xl sm:text-[30px] font-semibold"
            >
              +998 99 992 20 22
            </a>
            <p className="text-lg sm:text-2xl md:text-[30px] font-semibold pt-4">
              {t("info_10")}
            </p>
            <a
              href="mailto:fivestonesuz@gmail.com"
              className="text-xl sm:text-2xl md:text-[30px] font-semibold"
            >
              fivestonesuz@gmail.com
            </a>
            <p className="text-lg sm:text-2xl md:text-[30px] font-semibold pt-4">
              {t("info_11")}
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/fivestones_uz?igsh=c3ludTk5bGRwZHds"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-9 sm:w-11 h-9 sm:h-11"
                  src={Insta}
                  alt="Instagram"
                />
              </a>
              <a
                href="https://t.me/fivestones_uz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-9 sm:w-11 h-9 sm:h-11"
                  src={Tg}
                  alt="Telegram"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;