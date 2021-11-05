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
    background-color: var(--comment-background);
    box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
    ${tw`
        flex
        flex-col
        justify-center
        items-center
        p-3
        rounded-md
        m-1
        sm:m-3
        // md:m-6
        overflow-hidden
    `};

    @media (min-width: ${SCREEN['2xl']}){
        min-height: 26.5em;
        // max-height: 26.5em;
    }

    @media (max-width: ${SCREEN.xl}) and (max-height: ${SCREEN['2xl']}){
        min-height: 24em;
        // max-height: 24em;
    }
    
    @media (min-width: ${SCREEN.lg}) and (max-width: ${SCREEN.xl}){
        min-height: 17.5em;
        // max-height: 17.5em;
    }


    @media (min-width: ${SCREEN.md}) and (max-width: ${SCREEN.lg}){
        min-height: 25em;
        // max-height: 25em;
    }
    
    @media (min-width: ${SCREEN.sm}) and (max-width: ${SCREEN.md}){
        min-height: 25em;
        // max-height: 25em;
    }

    @media (max-width: ${SCREEN.sm}){
        min-height: 14em;
        // max-height: 14em;
    }
   

`
const ImgProduct = styled.div`

        display:flex;
        align-items: center;
        justify-content:center;
    
    @media (min-width: ${SCREEN['2xl']}){
        width: 100%;
        min-height: 25rem;
        overflow: hidden;
    }

    @media (min-width: ${SCREEN.xl}) and (max-width: ${SCREEN['2xl']}){
        width: 100%;
        min-height: 22.5rem;
        overflow: hidden;
    }

    @media (min-width: ${SCREEN.lg}) and (max-width: ${SCREEN.xl}){
        width: 100%;
        min-height: 16rem;
        overflow: hidden;
    }
    

    @media (min-width: ${SCREEN.md}) and (max-width: ${SCREEN.lg}){
        width: 100%;
        min-height: 23.5rem;
        overflow: hidden;
    }
    
    @media (min-width: ${SCREEN.sm}) and (max-width: ${SCREEN.md}){
        width: 100%;
        min-height: 23.5rem;
        overflow: hidden;
    }

    @media (max-width: ${SCREEN.sm}){
        width: 100%;
        min-height: 12.5rem;
        overflow: hidden;
    }
 
`

const ImgThumbnail = styled.div`

width: 100%;
height: 100%;

img{
    
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;

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
