import {NavLink} from "react-router-dom";
import {useState} from "react";
import useModalStore from "../store/modalStore.js";

function AsoComponent() {

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
        <div className="lg:mt-20 md:mt-[3.5rem] mt-[6.25rem]">
            <div className="w-full flex flex-col justify-center items-center md:py-[6.25rem] py-10 md:px-8 px-5">
                <div
                    id="curriculum"
                    className="lg:w-[70rem] md:w-full w-full"
                >
                    <div className="flex md:justify-between md:flex-row flex-col md:items-end items-start">
                        <div>
                            <p className="font-play text-adb_blue lg:text-[1rem] md:text-[0.8125rem] text-[0.8125rem] font-extrabold tracking-widest">
                                ASO
                            </p>
                            <div className="font-bold lg:text-[2.25rem] md:text-[1.75rem] text-[1.75rem] text-adb_black mt-5">
                                <p>
                                    앱 스토어 최적화
                                </p>
                            </div>
                        </div>
                        <div className="md:text-right text-left text-adb_text lg:text-[1rem] md:text-[0.8125rem] text-[0.8125rem] md:mt-0 mt-5 font-medium">
                            <p>문의하실 내용이 있다면 언제든지 남겨주세요.</p>
                            <p>최대한 빠르게 성심껏 도와드리겠습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ASO Title */}

            <div className="w-full border-b border-adb_gray flex justify-center items-center lg:text-[1.125rem] md:text-[0.875rem] pb-3">
                <ul className="flex gap-7">
                    <li className="text-adb_black font-bold relative after:absolute after:content-[''] after:w-[2.375rem] after:h-[3px] after:left-0 after:bottom-[-0.8rem] after:bg-adb_black ">
                        <NavLink to="/aso">
                            ASO
                        </NavLink>
                    </li>
                    <li className="text-[#c1c1c1]">
                        <NavLink to="/faq">
                            자주 묻는 질문
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* Sub Title */}

            <div className="w-full flex flex-col justify-center items-center md:pt-[6.25rem] pt-10 md:px-8 px-5">
                <div className="lg:w-[70rem] md:w-full w-full border border-adb_gray p-5 rounded-[1rem]">
                    <div className="flex md:flex-row flex-col lg:gap-5 md:gap-3 gap-4">
                        <div className="flex-1 border border-adb_gray rounded-[0.75rem] lg:py-10 md:py-6 lg:px-5 md:px-3 py-8 px-4">
                            <div className="flex justify-center items-center flex-col gap-3">
                                <div className="flex gap-1 items-center">
                                    <img src="./img/aso/sparkles.png" className="lg:w-5 md:w-[0.75rem] w-5 lg:h-5 md:h-[0.75rem] h-5" />
                                    <span className="lg:text-[1.25rem] md:text-[0.875rem] text-[1.25rem] font-bold">Main Keywords</span>
                                </div>
                                <div className="text-adb_text text-center font-medium lg:text-[0.8125rem] md:text-[0.6875rem] text-[0.8125rem] h-8">
                                    "소개팅", "채팅", "운세", "금융"
                                </div>
                            </div>
                            <div className="w-full lg:mt-10 md:mt-5 mb-3">
                                <p className="text-adb_black lg:text-[1.5rem] md:text-[0.875rem] text-[1.5rem] font-bold">&#8361;500,000 ~ 1,000,000 <span className="text-adb_text lg:text-[1.125rem] md:text-[0.625rem] text-[1rem]">/월</span></p>
                            </div>
                            <div>
                                <ul className="text-adb_text lg:text-[0.875rem] md:text-[0.625rem] text-[0.875rem]">
                                    <li className="pl-3 relative after:absolute after:content-[''] after:left-0 after:w-1 after:h-1 after:top-2 after:bg-adb_text after:rounded-full">검색량이 많고 경쟁이 치열한 핵심 키워드</li>
                                    <li className="mt-2 pl-3 relative after:absolute after:content-[''] after:left-0 after:w-1 after:h-1 after:top-2 after:bg-adb_text after:rounded-full">유저들이 직접적으로 찾는 주제어로, 상위 노출 시 다운로드 전환 효과가 큰 편입니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1 border border-adb_gray rounded-[0.75rem] lg:py-10 md:py-6 lg:px-5 md:px-3 py-8 px-4">
                            <div className="flex justify-center items-center flex-col gap-3">
                                <div className="flex gap-1 items-center">
                                    <img src="./img/aso/sparkles.png" className="lg:w-5 md:w-[0.75rem] w-5 lg:h-5 md:h-[0.75rem] h-5" />
                                    <span className="lg:text-[1.25rem] md:text-[0.875rem] text-[1.25rem] font-bold">Sub Keywords</span>
                                </div>
                                <div className="text-adb_text text-center font-medium lg:text-[0.8125rem] md:text-[0.6875rem] text-[0.8125rem] h-8">
                                    "소개팅 어플", "채팅 무료", "운세 서비스", "금융 서비스"
                                </div>
                            </div>
                            <div className="w-full lg:mt-10 md:mt-5 mb-3">
                                <p className="text-adb_black lg:text-[1.5rem] md:text-[0.875rem] text-[1.5rem] font-bold">&#8361;300,000 ~ 500,000 <span className="text-adb_text lg:text-[1.125rem] md:text-[0.625rem] text-[1rem]">/월</span></p>
                            </div>
                            <div>
                                <ul className="text-adb_text lg:text-[0.875rem] md:text-[0.625rem] text-[0.875rem]">
                                    <li className="pl-3 relative after:absolute after:content-[''] after:left-0 after:w-1 after:h-1 after:top-2 after:bg-adb_text after:rounded-full">메인 키워드와 관련 있지만 경쟁이 다소 덜한 키워드</li>
                                    <li className="mt-2 pl-3 relative after:absolute after:content-[''] after:left-0 after:w-1 after:h-1 after:top-2 after:bg-adb_text after:rounded-full">유저의 검색 의도가 명확해 전환 가능성이 높고, 비교적 안정적으로 상위 노출을 노릴 수 있습니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1 border border-adb_gray rounded-[0.75rem] lg:py-10 md:py-6 lg:px-5 md:px-3 py-8 px-4">
                            <div className="flex justify-center items-center flex-col gap-3">
                                <div className="flex gap-1 items-center">
                                    <img src="./img/aso/sparkles.png" className="lg:w-5 md:w-[0.75rem] w-5 lg:h-5 md:h-[0.75rem] h-5" />
                                    <span className="lg:text-[1.25rem] md:text-[0.875rem] text-[1.25rem] font-bold">Long-tail Keywords</span>
                                </div>
                                <div className="text-adb_text text-center font-medium lg:text-[0.8125rem] md:text-[0.6875rem] text-[0.8125rem] h-8">
                                    "소개팅 가능한 앱", "채팅으로 만남 가능한 앱"
                                </div>
                            </div>
                            <div className="w-full lg:mt-10 md:mt-5 mb-3">
                                <p className="text-adb_black lg:text-[1.5rem] md:text-[0.875rem] text-[1.5rem] font-bold">&#8361;100,000 ~ 300,000 <span className="text-adb_text lg:text-[1.125rem] md:text-[0.625rem] text-[1rem]">/월</span></p>
                            </div>
                            <div>
                                <ul className="text-adb_text lg:text-[0.875rem] md:text-[0.625rem] text-[0.875rem]">
                                    <li className="pl-3 relative after:absolute after:content-[''] after:left-0 after:w-1 after:h-1 after:top-2 after:bg-adb_text after:rounded-full">매우 구체적이고 전환율이 높은 키워드</li>
                                    <li className="mt-2 pl-3 relative after:absolute after:content-[''] after:left-0 after:w-1 after:h-1 after:top-2 after:bg-adb_text after:rounded-full">검색량은 상대적으로 적지만, 실제 전환율이 높아 효율적인 키워드 운영이 가능합니다.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="w-full border border-[#1956FE0A] bg-[#1956FE05] p-5 rounded-[1rem] flex gap-3 items-start mt-10">
                        <img src="./img/aso/info.png" className="mt-[4px]" />
                        <p className="lg:text-[0.875rem] md:text-[0.75rem] text-[0.75rem] text-adb_text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
            {/* Plans */}

            <div className="flex justify-center items-center lg:p-0 md:px-8 px-5 mt-[3.75rem] mb-[6.25rem]">
                <div className="lg:w-[70rem] md:w-full w-full h-[13rem] bg-[#1C1F33] md:rounded-[2.5rem] rounded-[1.5rem] lg:p-[3.75rem] md:p-10 p-10 flex lg:justify-between lg:flex-row md:flex-row flex-col md:justify-between justify-center items-center">
                    <div className="lg:text-[1.75rem] md:text-[1.125rem] text-[1.25rem] font-bold text-adb_white">
                        <p className="md:block inline">
                            카테고리와 시즌에 따라 견적의
                        </p>
                        <p className="md:block inline">
                            차이가 있으며 상담으로 정확한 견적을 안내해드립니다.
                        </p>
                    </div>
                    <div className="md:w-auto w-full">
                        <button
                            onClick={handleNavClick}
                            className="block w-full font-bold py-4 md:w-[139px] bg-adb_blue hover:bg-abd_blue_hover text-adb_white rounded-[2rem] shadow-[inset_4px_4px_14px_0_rgba(255,255,255,0.2)] text-center lg:mt-0 md:mt-0 mt-5"
                        >
                            상담 문의
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AsoComponent;