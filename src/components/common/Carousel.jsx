// src/components/Carousel.jsx
import React, {useEffect, useMemo} from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const Carousel = ({ items }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        skipSnaps: false,
    });

    const extendedItems = useMemo(() => [...items, ...items, ...items], [items]);


    useEffect(() => {
        if (emblaApi) {
            const centerIndex = Math.floor(extendedItems.length / 2);
            emblaApi.scrollTo(centerIndex);
        }
    }, [emblaApi, extendedItems]);

    return (
        <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex">
                {extendedItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex-[0_0_auto] mx-[20px] flex flex-col items-center justify-center"
                    >
                        <img
                            src={item.image}
                            alt={item.label}
                            className="w-[100px] h-[100px] object-cover"
                        />
                        <p className="text-center text-[0.8125rem] font-semibold text-gray-800">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
