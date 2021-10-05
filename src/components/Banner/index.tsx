import * as React from 'react';
import tw from "twin.macro"
import styled from 'styled-components';
import Banner1 from "../../assets/banner/banner1.png"
import Banner2 from "../../assets/banner/banner2.png"
import Banner3 from "../../assets/banner/banner3.png"
import { SCREEN } from '../responsive';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { useMediaQuery } from "react-responsive";


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
        img{
        width: 70% !important;
        display: block;
        margin: 0 auto;
        height: 100%;
    }

   
`


export function Banner(props: BannerProps) {

    const isMobile = useMediaQuery({ maxWidth: SCREEN.sm })

    const dataSwiper = [
        <BannerItemsSwiper>
            <img src={Banner1} alt="" />
        </BannerItemsSwiper>,
        <BannerItemsSwiper>
            <img src={Banner2} alt="" />
        </BannerItemsSwiper>,
        <BannerItemsSwiper>
            <img src={Banner3} alt="" />
        </BannerItemsSwiper>

    ]

    return (
        <BannerSection>
            <BannerContainer>
                <BannerWarper>
                    {!isMobile && (<div className="flex"> {dataSwiper && (
                        dataSwiper.map(data => (
                            <div key={Math.random()}>
                                {data}
                            </div>
                        )))
                    }
                    </div>
                    )}

                    {isMobile && (
                        <Swiper
                            // navigation={true}
                            // effect={"coverflow"}
                            // centeredSlides={true}
                            slidesPerView={1}
                            spaceBetween={0}
                            // loop={true}
                            pagination={{
                                // clickable: true
                            }}
                            className="mySwiper w-full"
                        >

                            {dataSwiper && dataSwiper.map(data => (
                                <SwiperSlide key={Math.random()} className="">
                                    {data}
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    )}

                </BannerWarper>
            </BannerContainer>
        </BannerSection>
    );
}
