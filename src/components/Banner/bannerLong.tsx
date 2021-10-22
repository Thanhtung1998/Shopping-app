import * as React from 'react';
import tw from "twin.macro"
import styled from 'styled-components';
import Banner4 from "../../assets/banner/banner4.png"
import Banner5 from "../../assets/banner/banner5.png"

import { SCREEN } from '../responsive';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { useMediaQuery } from "react-responsive";
import SwiperCore, { Autoplay, EffectFlip, Pagination } from 'swiper/core';

import "../../css/carousel.css"

export interface BannerProps {
}

const BannerSection = styled.section`
    ${tw`
        w-full
        max-w-screen-2xl
    `}
`

const BannerContainer = styled.div`
    ${tw`
        w-full
    `}

`

const BannerWarper = styled.div`
    ${tw`
        w-full
        flex
        items-center
        justify-center
        flex-wrap
    `}
`

const BannerItems = styled.div`
    width: 30%;
    img{
        width: 70%;
        display: block;
        margin: 0 auto;
        height: 100%;
    }

    @media (max-width: ${SCREEN.sm}){
        width: 100%;
        height: 23rem;
        ${tw`
        my-4
        `}
        
    }
   
`

const BannerItemsSwiper = styled.div`
    height: 35rem;
    @media (max-width: ${SCREEN.sm}){
        height: 13rem;
        margin: 0 10px;
    })
`


export function BannerLong(props: BannerProps) {

    const params = {
        slidesPerView: 1,
        grabCursor: true,
        spaceBetween: 0,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false
        },
        // loop: true,

    }

    const isMobile = useMediaQuery({ maxWidth: SCREEN.sm })
    SwiperCore.use([Autoplay, EffectFlip, Pagination]);
    const dataSwiper = [
        <BannerItemsSwiper>
            <img src={Banner4} alt="" />
        </BannerItemsSwiper>,
        <BannerItemsSwiper>
            <img src={Banner5} alt="" />
        </BannerItemsSwiper>,
    ]

    return (
        <BannerSection>
            <BannerContainer>
                <BannerWarper>
                    <Swiper
                        effect={'flip'}
                        pagination={true}
                        {...params}
                        className="mySwiper w-full"
                    >

                        {dataSwiper && dataSwiper.map(data => (
                            <SwiperSlide key={Math.random()} className="">
                                {data}
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </BannerWarper>
            </BannerContainer>
        </BannerSection>
    );
}
