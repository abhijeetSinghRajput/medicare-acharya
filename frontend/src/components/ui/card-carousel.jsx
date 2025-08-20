import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"
import { cn } from "@/lib/utils"


export const CardCarousel = ({
  images,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
  imageClassName,
}) => {
  const css = `
  .swiper {
    width: 100%;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    /* height: 300px; */
    /* margin: 20px; */
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  `
  return (
    <section className="w-ace-y-4">
      <style>{css}</style>
      <div
        className="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]">
        <div
          className="relative mx-auto flex w-full flex-col rounded-[24px] p-2 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">

          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                spaceBetween={50}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}>
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className={cn("aspect-square w-[300px] h-[300px] overflow-hidden rounded-3xl bg-gradient-to-b from-[#a7b4c8] via-[#bbc6d7] to-[#9996b9]", imageClassName)}>
                      <img
                        src={image.src}
                        alt={image.alt} 
                        className="h-full w-full object-cover rounded-xl"
                      />
                    </div>
                  </SwiperSlide>
                ))}
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className={cn("aspect-square w-[300px] h-[300px] overflow-hidden rounded-3xl bg-gradient-to-b from-[#a7b4c8] via-[#bbc6d7] to-[#9996b9]", imageClassName)}>
                      <img
                        src={image.src}
                        alt={image.alt} 
                        className="h-full w-full object-cover rounded-xl"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
