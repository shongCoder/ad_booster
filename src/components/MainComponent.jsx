function MainComponent() {

    console.log("MainComponent");

    return (
        <div>
            <div className="lg:w-full md:w-full w-full">
                <div className="w-full h-auto bg-[url('/img/main/background_img.png')] bg-cover bg-center">
                    <div className="w-full h-full bg-gradient-to-b from-gray-100 to-transparent bg-[length:100%_13%] bg-no-repeat flex justify-center items-center">
                        <div className="md:pt-40 pt-20 pb-[40rem] w-full text-center">
                            <p className="text-adb_purple mb-4 md:text-[1rem] text-[0.625rem]">
                                국내 구글스토어에 최적화된 앱 마케팅 솔루션
                            </p>
                            <p className="md:text-[4.5rem] text-[2rem] font-bold text-adb_black mb-2">
                                앱 상위 노출,
                            </p>
                            <p className="md:text-[4.5rem] text-[2rem] font-bold text-adb_black mb-2">
                                더 이상 고민하지 마세요
                            </p>
                            <div className="text-adb_text md:text-[1.125rem] text-[0.8125rem]">
                                <p className="md:block inline">
                                    해외 솔루션과 달리, ASO 12년 경험의 구글코리아 출신 마스터 개발자가
                                </p>
                                <p className="md:block inline">
                                    직접 설계하여 국내 환경에 완벽히 맞췄습니다.
                                </p>
                            </div>
                            <div className="mt-10">
                                <button className="py-4 px-14 bg-adb_blue text-adb_white rounded-[2rem] shadow-[inset_4px_4px_14px_0_rgba(255,255,255,0.2)]">
                                    문의하기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 메인 비주얼 */}

                <div className="flex justify-center items-center mb-[3.75rem]">
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
                                <p className="text-adb_blue md:text-[0.875rem] text-[0.75rem] font-extrabold tracking-widest">
                                    ABOUT
                                </p>
                                <div className="font-bold md:text-[2.25rem] text-[1.5rem] text-adb_black mt-3">
                                    <p>
                                        그거 아시나요? 검색 결과가
                                    </p>
                                    <p>
                                        앱 다운로드의 70%를 결정합니다.
                                    </p>
                                </div>
                            </div>
                            <div className="md:text-right text-left text-adb_text md:text-[1rem] text-[0.8125rem] font-medium">
                                <p className="text-[0.8125rem] font-light">2025년 1월 구글키워드 플레너 기준</p>
                                <p>사용자의 89%는 앱을 다운로드할 때</p>
                                <p>상위 10개 결과만 주의 깊게 살펴본다고 합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col justify-center items-center md:px-8 px-5">
                    <div className="lg:w-[70rem] md:w-full w-full">
                        <div className="flex gap-5 w-full mb-5">
                            <div className="flex-1 flex justify-between flex-col h-[21.25rem] p-8 rounded-[1.25rem] bg-gradient-to-br from-[#275CFD] to-[#3A40FE] shadow-[inset_4px_4px_14px_0_rgba(255,255,255,0.2)]">
                                <p className="text-[#C8C8C8] font-play font-bold tracking-[0.12rem]">APP GROWTH KEYWORD</p>
                                <div className="flex justify-between items-end">
                                    <div className="text-white">
                                        <p className="text-[1.5rem] font-bold">앱 성공의 시작,<br/>유저 다운로드 확보</p>
                                        <p className="text-[#C8C8C8]">높은 다운로드는 더 높은 노출로 이어집니다.<br/>애드크랙은 스토어 1위에 목표로 움직입니다.</p>
                                    </div>
                                    <div>
                                        <img src="./img/main/rocket.png" alt="rocket img" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex gap-5 mb-5 h-[10rem]">
                                    <div className="bg-adb_light_gray flex-1 flex flex-col justify-center items-center rounded-[1.25rem] border border-adb_gray">
                                        <p className="text-[2.75rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#376AFB] to-[#6822FE]">
                                            70<span className="text-[1.25rem]">%</span>
                                        </p>
                                        <p className="text-adb_black font-bold">앱 다운로드 중 검색 비율</p>
                                    </div>
                                    <div className="bg-adb_light_gray flex-1 flex flex-col justify-center items-center rounded-[1.25rem] border border-adb_gray">
                                        <p className="text-[2.75rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#376AFB] to-[#6822FE]">
                                            89<span className="text-[1.25rem]">%</span>
                                        </p>
                                        <p className="text-adb_black font-bold">상위 10개 플랫폼 점유율</p>
                                    </div>
                                </div>
                                <div className="bg-adb_light_gray flex-1 h-[10rem] flex flex-col justify-center items-center rounded-[1.25rem] border border-adb_gray">
                                    <p className="text-[2.75rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#376AFB] to-[#6822FE]">
                                        427,451<span className="text-[1.25rem]">프로젝트</span>
                                    </p>
                                    <p className="text-adb_black font-bold">애드부스터와 함께한 프로젝트</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5 w-full">
                            <div className="flex-[4] flex justify-between flex-col h-[21.25rem] p-8 rounded-[1.25rem] bg-adb_light_gray border border-adb_gray">
                                <p className="text-[#8493BD] font-play font-bold tracking-[0.12rem]">TOP RANKING STRATEGY</p>
                                <div className="flex justify-between items-end">
                                    <div className="text-white">
                                        <p className="text-[1.5rem] text-adb_black font-bold">보장된 순위,<br/>검증된 키워드 전략</p>
                                        <p className="text-[#898D99]">정밀한 키워드 전략과 함께<br/>지정 순위 달성을 정가제로 보장합니다.</p>
                                    </div>
                                    <div>
                                        <img src="./img/main/winner.png" alt="rocket img" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-[1] p-8 flex justify-between flex-col rounded-[1.25rem]  bg-gradient-to-br from-[#1E2948] to-[#242048] shadow-[inset_4px_4px_14px_0_rgba(255,255,255,0.2)]">
                                <p className="text-[#8493BD] font-play font-bold tracking-[0.12rem]">GLOBAL COVERAGE</p>
                                <div className="flex-col items-end">
                                    <div className="flex justify-center items-center">
                                        <img src="./img/main/tags.png" alt="rocket img" />
                                    </div>
                                    <div className="text-white w-full text-center">
                                        <p className="text-[1.5rem] text-white font-bold">글로벌 키워드 커버</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainComponent;