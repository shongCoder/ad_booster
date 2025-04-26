import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Carousel = ({ items }) => {
    return (
        <Swiper
            modules={[Autoplay]}
            loop={true}
            slidesPerView="auto"
            spaceBetween={40}
            centeredSlides={false}
            freeMode={true}
            freeModeMomentum={false}
            speed={8000}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
            }}
        >
            {[...items, ...items].map((item, index) => (
                <SwiperSlide
                    key={index}
                    style={{ width: 'auto' }}   // ✅ 슬라이드 하나하나 auto width
                >
                    <div className="mx-[20px] flex flex-col items-center justify-center">
                        <img
                            src={item.image}
                            alt={item.label}
                            className="w-[100px] h-[100px] object-cover"
                        />
                        <p className="text-center text-[0.8125rem] font-semibold text-gray-800">
                            {item.label}
                        </p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;