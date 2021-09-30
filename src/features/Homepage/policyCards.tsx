import React, { useState, useEffect } from "react"
import styled from "styled-components";
import tw from "twin.macro"
import { PolicyCard } from "../../components/policyCard";
import { IPolicyCard } from "../../typings/policyCard"
import { useMediaQuery } from "react-responsive";
import { SCREEN } from "../../components/responsive";
// import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel"

// import "@brainhubeu/react-carousel/lib/style.css"

// Test Carouel

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
// import "./styles.css";
import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation
} from "swiper/core";

import '../../css/carousel.css';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);


const PolicyCardsContainer = styled.div`
${tw`
    max-w-screen-2xl
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
`}
`

const PolicyCardsTitle = styled.h2`
${tw`
text-3xl
lg:text-5xl
text-black
font-extrabold
`};
`

const PolicyCardContent = styled.div`
${tw`
w-full
flex
flex-wrap
justify-center
items-center
mt-7
md:mt-10
`}
`



export function PolicyCards() {

    const PolicyCard1: IPolicyCard = {
        name: "Giao hàng miễn phí",
        description: "Miễn phí ship với đơn hàng >= 239.000vnđ",
        icon: "bx bx-shopping-bag",
    }

    const PolicyCard2: IPolicyCard = {
        name: "Thanh toán COD",
        description: "Thanh toán khi nhận hàng (COD)",
        icon: "bx bx-credit-card",
    }

    const PolicyCard3: IPolicyCard = {
        name: "Khách hàng VIP",
        description: "Ưu đãi dành cho khách hàng VIP Ưu đãi dành cho khách hàng VIP Ưu đãi dành cho khách hàng VIPƯu đãi dành cho khách hàng VIP",
        icon: "bx bx-diamond",
    }

    const PolicyCard4: IPolicyCard = {
        name: "Hỗ trợ bảo hành",
        description: "Đổi, sửa đồ tại tất cả store",
        icon: "bx bx-donate-heart",
    }
    const isMobile = useMediaQuery({ maxWidth: SCREEN.sm });
    const isTablet = useMediaQuery({ maxWidth: SCREEN.md });
    const isLaptop = useMediaQuery({ maxWidth: SCREEN.xl });
    // const isTablet = useMediaQuery({ maxWidth: SCREEN.md });
    const [currentPolicy, setCurrentPolicy] = useState(0);

    const [policys, setPolicys] = useState([<PolicyCard {...PolicyCard1} />]);


    const policys1 =
        [<PolicyCard {...PolicyCard1} />,
        <PolicyCard {...PolicyCard2} />,
        <PolicyCard {...PolicyCard3} />,
        <PolicyCard {...PolicyCard4} />,
        <PolicyCard {...PolicyCard4} />,
        <PolicyCard {...PolicyCard4} />,
        ];

    useEffect(() => {

        const handlePolicyCard = () => {

            setPolicys(policys1);
        }

        let isCancelled = false;

        // console.log(isCancelled);

        handlePolicyCard();
        return () => {
            isCancelled = true;
            setPolicys([<PolicyCard {...PolicyCard1} />]);
            setCurrentPolicy(0);
        }

    }, [])




    // const policys1 = [PolicyCard1, PolicyCard2, PolicyCard3, PolicyCard4]

    // const numberOfDots = isMobile ? policys.length : Math.ceil(policys.length / 4);

    const numberShow = isMobile ? 1 : isTablet ? 2 : isLaptop ? 3 : 4;

    // console.log(window.innerWidth);

    // const numberOfDots2 = isTablet ? policys.length : Math.ceil(policys.length / 2);

    return (
        <PolicyCardsContainer>
            <PolicyCardsTitle>Service Policy</PolicyCardsTitle>
            <PolicyCardContent>
                {/* {policys && policys.map((policy) => (
                    <PolicyCard {...policy} />
                ))} */}
                {/* <Carousel value={currentPolicy}
                    onChange={setCurrentPolicy}
                    // set up point
                    plugins={[
                        // 'clickToChange',
                        // 'infinite',
                        // 'arrows',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 4,
                            },
                        },
                    ]}
                    // responesive
                    breakpoints={{
                        640: {
                            plugins: [
                                'infinite',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1,
                                    },
                                },
                            ],
                        },
                        900: {

                            plugins: [
                                // 'infinite',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 2,
                                    },
                                },
                            ],
                        },
                        1024: {

                            plugins: [
                                // 'infinite',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 3,
                                    },
                                },
                            ],
                        },
                    }}
                    slides={policys} />
                <Dots value={currentPolicy} onChange={setCurrentPolicy} number={numberOfDots} /> */}


                <Swiper
                    // navigation={true}
                    // effect={"coverflow"}
                    // centeredSlides={true}
                    slidesPerView={numberShow}
                    // loop={true}
                    pagination={{
                        // clickable: true
                    }}
                    className="mySwiper"
                >

                    {policys && policys.map(policy => (
                        <SwiperSlide key={Math.random()} className="">
                            {policy}
                        </SwiperSlide>
                    ))}

                </Swiper>

            </PolicyCardContent>
        </PolicyCardsContainer>
    )
}