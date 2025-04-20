import { useState } from "react";

const Header = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="lg:h-20 fixed top-0 left-0 w-full z-50 h-[3.5rem] bg-adb_white opacity-95">
      <div className="lg:px-[6.25rem] md:px-8 px-5 text-adb_menu flex h-full items-center justify-between">
        {/* 로고 */}
        <div className="lg:w-[8.75rem] md:w-[9.125rem] w-[8rem]">
          <button onClick={() => handleMenuClick("home")}>
            <img src="./img/AdBooster_logo.png" alt="AdBooster Logo" />
          </button>
        </div>

        {/* 모바일 메뉴 아이콘 */}
        <div
            className="lg:hidden md:hidden ml-auto w-5 m-0"
            onClick={() => setIsOpen(!isOpen)}
        >
          <img
              src="./img/menu_ico.png"
              alt="Menu Icon"
              className="cursor-pointer"
          />
        </div>

        {/* 네비게이션 메뉴 (모바일에서는 숨김) */}
        <div
            className={`lg:flex md:flex lg:justify-center md:justify-center absolute md:static lg:static top-[3.5rem] left-0 w-full bg-adb_white lg:bg-transparent md:bg-transparent transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen
                    ? "max-h-[300px] pb-16 opacity-100"
                    : "max-h-0 pb-0 opacity-0"
            } lg:max-h-none md:max-h-none lg:opacity-100 md:opacity-100 lg:pb-0 md:pb-0`}
        >
          <ul className="lg:flex md:flex lg:space-x-6 md:space-x-6 py-6 flex flex-col lg:flex-row md:flex-row items-center space-y-4 lg:space-y-0 md:space-y-0 p-0 m-0 text-adb_menu">
            <li>
              <button
                onClick={() => handleMenuClick("home")}
                className={`transition-colors duration-300 ${
                  activeSection === "home"
                    ? "text-[#00217B] font-bold"
                    : "text-adb_black"
                }`}
              >
                서비스 소개
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("curriculum")}
                className={`transition-colors duration-300 ${
                  activeSection === "curriculum"
                    ? "text-[#00217B] font-bold"
                    : "text-adb_black"
                }`}
              >
                ASO
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("information")}
                className={`transition-colors duration-300 ${
                  activeSection === "information"
                    ? "text-[#00217B] font-bold"
                    : "text-adb_black"
                }`}
              >
                자주 묻는 질문
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div
            className={`lg:static md:static absolute top-[calc(12rem)] left-0 w-full lg:w-auto md:w-auto flex justify-center md:justify-end lg:justify-end transition-all duration-500 ease-in-out overflow-visible ${
                isOpen
                    ? "max-h-[100px] opacity-100 mt-5"
                    : "max-h-0 opacity-0 mt-0"
            } lg:max-h-none lg:opacity-100 lg:mt-0 md:max-h-none md:opacity-100 md:mt-0`}
        >
          <button
              className="px-5 py-[0.625rem] font-play text-[1rem] text-adb_white shadow-inner bg-adb_purple md:rounded-3xl rounded-3xl font-bold whitespace-nowrap"
              style={{boxShadow: 'inset 4px 4px 14px rgba(255, 255, 255, 0.2)'}}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
