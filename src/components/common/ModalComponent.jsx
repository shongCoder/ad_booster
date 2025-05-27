import useModalStore from "../../store/modalStore.js";

function ModalComponent() {
  const { isOpen, title, content, closeModal } = useModalStore();

  if (!isOpen) return null;

  const handleClose = () => {
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[1000]">
      <div className="bg-white rounded-[0.75rem] pt-4 px-6 pb-5 shadow-lg lg:w-[28.75rem] md:w-[28.75rem] w-[18.75rem] text-center">
        <div className="lg:text-[1.25rem] md:text-[1.25rem] text-[1rem] font-semibold mb-3 flex items-center justify-between w-full">
          <span className="opacity-0">-</span> {/* 안 보이는 요소 */}
          <p className="text-center flex-1">{title}</p> {/* 중앙 정렬 */}
          <img
            onClick={handleClose}
            src="./img/modal/icon-x-mono.png"
            className="ml-auto"
           alt="close" />
          {/* 완전 우측 끝 배치 */}
        </div>
        <div className="w-full flex justify-center items-center mt-3">
          <img src="./img/modal/talk_icon.png" alt="talkIcon" className="md:w-20 w-[3.75rem]" />
        </div>
        <p className="lg:text-[1rem] md:text-[1rem] text-[0.8125rem] text-gray-600 mt-3 mb-3 whitespace-pre-line">
          {content}
        </p>
        <div className="flex gap-3">
          <a href="https://open.kakao.com/o/syVE8lsh" target="_blank" className="w-full">
            <button
                onClick={handleClose}
                className="flex items-center justify-center gap-1 mt-3 lg:text-[1rem] md:text-[1rem] text-[0.75rem] bg-[#FFE812] text-black font-bold lg:py-4 md:py-4 py-3 lg:rounded-[0.75rem] md:rounded-[0.75rem] rounded-[0.5rem] w-full"
            >
              <img src="./img/modal/kakao.png" alt="kakao" className="md:h-5 h-4" />
              문의하기
            </button>
          </a>
          <a href="https://t.me/Ad7Booster" target="_blank" className="w-full">
            <button
                onClick={handleClose}
                className="flex items-center justify-center gap-1 mt-3 lg:text-[1rem] md:text-[1rem] text-[0.75rem] bg-[#2AABEE] text-white font-bold lg:py-4 md:py-4 py-3 lg:rounded-[0.75rem] md:rounded-[0.75rem] rounded-[0.5rem] w-full"
            >
              <img src="./img/modal/tel.png" alt="tel" className="md:h-5 h-4" />
              문의하기
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;
