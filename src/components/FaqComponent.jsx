import {NavLink} from "react-router-dom";
import BoardComponent from "./BoardComponent.jsx";
import {useState} from "react";

function FaqComponent() {

    const [fileName, setFileName] = useState("app_marketing.json");
    const [activeMenu, setActiveMenu] = useState("app_marketing.json");

    const handleFileNameChange = (fileName) => {
        setFileName(fileName);
        setActiveMenu(fileName);
    }

    return (
        <div className="lg:mt-20 md-[3.5rem]">
            <div className="w-full flex flex-col justify-center items-center md:py-[6.25rem] py-10 md:px-8 px-5">
                <div
                    id="curriculum"
                    className="lg:w-[70rem] md:w-full w-full"
                >
                    <div className="flex md:justify-between md:flex-row flex-col md:items-end items-start">
                        <div>
                            <p className="text-adb_blue md:text-[0.875rem] text-[0.75rem] font-extrabold tracking-widest">
                                FAQ
                            </p>
                            <div className="font-bold md:text-[2.25rem] text-[1.5rem] text-adb_black mt-5">
                                <p>
                                    자주 묻는 질문
                                </p>
                            </div>
                        </div>
                        <div className="md:text-right text-left text-adb_text md:text-[1rem] text-[0.8125rem] font-medium">
                            <p>문의 전, 자주 묻는 질문에서 빠르게 해결해보세요.</p>
                            <p>더 궁금하신 점은 문의하기로 연락주세요.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ASO Title */}

            <div className="w-full border-b border-adb_gray flex justify-center items-center text-[1.125rem] pb-3">
                <ul className="flex gap-7">
                    <li className="text-[#c1c1c1]">
                        <NavLink to="/aso">
                            ASO
                        </NavLink>
                    </li>
                    <li className=" text-adb_black font-bold relative after:absolute after:content-[''] after:w-[6.375rem] after:h-[3px] after:left-0 after:bottom-[-0.8rem] after:bg-adb_black">
                        <NavLink to="/app-marketing">
                            자주 묻는 질문
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* Sub Title */}

            <div className="w-full flex flex-col justify-center items-center md:py-[6.25rem] py-10 md:px-8 px-5">
                <div className="flex gap-10 lg:w-[70rem] md:w-full w-full">
                    <div className="flex-[1] ">
                        <div>
                            <p className="text-adb_blue md:text-[0.875rem] text-[0.75rem] font-extrabold tracking-widest">
                                FAQ
                            </p>
                            <div className="font-bold md:text-[1.75rem] text-[1.5rem] text-adb_black mt-5">
                                <p>
                                    많은 유저들이 궁금해했던
                                </p>
                                <p>
                                    질문들을 모아봤어요
                                </p>
                            </div>
                        </div>
                        <div className="mt-10 flex">
                            <div
                                className="w-[2px] mr-3 mt-8 min-h-full"
                                style={{
                                    backgroundImage: "linear-gradient(to bottom, #e8e8e8 0%, rgba(232,232,232,0) 100%)",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover"
                                }}
                            >
                            </div>
                            <ul>
                                <li
                                    onClick={() => handleFileNameChange("app_marketing.json")}
                                    className={`cursor-pointer relative mt-7 ${
                                        activeMenu === "app_marketing.json"
                                            ? "text-adb_black font-semibold before:absolute before:left-[-0.9rem] before:top-1/2 before:translate-y-[-50%] before:w-[2.5px] before:h-6 before:bg-adb_blue before:rounded-xl"
                                            : "text-adb_text"
                                    }`}
                                >
                                    앱 마케팅 자주 묻는 질문
                                </li>

                                <li
                                    onClick={() => handleFileNameChange("keyword_install.json")}
                                    className={`cursor-pointer relative mt-7 ${
                                        activeMenu === "keyword_install.json"
                                            ? "text-adb_black font-semibold before:absolute before:left-[-0.9rem] before:top-1/2 before:translate-y-[-50%] before:w-[2.5px] before:h-6 before:bg-adb_blue before:rounded-xl"
                                            : "text-adb_text"
                                    }`}
                                >
                                    키워드 설치 관련 자주 묻는 질문
                                </li>

                                <li
                                    onClick={() => handleFileNameChange("review_optimization.json")}
                                    className={`cursor-pointer relative mt-7 ${
                                        activeMenu === "review_optimization.json"
                                            ? "text-adb_black font-semibold before:absolute before:left-[-0.9rem] before:top-1/2 before:translate-y-[-50%] before:w-[2.5px] before:h-6 before:bg-adb_blue before:rounded-xl"
                                            : "text-adb_text"
                                    }`}
                                >
                                    평점 및 리뷰 최적화
                                </li>

                                <li
                                    onClick={() => handleFileNameChange("app_fast.json")}
                                    className={`cursor-pointer relative mt-7 ${
                                        activeMenu === "app_fast.json"
                                            ? "text-adb_black font-semibold before:absolute before:left-[-0.9rem] before:top-1/2 before:translate-y-[-50%] before:w-[2.5px] before:h-6 before:bg-adb_blue before:rounded-xl"
                                            : "text-adb_text"
                                    }`}
                                >
                                    AppFast 계정 설정
                                </li>

                                <li
                                    onClick={() => handleFileNameChange("app_package.json")}
                                    className={`cursor-pointer relative mt-7 ${
                                        activeMenu === "app_package.json"
                                            ? "text-adb_black font-semibold before:absolute before:left-[-0.9rem] before:top-1/2 before:translate-y-[-50%] before:w-[2.5px] before:h-6 before:bg-adb_blue before:rounded-xl"
                                            : "text-adb_text"
                                    }`}
                                >
                                    앱 패키지 설치
                                </li>

                                <li
                                    onClick={() => handleFileNameChange("promotion_result.json")}
                                    className={`cursor-pointer relative mt-7 ${
                                        activeMenu === "promotion_result.json"
                                            ? "text-adb_black font-semibold before:absolute before:left-[-0.9rem] before:top-1/2 before:translate-y-[-50%] before:w-[2.5px] before:h-6 before:bg-adb_blue before:rounded-xl"
                                            : "text-adb_text"
                                    }`}
                                >
                                    프로모션 결과 보장
                                </li>

                                <li
                                    onClick={() => handleFileNameChange("payment.json")}
                                    className={`cursor-pointer relative mt-7 ${
                                        activeMenu === "payment.json"
                                            ? "text-adb_black font-semibold before:absolute before:left-[-0.9rem] before:top-1/2 before:translate-y-[-50%] before:w-[2.5px] before:h-6 before:bg-adb_blue before:rounded-xl"
                                            : "text-adb_text"
                                    }`}
                                >
                                    결제 관련
                                </li>

                                <li
                                    onClick={() => handleFileNameChange("refund.json")}
                                    className={`cursor-pointer relative mt-7 ${
                                        activeMenu === "refund.json"
                                            ? "text-adb_black font-semibold before:absolute before:left-[-0.9rem] before:top-1/2 before:translate-y-[-50%] before:w-[2.5px] before:h-6 before:bg-adb_blue before:rounded-xl"
                                            : "text-adb_text"
                                    }`}
                                >
                                    환불
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-[2] ">
                        <BoardComponent fileName={fileName} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default FaqComponent;