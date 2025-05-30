import { useState } from "react";
import {NavLink} from "react-router-dom";
import useModalStore from "../../store/modalStore.js";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useModalStore((state) => state.openModal);

  const handleNavClick = (event) => {
    setIsOpen(false);
    event.preventDefault();
    openModal(
        "1:1 문의하기",
        `궁금한 점이나 상담이 필요하신가요? \n친절하게 안내해 드리겠습니다.`
    );
  };

  return (
    <div className="lg:h-20 fixed top-0 left-0 w-full z-[300] h-[3.5rem] bg-[rgba(255,255,255, 0.9)] md:px-8 px-5 backdrop-blur-3xl">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="lg:w-[70rem] md:w-full w-full  text-adb_menu flex h-full items-center justify-between">
          {/* 로고 */}
          <div className="lg:w-[8.75rem] md:w-[9.125rem] w-[8rem]">
            <NavLink to="/">
              <img src="./img/AdBooster_logo.png" alt="AdBooster Logo" />
            </NavLink>
          </div>

          {/* 모바일 메뉴 아이콘 */}
          <div
              className="lg:hidden md:hidden ml-auto w-9 m-0"
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
                <NavLink
                    to="/"
                    onClick={() => {setIsOpen(!isOpen)}}
                    className={({ isActive }) =>
                        `transition-colors duration-300 ${
                            isActive ? "text-[#00217B] font-bold" : "text-adb_black font-semibold"
                        }`
                    }
                >
                  서비스 소개
                </NavLink>
              </li>
              <li>
                <NavLink
                    to="/aso"
                    onClick={() => {setIsOpen(!isOpen)}}
                    className={({ isActive }) =>
                        `transition-colors duration-300 ${
                            isActive ? "text-[#00217B] font-bold" : "text-adb_black font-semibold"
                        }`
                    }
                >
                  ASO
                </NavLink>
              </li>
              <li>
                <NavLink
                    to="/faq"
                    onClick={() => {setIsOpen(!isOpen)}}
                    className={({ isActive }) =>
                        `transition-colors duration-300 ${
                            isActive ? "text-[#00217B] font-bold" : "text-adb_black font-semibold"
                        }`
                    }
                >
                  자주 묻는 질문
                </NavLink>
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
                  onClick={handleNavClick}
                  className="px-5 py-[0.625rem] font-play text-[1rem] text-adb_white shadow-inner bg-adb_purple hover:bg-abd_purple_hover md:rounded-3xl rounded-3xl font-bold whitespace-nowrap"
                  style={{boxShadow: 'inset 4px 4px 14px rgba(255, 255, 255, 0.2)'}}>
                Contact Us
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
