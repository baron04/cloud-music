import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper-bundle.css";

import { SliderContainer } from "./style";

function Slider(props) {
  const { bannerList } = props;

  return (
    <SliderContainer>
      <div className="before"></div>
      <div className="slider-container">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={true}
          loop={true}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="swiper-wrapper"
        >
          {bannerList.map(slider => {
            return (
              <SwiperSlide className="swiper-slide" key={slider.imageUrl}>
                <div className="slider-nav">
                  <img
                    src={slider.imageUrl}
                    width="100%"
                    height="100%"
                    alt="推荐"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </SliderContainer>
  );
}

export default Slider;
