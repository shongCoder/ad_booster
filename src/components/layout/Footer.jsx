
const Footer = () => {

  return (
    <div className="w-full flex flex-col justify-center items-center md:py-[3.75rem] py-10 md:px-8 px-5 border-t border-adb_gray">
      <div className="lg:w-[70rem] md:w-full w-full font-play font-bold text-[#5F6980]">
        <div className="flex justify-between items-center mb-10">
          <ul className="flex gap-4">
            <li>HOME</li>
            <li className="text-adb_gray">|</li>
            <li>ASO</li>
            <li className="text-adb_gray">|</li>
            <li>FAQ</li>
          </ul>
          <a href="https://t.me/AD_Crack" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 border border-adb-gray rounded-[0.5rem] text-[0.875rem] text-adb_black">Contact Us</button>
          </a>
        </div>
        <div className="w-full h-[1px] bg-adb_gray mb-5"></div>
        <div className="font-normal text-[0.8125rem] flex md:flex-row flex-col-reverse justify-between items-center">
          <p className="md:mt-0 mt-5">Copyright © <span className="font-bold">Adcrack.</span> All rights reserved.</p>
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
