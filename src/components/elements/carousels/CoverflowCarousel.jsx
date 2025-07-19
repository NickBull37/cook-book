import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import { MenuItem } from '../../';

const CoverflowCarousel = ({ recipes, setShoppingList }) => {
    return (
        <div style={{ width: '100%', padding: '1rem 0' }}>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
                style={{ width: '100%', paddingBottom: '3rem' }}
            >
                {recipes.map((recipe, index) => (
                    <SwiperSlide style={{ width: '300px' }}>
                        <MenuItem
                            recipe={recipe}
                            setShoppingList={setShoppingList}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CoverflowCarousel;
