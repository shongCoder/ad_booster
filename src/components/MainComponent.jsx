import Carousel from "./common/Carousel.jsx";

function MainComponent() {

    const items = [
        { image: './img/main/carousel/carousel1.png', label: '엔터테인먼트' },
        { image: './img/main/carousel/carousel2.png', label: '생산성' },
        { image: './img/main/carousel/carousel3.png', label: '유틸리티' },
        { image: './img/main/carousel/carousel4.png', label: '라이프스타일' },
        { image: './img/main/carousel/carousel5.png', label: '게임' },
        { image: './img/main/carousel/carousel6.png', label: '금융' },
        { image: './img/main/carousel/carousel7.png', label: '라이프스타일' },
        { image: './img/main/carousel/carousel8.png', label: '엔터테인먼트' },
        { image: './img/main/carousel/carousel9.png', label: '생산성' },
        { image: './img/main/carousel/carousel10.png', label: '여행' },
        { image: './img/main/carousel/carousel11.png', label: '도서' },
    ];

    return (
        <div>
            <div className="lg:w-full md:w-full w-full">
                <div className="w-full h-[1200px] bg-[url('/img/main/background_img.png')] bg-cover bg-top">
                    <div className="w-full z-50 absolute">
                        <img src="./img/main/adb_web.gif"  className="w-full lg:block md:hidden hidden"/>
                        <img src="./img/main/adb_tab.gif"  className="w-full lg:hidden md:block hidden"/>
                    </div>
                    <div className="w-full h-full bg-gradient-to-b from-gray-100 to-transparent bg-[length:100%_13%] bg-no-repeat flex justify-center">
                        <div className="lg:pt-40 md:pt-40 pt-40 pb-[40rem] w-full text-center md:px-8 px-5">
                            <p className="text-adb_purple mb-4 lg:text-[1rem] md:text-[0.875rem] text-[0.75rem]">
                                국내 구글스토어에 최적화된 앱 마케팅 솔루션
                            </p>
                            <p className="lg:text-[3rem] md:text-[2.75rem] text-[1.75rem] font-bold text-adb_black mb-2">
                                앱 상위 노출,
                            </p>
                            <p className="lg:text-[3rem] md:text-[2.75rem] text-[1.75rem] font-bold text-adb_black mb-2">
                                더 이상 고민하지 마세요
                            </p>
                            <div className="text-adb_text lg:text-[1.125rem] md:text-[1rem] text-[0.8125rem]">
                                <p className="md:block inline">
                                    해외 솔루션과 달리, ASO 12년 경험의 구글코리아 출신 마스터 개발자가
                                </p>
                                <p className="md:block inline">
                                    직접 설계하여 국내 환경에 완벽히 맞췄습니다.
                                </p>
                            </div>
                            <div className="mt-10">
                                <a href="https://t.me/AD_Crack" target="_blank" rel="noopener noreferrer">
                                    <button className="py-4 px-14 bg-adb_blue hover:bg-abd_blue_hover text-adb_white rounded-[2rem] shadow-[inset_4px_4px_14px_0_rgba(255,255,255,0.2)]">
                                        문의하기
                                    </button>
                                </a>
                            </div>
                            <div className="relative w-full flex justify-center items-center mt-10">
                                <img src="./img/main/phone.png" className="relative z-0" />

                                {/* 1. 아래 50% 완전 화이트 덮기 */}
                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white z-10"></div>

                                {/* 2. 그 위에 부드럽게 투명해지는 그라데이션 */}
                                <div className="absolute bottom-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent z-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 메인 비주얼 */}

                <div className="relative absolute w-full z-20">
                    <div className="flex justify-center items-center md:mb-[3.75rem] mb-0">
                        <img src="./img/main/dashed_line.png" alt="dashed line" />
                    </div>
                    {/* 세로선 */}

                    <div className="w-full flex flex-col justify-center items-center md:py-[3.75rem] py-10 md:px-8 px-5">
                        <div
                            id="curriculum"
                            className="lg:w-[70rem] md:w-full w-full"
                        >
                            <div className="flex md:justify-between md:flex-row flex-col md:items-end items-start">
                                <div>
                                    <p className="font-play text-adb_blue lg:text-[0.875rem] md:text-[0.8125rem] text-[0.8125rem] font-extrabold tracking-widest">
                                        ABOUT
                                    </p>
                                    <div className="font-bold lg:text-[2.25rem] md:text-[1.75rem] text-[1.5rem] text-adb_black mt-3 md:mb-0 mb-5">
                                        <p>
                                            그거 아시나요? 검색 결과가
                                        </p>
                                        <p>
                                            앱 다운로드의 70%를 결정합니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="md:text-right text-left text-adb_text lg:text-[1rem] md:text-[0.8125rem] text-[0.8125rem] font-medium">
                                    <p className="lg:text-[0.8125rem] md:text-[0.75rem] font-light mb-3">2025년 1월 구글키워드 플레너 기준</p>
                                    <p>사용자의 89%는 앱을 다운로드할 때</p>
                                    <p>상위 10개 결과만 주의 깊게 살펴본다고 합니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* About Title */}

                    <div className="w-full flex flex-col justify-center items-center md:mb-20 mb-9 md:px-8 px-5">
                        <div className="lg:w-[70rem] md:w-full w -full">
                            <div className="md:flex block lg:gap-5 md:gap-4 w-full md:mb-5 mb-3">
                                <div className="flex-1 flex justify-between flex-col lg:h-[21.25rem] md:h-[19rem] md:mb-0 mb-3 lg:p-8 md:p-8 p-5 rounded-[1.25rem] bg-gradient-to-br from-[#275CFD] to-[#3A40FE] shadow-[inset_4px_4px_14px_0_rgba(255,255,255,0.2)]">
                                    <p className="text-[#C8C8C8] font-play lg:text-[1rem] md:text-[0.6875rem] text-[0.6875rem] font-bold tracking-[0.12rem]">APP GROWTH KEYWORD</p>
                                    <div className="flex justify-between items-end">
                                        <div className="text-white md:w-auto w-[50%]">
                                            <p className="lg:text-[1.5rem] md:text-[1.125rem] font-bold mb-3">앱 성공의 시작,<br/>유저 다운로드 확보</p>
                                            <p className="lg:text-[1rem] md:text-[0.75rem] text-[0.75rem] text-[#C8C8C8]">높은 다운로드는 더 높은 노출로 이어집니다.<br/>애드크랙은 스토어 1위에 목표로 움직입니다.</p>
                                        </div>
                                        <div>
                                            <img src="./img/main/rocket.png" alt="rocket img" className="md:w-auto w-[140px]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex lg:gap-5 md:gap-4 gap-3 lg:mb-5 md:mb-4 mb-4 lg:h-[10rem] md:h-[9rem] h-[7.5rem]">
                                        <div className="bg-adb_light_gray flex-1 flex flex-col justify-center items-center rounded-[1.25rem] border border-adb_gray">
                                            <p className="lg:text-[2.75rem] md:text-[2.25rem] text-[2.25rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#376AFB] to-[#6822FE]">
                                                70<span className="text-[1.25rem]">%</span>
                                            </p>
                                            <p className="text-adb_black font-bold lg:text-[1rem] md:text-[0.8125rem] text-[0.8125rem]">앱 다운로드 중 검색 비율</p>
                                        </div>
                                        <div className="bg-adb_light_gray flex-1 flex flex-col justify-center items-center rounded-[1.25rem] border border-adb_gray">
                                            <p className="lg:text-[2.75rem] md:text-[2.25rem] text-[2.25rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#376AFB] to-[#6822FE]">
                                                89<span className="text-[1.25rem]">%</span>
                                            </p>
                                            <p className="text-adb_black font-bold lg:text-[1rem] md:text-[0.8125rem] text-[0.8125rem]">상위 10개 플랫폼 점유율</p>
                                        </div>
                                    </div>
                                    <div className="bg-adb_light_gray flex-1 lg:h-[10rem] md:h-[9rem] h-[7.5rem] flex flex-col justify-center items-center rounded-[1.25rem] border border-adb_gray">
                                        <p className="lg:text-[2.75rem] md:text-[2.25rem] text-[2.25rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#376AFB] to-[#6822FE]">
                                            427,451<span className="text-[1.25rem]">프로젝트</span>
                                        </p>
                                        <p className="text-adb_black font-bold lg:text-[1rem] md:text-[0.8125rem] text-[0.8125rem]">애드부스터와 함께한 프로젝트</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex block lg:gap-5 md:gap-4 w-full">
                                <div className="lg:flex-[4] md:flex-[3] flex justify-between md:mb-0 mb-3 flex-col md:h-[21.25rem] h-[11.75rem] md:p-8 p-5 rounded-[1.25rem] bg-adb_light_gray border border-adb_gray">
                                    <p className="text-[#8493BD] font-play lg:text-[1rem] md:text-[0.6875rem] text-[0.6875rem] font-bold tracking-[0.12rem]">TOP RANKING STRATEGY</p>
                                    <div className="flex justify-between items-end">
                                        <div className="text-white md:w-auto w-[50%]">
                                            <p className="lg:text-[1.5rem] md:text-[1.125rem] text-[1.125rem] text-adb_black font-bold">보장된 순위,<br/>검증된 키워드 전략</p>
                                            <p className="lg:text-[1rem] md:text-[0.75rem] text-[0.75rem] text-[#898D99]">정밀한 키워드 전략과 함께<br/>지정 순위 달성을 정가제로 보장합니다.</p>
                                        </div>
                                        <div>
                                            <img src="./img/main/winner.png" alt="rocket img" className="md:w-auto w-[120px]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:flex-[1] md:flex-[2] p-8 flex justify-between flex-col rounded-[1.25rem]  bg-gradient-to-br from-[#1E2948] to-[#242048] shadow-[inset_4px_4px_14px_0_rgba(255,255,255,0.2)]">
                                    <p className="text-[#8493BD] font-play lg:text-[1rem] md:text-[0.6875rem] text-[0.6875rem] font-bold tracking-[0.12rem]">GLOBAL COVERAGE</p>
                                    <div className="flex-col items-end">
                                        <div className="flex justify-center items-center">
                                            <img src="./img/main/tags.png" alt="rocket img" />
                                        </div>
                                        <div className="text-white w-full text-center">
                                            <p className="lg:text-[1.5rem] md:text-[1.125rem] text-[1.125rem] text-white font-bold">글로벌 키워드 커버</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* About contents */}

                    <div className="w-full flex flex-col justify-center items-center md:pt-[3.75rem] pt-10 md:px-8 px-5">
                        <div
                            id="curriculum"
                            className="lg:w-[70rem] md:w-full w-full"
                        >
                            <div className="flex md:justify-between md:flex-row flex-col md:items-end items-start">
                                <div>
                                    <p className="font-play text-adb_blue lg:text-[0.875rem] md:text-[0.8125rem] text-[0.8125rem] font-extrabold tracking-widest">
                                        SUCCESS STORY
                                    </p>
                                    <div className="font-bold lg:text-[2.25rem] md:text-[1.75rem] text-[1.5rem] text-adb_black mt-3 md:mb-0 mb-5">
                                        <p>
                                            지금 필요한 건,
                                        </p>
                                        <p>
                                            확실한 상위 노출입니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="md:text-right text-left text-adb_text lg:text-[1rem] md:text-[0.8125rem] text-[0.8125rem] font-medium">
                                    <p>이제는 '보장된' 성과를 경험할 차례입니다.</p>
                                    <p>상위 랭킹까지. 결과로 증명합니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Success Story Title */}

                    <div className="w-full flex flex-col justify-center items-center mb-20 md:pt-[3.75rem] pt-10 md:px-8 px-5">
                        <div className="lg:w-[70rem] md:w-full w-full border border-adb_gray md:py-7 py-5 md:px-6 px-5 rounded-[1rem]">
                            <p className="lg:text-[1.5rem] md:text-[1.25rem] font-bold text-adb_purple md:mb-7 mb-5">애드부스터 성공 케이스</p>
                            <div className="flex lg:flex-row md:flex-row flex-col overflow-x-auto">
                                <div className="md:p-4 p-2 flex-1">
                                    <div className="lg:w-full md:w-[325.33px] w-full lg:h-auto md:h-[13.75rem] h-auto md:mb-6 mb-5">
                                        <img src="./img/main/case1.png" className="cover" />
                                    </div>
                                    <div>
                                        <p className="text-adb_text md:text-[1rem] text-[0.8125rem] font-semibold">운세어플 &#183; 소개팅 &#183; 채팅</p>
                                        <p className="text-adb_black text-[1.25rem] font-bold mt-2 md:mb-3 mb-1">4위 랭크</p>
                                        <p className="text-adb_text md:text-[1rem] text-[0.8125rem]">2023년 12월 97위 &#8594; 2025년 3월 4위 랭크</p>
                                    </div>
                                </div>
                                <div className="md:p-4 p-2 flex-1">
                                    <div className="lg:w-full md:w-[325.33px] w-full lg:h-auto md:h-[13.75rem] h-auto md:mb-6 mb-5">
                                        <img src="./img/main/case2.png" className="cover" />
                                    </div>
                                    <div>
                                        <p className="text-adb_text md:text-[1rem] text-[0.8125rem] font-semibold">코인거래 &#183; 금융거래 &#183; 해외거래소</p>
                                        <p className="text-adb_black text-[1.25rem] font-bold mt-2 md:mb-3 mb-1">5위 랭크</p>
                                        <p className="text-adb_text md:text-[1rem] text-[0.8125rem]">2024년 2월 211위 &#8594; 2025년 3월 5위 랭크</p>
                                    </div>
                                </div>
                                <div className="md:p-4 p-2 flex-1">
                                    <div className="lg:w-full md:w-[325.33px] w-full lg:h-auto md:h-[13.75rem] h-auto md:mb-6 mb-5">
                                        <img src="./img/main/case3.png" className="cover" />
                                    </div>
                                    <div>
                                        <p className="text-adb_text md:text-[1rem] text-[0.8125rem] font-semibold">게임 &#183; 유틸 &#183; 커뮤니티</p>
                                        <p className="text-adb_black text-[1.25rem] font-bold mt-2 md:mb-3 mb-1">3위 랭크</p>
                                        <p className="text-adb_text md:text-[1rem] text-[0.8125rem]">2024년 5월 163위 &#8594; 2025년 3월 3위 랭크</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Success Story Contents */}

                    <div className="md:py-10 pb-10">
                        <Carousel items={items} />
                    </div>
                    {/* Carousel */}

                    <div className="w-full flex flex-col justify-center items-center md:py-[3.75rem] py-10 md:px-8 px-5 bg-[url('/img/main/gradient.png')] bg-[length:100%_100%] bg-center bg-no-repeat">
                        <div className="lg:w-[70rem] md:w-full w-full">
                            <div className="font-play text-center font-black lg:text-[2.5rem] md:text-[2.25rem] text-[1.5rem] text-adb_black transform scale-y-95 mb-3">
                                <p>Easily top-ranked</p>
                                <p>in App Store & Google Play</p>
                            </div>
                            <p className="text-adb_text lg:text-[1rem] md:text-[0.8125rem] text-[0.8125rem] text-center">App Store/Google Play의 모든 검색 결과에서 상단에 위치한 앱을 쉽게 찾을 수 있습니다.</p>
                        </div>
                        <a href="https://t.me/AD_Crack" target="_blank" rel="noopener noreferrer">
                            <button
                                className="px-5 mt-10 py-[0.625rem] font-play text-[1rem] text-adb_white shadow-inner bg-adb_purple hover:bg-abd_purple_hover md:rounded-3xl rounded-3xl font-bold whitespace-nowrap flex items-center justify-between"
                                style={{boxShadow: 'inset 4px 4px 14px rgba(255, 255, 255, 0.2)'}}>
                            <span>
                                Contact Us
                            </span>
                                <div className="w-[1rem]"></div>
                                <img src="./img/main/white_arrow_right.png" className="cover" />
                            </button>
                        </a>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default MainComponent;