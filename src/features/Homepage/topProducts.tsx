import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import tw from "twin.macro";
// import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel"
// import "@brainhubeu/react-carousel/lib/style.css"
import { IProduct } from '../../typings/product';
import { Product } from '../../components/product'
import { useMediaQuery } from "react-responsive";
import { SCREEN } from "../../components/responsive";
import axios from 'axios'
// import { Dispatch } from "redux";
import MoonLoader from "react-spinners/MoonLoader";
import { QuickView } from '../../components/quickView';


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
// import "./styles.css";
// import SwiperCore, {
//     EffectCoverflow,
//     Pagination,
//     Navigation
// } from "swiper/core";

import '../../css/carousel.css';
import topProductApi from '../../api/topProductApi';

interface IActiveModalOpen {
    activeModalOpen?: boolean;
    setActiveModalOpen?: any;
}

const TopProductsContainer = styled.div`
    ${tw`
    max-w-screen-2xl
    w-full
    flex
    flex-col
    items-center
    justify-around
    pr-3
    pl-3
    md:pl-0
    md:pr-0
    mb-10
    `}
`

const TitleTopProduct = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const ProductsContainer = styled.div`
  ${tw`
    w-full
    mt-6
  `};
`;

// const EmptyProducts = styled.div`
//   ${tw`
//     w-full
//     flex
//     justify-center
//     items-center
//     text-sm
//     text-gray-500
//   `};
// `;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `};
`;


export function TopProducts(props: IActiveModalOpen) {

    // const testProduct: IProduct = {
    //     name: "Quần áo mùa đông",
    //     ColorProduct: ["red", "yellow", "blue"],
    //     descProduct: "Quần áo mùa đông nhìn là mê mệt mua ngay keo het keo het",
    //     OldPrice: 1100000,
    //     NewPrice: 900000,
    //     ImgUrlProduct: {
    //         "imgfirst": "https://tngfashion.vn/image/catalog/2021/menu_nu1.jpg"
    //     },
    // }

    const [current, setCurrent] = useState(0);
    const isMobile = useMediaQuery({ maxWidth: SCREEN.sm });
    const isTablet = useMediaQuery({ maxWidth: SCREEN.md });
    const isLaptop = useMediaQuery({ maxWidth: SCREEN.xl });
    const [isLoading, setLoading] = useState(false);
    const [topProduct, setTopProduct] = useState([]);
    const [product, setProduct] = useState([])
    // const [id, setId] = useState("")
    // const [data, setData] = useState([<Product {...testProduct}></Product>]);
    // const [numberOfDots, setNumberOfDots] = useState(1);
    // const [numberOfDotTablet, setNumberOfDotTablet] = useState(1);

    const fetchTopProductHeroku = async () => {
        setLoading(true);
        try {
            const res = await topProductApi.getAllProduct();
            setTopProduct(res.data.product);
            setProduct(res.data.product);
        } catch (error: any) {
            const res = await axios.get("TopProduct");
            setTopProduct(res.data);
            setProduct(res.data);
        }
        setLoading(false);

    }

    const [isQuickView, setQuickView] = useState(false)
    const [currentID, setCurrentID] = useState("")

    // const handleActive = () => {
    //     if (true) {

    //     }
    // }

    useEffect(() => {
        fetchTopProductHeroku();
    }, []);


    // console.log(props.activeModalOpen)

    function handleOpenQuickView(open: boolean, id: string) {
        // console.log(id)
        setQuickView(open)
        setCurrentID(id)
    }

    const emptyData = !topProduct || topProduct.length === 0;

    const products = (!emptyData && (topProduct.map((topProduct: IProduct) => <Product {...topProduct} setActiveModalOpen={props.setActiveModalOpen} onOpenChange={handleOpenQuickView} />)) || [])

    // console.log(products);


    // const numberOfDots = isMobile ? products.length : Math.ceil(products.length / 4);
    // const numberOfDotTablet = isTablet ? Math.ceil(products.length / 3) : Math.ceil(products.length / 4);


    const numberShow = isMobile ? 1 : isTablet ? 2 : isLaptop ? 3 : 4;

    // console.log(Emtydata);

    // const testProduct2: IProduct = {
    //     name: "Quần áo mùa đông",
    //     ColorProduct: ["red", "yellow", "blue"],
    //     descProduct: "Quần áo mùa đông nhìn là mê mệt",
    //     OldPrice: 1100000,
    //     NewPrice: 900000,
    //     ImgUrlProduct: { "imgfirst": "https://cdn.fitin.vn/cms-ecom/thumbs/1200x1200/images/2020/05/06/gia-treo-quan-ao-a-hanger-1fl-den-0001-1588757060.jpg" },
    // }

    // const products = [
    //     (<Product {...testProduct} />),
    //     (<Product {...testProduct} />),
    //     (<Product {...testProduct} />),
    //     (<Product {...testProduct} />),
    //     (<Product {...testProduct} />),]

    // console.log(current);

    return (
        <>
            <TopProductsContainer>
                <TitleTopProduct >Top Products In Month</TitleTopProduct>
                <ProductsContainer>
                    {isLoading && (
                        <LoadingContainer>
                            <MoonLoader size={30} />
                        </LoadingContainer>
                    )}
                    {!emptyData && (
                        // <ProductsContainer>


                        //     {/* {
                        //         (
                        //             topProduct && topProduct.map((product) => (
                        //                 <Product {...product} setActiveModalOpen={props.setActiveModalOpen} onOpenChange={handleOpenQuickView} />
                        //             ))
                        //         )
                        //     } */}

                        //     <Carousel value={current}
                        //         onChange={setCurrent}
                        //         // set up point


                        //         plugins={[
                        //             // 'clickToChange',
                        //             // 'infinite',
                        //             // 'arrows',
                        //             {
                        //                 resolve: slidesToShowPlugin,
                        //                 options: {
                        //                     numberOfSlides: 4,
                        //                 },
                        //             },
                        //         ]}
                        //         // responesive
                        //         breakpoints={{
                        //             640: {
                        //                 plugins: [
                        //                     // 'infinite',
                        //                     {
                        //                         resolve: slidesToShowPlugin,
                        //                         options: {
                        //                             numberOfSlides: 1,
                        //                         },
                        //                     },
                        //                 ],
                        //             },
                        //             900: {
                        //                 plugins: [
                        //                     // 'infinite',
                        //                     {
                        //                         resolve: slidesToShowPlugin,
                        //                         options: {
                        //                             numberOfSlides: 2,
                        //                         },
                        //                     },
                        //                 ],
                        //             },
                        //             1024: {
                        //                 plugins: [
                        //                     // 'infinite',
                        //                     {
                        //                         resolve: slidesToShowPlugin,
                        //                         options: {
                        //                             numberOfSlides: 3,
                        //                         },
                        //                     },
                        //                 ],
                        //             },
                        //         }}

                        //         slides={products} />
                        //     <Dots value={current} onChange={setCurrent} number={isTablet ? numberOfDotTablet : numberOfDots} />
                        // </ProductsContainer>
                        <></>
                    )}


                    <Swiper
                        // navigation={true}
                        // effect={"coverflow"}
                        // centeredSlides={true}
                        slidesPerView={numberShow}
                        spaceBetween={0}
                        // loop={true}
                        pagination={{
                            // clickable: true
                        }}
                        className="mySwiper w-full"
                    >

                        {products && products.map(product => (
                            <SwiperSlide key={Math.random()} className="">
                                {product}
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </ProductsContainer>

            </TopProductsContainer>

            {isQuickView && (
                <QuickView setActiveModalOpen={props.setActiveModalOpen} isopen={isQuickView} setCurrent={setCurrent} product={product} ids={currentID} onClose={() => setQuickView(false)}></QuickView>)}

        </>
    )
}