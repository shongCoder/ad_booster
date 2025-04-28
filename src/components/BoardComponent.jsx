import "../styles/board.css"
import {useEffect, useRef, useState} from "react";
import axios from "axios";

function BoardComponent({ fileName }) {
    const [data, setData] = useState([]);
    // 각 항목의 상태를 개별적으로 관리하는 배열
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);

    console.log("board")

    useEffect(() => {
        if (!fileName) return;

        axios.get(`/ad_booster/data/${fileName}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching JSON:", error);
            });
    }, [fileName]);

    // 클릭된 항목만 열리고, 이미 열려있는 경우 닫힘
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <div id="board">
                <div className="w-full">
                    {/* 아코디언 리스트 */}
                    {data.map((item, index) => (
                        <div key={index} className={`border rounded-[1.25rem] lg:px-6 md:px-4 px-4 lg:py-8 md:py-6 py-6 mb-4
                                        ${openIndex === index ? "border-[#1956FE0A] bg-[#1956FE05]" : "border-adb_gray"}
                                    `}>
                            {/* 제목 (클릭하면 해당 항목만 열리고 닫힘) */}
                            <div
                                onClick={() => toggleAccordion(index)}
                                className="flex items-center justify-between cursor-pointer"
                            >
                                            <span className={`text-left lg:text-[1.25rem] md:text-[0.875rem] text-[0.875rem] font-semibold
                                                ${openIndex === index ? "text-adb_purple" : "text-adb_black"}
                                            `}>
                                              {item.title}
                                            </span>
                                <img
                                    src={openIndex === index ? "./img/faq/minus.png" : "./img/faq/add.png"}
                                    className={`lg:w-5 md:w-4 md:w-5 w-4 transition-transform duration-300 ${
                                        openIndex === index ? "rotate-90" : "rotate-0"
                                    }`}
                                />
                            </div>

                            {/* 내용 (해당 항목이 열렸을 때만 표시) */}
                            <div className="text-adb_text text-[0.875rem]"
                                 ref={(el) => (contentRefs.current[index] = el)}
                                 style={{
                                     maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : "0px",
                                     overflow: "hidden",
                                     transition: "max-height 0.5s ease",
                                 }}
                            >
                                <div dangerouslySetInnerHTML={{ __html: item.content }} className="pt-3" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BoardComponent;