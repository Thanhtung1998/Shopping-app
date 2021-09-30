import React, { useState } from 'react';
import styled from 'styled-components'
import tw from 'twin.macro'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
// import "./styles.css";
import SwiperCore, {
    Pagination,
    Navigation,
    Thumbs,
    Controller
} from "swiper/core";
import { SCREEN } from '../../components/responsive'

import '../../css/carousel.css';

const ModalImgThumbnail = styled.div`
     height: 50px;
     width: 50px;

     img{
         height: 100%;
         width: 100%;
         object-fit: cover;
         border-radius: 50%;
     }
`

const BoxImg = styled.div`
    width: 100%;
    min-height: 28em;
    max-height: 28em;
    box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
    ${tw`
        flex
        flex-col
        justify-center
        items-center
        p-3
        bg-white
        rounded-md
        m-1
        sm:m-3
        // md:m-6
        overflow-hidden
    `};

    
    @media (max-width: ${SCREEN.sm}){
        min-height: 12.4em;
        max-height: 12.4em;
    }

    
    @media (min-width: ${SCREEN.sm}) and (max-width: ${SCREEN.lg}){
        min-height: 25em;
        max-height: 25em;
    }

    @media (min-width: ${SCREEN.lg}) and (max-width: 1200px){
        min-height: 17em;
        max-height: 17em;
    }

 
`
const ImgProduct = styled.div`
    width: 100%;
    height: 400px;

    @media (max-width: ${SCREEN.lg}){
        width: 100%;
        height: 240px;
    }
    

    @media (max-width: ${SCREEN.md}){
        width: 100%;
        height: 370px;
    }
    
    @media (max-width: ${SCREEN.sm}){
        width: 100%;
        height: 170px;
    }
 
`

const ImgThumbnail = styled.div`

width: 100%;
height: 100%;

img{
   
    width: 100%;
    height: 100%;
    object-fit: cover;
}

`

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);
export function PictureProduct(props: any) {

    const { picture } = props

    // console.log(picture);

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    let imgarray = [];
    if (picture) {
        imgarray.push(picture.imgfirst, picture.imgsecond, picture.imgthird);
    }

    const slides = imgarray.map(img => {
        if (img !== undefined) {
            return (
                <BoxImg key={Math.random()}>
                    <ImgProduct>
                        <ImgThumbnail>
                            <img src={img} alt="" />
                        </ImgThumbnail>
                    </ImgProduct>
                </BoxImg>

            )
        } else {
            return "";
        }
    })

    const size = imgarray.length;

    const thumbnails = imgarray.map((img, index) => {
        if (img !== undefined) {

            return <SwiperSlide key={`thumb-${index}`} tag="li" style={{ listStyle: 'none', display: 'flex', width: '60px' }}>
                <ModalImgThumbnail ><img src={img} alt={`Thumbnail ${index}`} /></ModalImgThumbnail>
            </SwiperSlide>
        } else {
            return "";
        }
    })


    return (
        <div className="w-full">
            <Swiper
                tag="section"
                pagination
                slidesPerView={1}
                thumbs={{ swiper: thumbsSwiper }}
                className="mySwiper w-full"
            >

                {slides && slides.map((slide: any) => (
                    <SwiperSlide key={Math.random()} className="">
                        {slide}
                    </SwiperSlide>
                ))}



            </Swiper>

            <div className="w-full flex items-center justify-center mt-3">
                <div className="w-full md:w-1/2  flex items-center justify-center">
                    <Swiper
                        onSwiper={(value: any) => setThumbsSwiper(value)}
                        // onSwiper={{swiper: setThumbsSwiper}}
                        id="thumbs"
                        spaceBetween={3}
                        slidesPerView={size <= 3 ? 3 : size}
                        className="w-full overflow-x-hidden flex items-center justify-center p-4"
                    >
                        <div className="Check w-full">{thumbnails}</div>
                    </Swiper>

                </div>
            </div>

        </div>
    );
}
