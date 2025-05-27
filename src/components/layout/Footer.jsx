import {NavLink} from "react-router-dom";
import {useState} from "react";
import useModalStore from "../../store/modalStore.js";

const Footer = () => {

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
    <div className="w-full flex flex-col justify-center items-center md:py-[3.75rem] py-10 md:px-8 px-5 border-t border-adb_gray">
      <div className="lg:w-[70rem] md:w-full w-full font-play font-bold text-[#5F6980]">
        <div className="flex justify-between items-center mb-10">
          <ul className="flex gap-4">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-adb_gray">|</li>
            <li>
              <NavLink to="/aso">ASO</NavLink>
            </li>
            <li className="text-adb_gray">|</li>
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
          </ul>
            <button onClick={handleNavClick} className="px-4 py-2 border border-adb-gray rounded-[0.5rem] text-[0.875rem] text-adb_black">Contact Us</button>
        </div>
        <div className="w-full h-[1px] bg-adb_gray mb-5"></div>
        <div className="font-normal text-[0.8125rem] flex md:flex-row flex-col-reverse justify-between items-center">
          <p className="md:mt-0 mt-5">Copyright © <span className="font-bold">Adbooster.</span> All rights reserved.</p>
          <ul className="flex gap-8 font-bold">
            <li>Privacy policy</li>
            <li>Terms of services</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;
