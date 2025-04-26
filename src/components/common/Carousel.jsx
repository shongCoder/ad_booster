import { useEffect, useRef } from 'react';

const Carousel = ({ items }) => {
    const containerRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        let position = 0;
        const speed = 0.5; // ✅ 속도 (숫자 작을수록 더 느리게 흐름)

        const move = () => {
            position -= speed;
            if (Math.abs(position) >= container.scrollWidth / 2) {
                position = 0;
            }
            container.style.transform = `translateX(${position}px)`;
            animationRef.current = requestAnimationFrame(move);
        };

        animationRef.current = requestAnimationFrame(move);

        return () => {
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <div className="overflow-hidden w-full">
            <div
                ref={containerRef}
                className="flex"
                style={{
                    width: 'max-content',
                    whiteSpace: 'nowrap',
                    willChange: 'transform',
                }}
            >
                {[...items, ...items].map((item, index) => (
                    <div
                        key={index}
                        className="flex-[0_0_auto] mx-[20px] flex flex-col items-center justify-center"
                    >
                        <img
                            src={item.image}
                            alt={item.label}
                            className="w-[100px] h-[100px] object-cover"
                        />
                        <p className="text-center text-[0.8125rem] font-semibold text-gray-800">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;