import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { IProduct } from '../../typings/product'
import tw from 'twin.macro'
import { XIcon } from '@heroicons/react/solid'
// import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel"
// import "@brainhubeu/react-carousel/lib/style.css"
// import Carousel from 'react-bootstrap/Carousel'
import { SCREEN } from '../responsive'
import { Button } from '../button';
// import { DropDownLocation } from '../DropDownLocation'
import { ConfirmAddBasket } from '../confirmaddbasket'
import '../../css/animation.css'
import useEscape from '../../hooks/useEscape'
import { SelectSizeProduct } from '../selectSizeProduct'
import { SelectCityDropDown } from '../DropDownLocation/selectCity'
import { SelectDistrictDropDown } from '../DropDownLocation/selectDistrict'
import { SelectWardDropDown } from '../DropDownLocation/selectStreet'
// import { AnyObject } from 'immer/dist/internal';

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

import '../../css/carousel.css';

import { useHistory } from 'react-router-dom'
import { ProductPrice } from '../product/priceProduct'


interface IProductQuickViewModal extends IProduct {
    ids: string;
    _id?: string;
    onClose: any;
    setActiveModalOpen?: any;
}

const ModalAll = styled.div`
    ${tw`
        h-full
        w-full
        flex
        items-center
        justify-center
    `}
`

const ModalContainer = styled.div`
    z-index: 210;
    background: rgba(0,0,0,0.2);
    ${tw`
        absolute
        left-0
        right-0
        top-0
        bottom-0
        h-full
        w-full
        flex
        items-center
        justify-center
    `}
`

const ModalContent = styled.div`

    height: 65%;
    width: 70%;
    background: white;
    z-index:500;
    box-shadow: 0 1.3px 17px -2px rgb(0 0 0 / 40%);
    
    ${tw`
    relative
    // mb-5
    rounded-2xl
    flex
    flex-wrap
    items-center
    top-0
    bottom-0
    right-0
    left-0
    overflow-hidden
    overflow-y-auto
    `}

    @media (max-width: ${SCREEN.xl}){
        width: 100%;
        height: 70%;
    }

    @media (max-width: ${SCREEN.sm}){
        margin-top: 120px;
        width: 100%;
        height: 100%;
    }



`

const ModalLeftProduct = styled.div`
    height: calc(100% - 50px);
    ${tw`
        w-full
        lg:w-1/2
        // mb-5
    `}

    @media (max-width: ${SCREEN.sm}){
        height:270px;  
    }

`

const ModalCarouselProduct = styled.div`
     $tw{
         w-full
         h-full
         overflow-hidden
     }
`


const ModalRightProduct = styled.div`
    height: calc(100% - 50px);
    ${tw`
    w-full
    lg:w-1/2
    `}
`

const ModalContentRight = styled.div`

     ${tw`
        w-full
        h-full
        p-6
     `}

`

const ModalNameProduct = styled.span`
     ${tw`
        text-gray-700
        font-bold
        text-base
     `}
`

const ModalProductTitle = styled.div`
    
    ${tw`
    p-3
    w-full
    // bg-red-500
    flex
    items-center
    justify-center
    relative
    left-0
    right-0
    `}
`

const ModalProductHeaderText = styled.h2`

    ${tw`
        w-full
        h-full
        flex
        justify-center
        items-center
        font-extrabold
        text-gray-500
    `}

`

const ModalClose = styled.div`
    position: absolute;
    right: 12px;
    ${tw`
    h-full
    flex
    items-center
`}

`

const ModalImgThumbnail = styled.div`
     height: 50px;
     width: 50px;

     img{
         height: 100%;
         width: 100%;
         object-fit: cover;
     }
`

const BoxImg = styled.div`
    width: 90%;
    min-height: 27em;
    max-height: 27em;
    box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
    ${tw`
        flex
        flex-col
        items-center
        p-3
        pb-4
        bg-white
        rounded-md
        m-1
        sm:m-3
        md:m-6
        overflow-hidden
    `};

    @media (max-width: ${SCREEN.sm}){
        min-height: 12.4em;
        max-height: 12.4em;
    }

    
    @media (min-width: ${SCREEN.sm}) and (max-width: ${SCREEN.lg}){
        min-height: 20.4em;
        max-height: 20.4em;
    }

    @media (min-width: ${SCREEN.lg}) and (max-width: 1650px){
        min-height: 24.4em;
        max-height: 24.4em;
    }

`
const ImgProduct = styled.div`
    width: 100%;
    height: 400px;

    @media (max-width: ${SCREEN.sm}){
        width: 100%;
        height: 100%;
    }


`

const ImgThumbnail = styled.div`

width: 100%;
height: 100%;
img{
    width: 100%;
    height: 100%;
    // object-fit: cover;
}

`

const ModalDescProduct = styled.div`
    height: 100px;
    font-size: 20px;
    line-height: 25px;
    white-space: pre-wrap;
    span{
        display: block;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
    }
    ${tw`
        flex
        w-full
        text-justify
        overflow-hidden
    `}
`


const ProductColorModal = styled.div`
    ${tw`
            text-gray-400
            text-xs
            w-7
            h-7
            border-gray-200
            border-4
            rounded-full mx-1
            cursor-pointer
            hover:border-gray-400
        `
    };
`;

const ProductDetailModal = styled.div`
    ${tw`
    w-full
    flex
    items-center
    justify-between
    `}
 
`;

const BoxColorModal = styled.div`
    ${tw`
    flex
    items-center
    my-2
    z-10
    `};
`

const BoxSizeModal = styled.div`
    ${tw`
        w-3/6
    `}
`

const QuantityModalProduct = styled.div`

    ${tw`
        flex
        w-full
        items-center
    `}

    h2{
        ${tw`
        text-base
        font-semibold
        text-gray-500
        mr-2
        `}
    }

    span{
        ${tw`
        text-base
        font-semibold
        // text-gray-500
        // mr-2
        `}
    }

`



const ButtonProductModal = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        space-y-3
    `}

    @media (max-width: ${SCREEN.sm}){
        padding: 0 0 160px 0;
    }


`


const ButtonAddBasket = styled(Button)`
    height:40px;
 ${tw`
    w-4/6
 `}

`

const ButtonProductDetail = styled.button`

        height:40px;
        text-transform:uppercase;
    ${tw`
        w-4/6
        outline-none
        bg-yellow-500
        rounded-md
        text-white
        font-bold
        text-xs

        `
    }

`


const ModalSelectLocation = styled.div`
    width: 100%;
    
    ${tw`
     flex
     flex-wrap
     items-center
     justify-center
     mb-3
    `}
`

const ModalBoxSelectLocation = styled.div`
    width: 30%;
    ${tw`
    flex
    items-center
    mr-1
    `}

    @media (max-width: ${SCREEN.sm}){
        width: 100%;
        ${tw`
        mb-5
        `}
    }

`


SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);
export function ProductModalQuickView(props: IProductQuickViewModal) {

    const { _id,
        name,
        ImgUrlProduct,
        OldPrice,
        NewPrice,
        ColorProduct,
        QuantityProductAndSize,
        descProduct,
        ids,
        onClose,
        setActiveModalOpen
    } = props;

    const InitialProductValue = {
        name: name,
        imgUrlProduct: ImgUrlProduct,
        OldPrice: OldPrice,
        NewPrice: NewPrice,
        ColorProduct: ColorProduct,
        descProduct: descProduct,
        QuantityProductAndSize: QuantityProductAndSize,
    }

    // console.log(InitialProductValue);

    const [productModal, setProductModal] = useState(InitialProductValue);
    const [modal, setModal] = useState(false);
    // const [currentslides, setCurrentSlides] = useState(0);
    const [totalCost, setTotalCost] = useState(NewPrice);
    const [numberQuantity, setNumberQuantity] = useState(1);
    const [Quantity, setQuantity] = useState(0);
    const [city, setCityS] = useState("");
    const [district, setDistrictS] = useState("");
    const [ward, setWardS] = useState("");
    const [valueAnimation, setValueAnimation] = useState(false);
    const [isOpenAddBasket, setOpenAddBasket] = useState(false);
    const [Size, setSize] = useState("");
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const history = useHistory()

    const imgarray = [];
    imgarray.push(productModal.imgUrlProduct.imgfirst, productModal.imgUrlProduct.imgsecond, productModal.imgUrlProduct.imgthird);

    function getProduct() {
        const product = {
            name: name,
            imgUrlProduct: ImgUrlProduct,
            OldPrice: OldPrice,
            NewPrice: NewPrice,
            ColorProduct: ColorProduct,
            descProduct: descProduct,
            QuantityProductAndSize: QuantityProductAndSize,
        }
        setModal(true)
        setProductModal(product);
        // console.log(productModal);
    }


    // const ProductUnmount: any = {};

    useEffect(() => {
        let isCancelled = false;
        if (_id === ids) {
            getProduct();
            // console.log(QuantityProductAndSize);
            // console.log("rest")
        }
        return () => {
            isCancelled = true;
            // setCurrentSlides(0);
            // setProductModal(ProductUnmount);
            // console.log(productModal);
        }
    }, [_id, onClose])

    // slides Img Quick View
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

    // const thumbs = [];
    // for (let i = 0; i < 5; i += 1) {
    //     thumbs.push(
    //         <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
    //             <img
    //                 src={`https://picsum.photos/id/${i}/163/100`}
    //                 alt={`Thumbnail ${i}`}
    //             ></img>
    //         </SwiperSlide>
    //     );
    // }

    // const lengthThumbnails = imgarray.length;

    const size = Object.keys(productModal.imgUrlProduct).length;


    // console.log(size);


    const thumbnails = imgarray.map((img, index) => {
        if (img !== undefined) {

            return <SwiperSlide key={`thumb-${index}`} tag="li" style={{ listStyle: 'none', width: '60px' }}>
                <ModalImgThumbnail ><img src={img} alt={`Thumbnail ${index}`} /></ModalImgThumbnail>
            </SwiperSlide>
        } else {
            return "";
        }
    })

    // console.log(thumbnails)


    const handelDownquantity = () => {
        if (numberQuantity <= 1) {
            setNumberQuantity(1);
            setTotalCost(1 * totalCost!);
        } else {
            setNumberQuantity(numberQuantity - 1)
            setTotalCost((numberQuantity - 1) * NewPrice!);
        }
    }

    const handelUpquantity = () => {
        if (numberQuantity < Quantity) {
            setNumberQuantity(numberQuantity + 1)
            setTotalCost((numberQuantity + 1) * NewPrice!);
        } else if (Quantity === 0) {
            setNumberQuantity(1);
            setTotalCost(1 * totalCost!);
            // alert("You forgot select size");
        } else {
            setNumberQuantity(Quantity)
            setTotalCost(Quantity * NewPrice!)
        }

    }

    useEffect(() => {
        setNumberQuantity(1);
    }, [Quantity])


    // console.log(city, district, ward);


    const handelOpenAddBasket = (open: boolean) => {
        setOpenAddBasket(open);
    }

    const handelValueAnimation = (boolean: boolean) => {
        if (isOpenAddBasket) {
            setValueAnimation(boolean);
        }

    }

    useEscape(() => handelValueAnimation(true))

    const [selectColor, setSelectColor] = useState("");

    // console.log(selectColor);

    const handelCloseActiveModal = () => {
        setActiveModalOpen(true);
        onClose(false);
    }





    return (
        <>

            {modal && (
                <ModalAll>
                    <ModalContainer onClick={handelCloseActiveModal}></ModalContainer>
                    <ModalContent className="growth-animation">
                        <ModalProductTitle>
                            <ModalProductHeaderText>
                                QuicK View Product Choices
                            </ModalProductHeaderText>
                            <ModalClose> <XIcon className="h-6 cursor-pointer" onClick={handelCloseActiveModal} /></ModalClose>
                        </ModalProductTitle>
                        <ModalLeftProduct>
                            <ModalCarouselProduct>
                                {/* <Carousel
                                    value={currentslides}
                                    slides={slides}
                                    onChange={setCurrentSlides}
                                    plugins={[
                                        "clickToChange",
                                        {
                                            resolve: slidesToShowPlugin,
                                            options: {
                                                numberOfSlides: 1,
                                            },
                                        },
                                    ]}
                                />
                                <Dots value={currentslides} onChange={setCurrentSlides} thumbnails={thumbnails} /> */}

                                <Swiper
                                    // navigation={true}
                                    // effect={"coverflow"}
                                    // centeredSlides={true}
                                    tag="section"
                                    // wrapperTag="ul"
                                    // navigation
                                    pagination
                                    slidesPerView={1}
                                    // loop={true}
                                    // pagination={{
                                    //     clickable: true
                                    // }}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    className="mySwiper w-full"
                                >

                                    {slides && slides.map(slide => (
                                        <SwiperSlide key={Math.random()} className="">
                                            {slide}
                                        </SwiperSlide>
                                    ))}

                                </Swiper>
                                <div className="w-full flex items-center justify-center">
                                    <div className="w-1/2 flex items-center justify-center">
                                        <Swiper
                                            onSwiper={(value: any) => setThumbsSwiper(value)}
                                            // onSwiper={{swiper: setThumbsSwiper}}
                                            id="thumbs"

                                            spaceBetween={3}
                                            slidesPerView={size <= 3 ? 3 : size}
                                            className="w-full overflow-x-hidden flex items-center justify-center p-4"
                                        >
                                            <div className="Check" >{thumbnails}</div>
                                        </Swiper>
                                    </div>
                                </div>
                            </ModalCarouselProduct>


                        </ModalLeftProduct>
                        <ModalRightProduct>
                            <ModalContentRight>
                                <ModalNameProduct>
                                    {productModal.name}
                                </ModalNameProduct>
                                <ModalDescProduct>
                                    <span>
                                        {productModal.descProduct}
                                    </span>
                                </ModalDescProduct>
                                <ProductDetailModal>
                                    <BoxColorModal>
                                        {productModal.ColorProduct && productModal.ColorProduct?.map((color) => (
                                            <ProductColorModal onClick={() => setSelectColor(color)} key={Math.random()} style={{ background: color }}></ProductColorModal>
                                        ))}
                                    </BoxColorModal>
                                    <BoxSizeModal>
                                        <QuantityModalProduct><h2>Số lượng hiện có:</h2><span>{Quantity}</span></QuantityModalProduct>
                                        <SelectSizeProduct size={productModal.QuantityProductAndSize?.map((size) => size)} Size={Size} setSize={setSize} setQuantity={setQuantity} />
                                    </BoxSizeModal>
                                </ProductDetailModal>

                                <ProductPrice
                                    NewPrice={productModal.NewPrice}
                                    OldPrice={productModal.OldPrice}
                                    handelDownquantity={handelDownquantity}
                                    handelUpquantity={handelUpquantity}
                                    numberQuantity={numberQuantity}
                                    totalCost={totalCost}
                                />

                                <ModalSelectLocation>
                                    {/* <DropDownLocation setCityS={setCityS} setDistrictS={setDistrictS} setWardS={setWardS} /> */}
                                    <ModalBoxSelectLocation>
                                        <SelectCityDropDown city={city} setCity={setCityS} />
                                    </ModalBoxSelectLocation>
                                    <ModalBoxSelectLocation>
                                        <SelectDistrictDropDown city={city} district={district} setDistrict={setDistrictS} />
                                    </ModalBoxSelectLocation>
                                    <ModalBoxSelectLocation>
                                        <SelectWardDropDown city={city} district={district} ward={ward} setWard={setWardS} />
                                    </ModalBoxSelectLocation>
                                </ModalSelectLocation>
                                <ButtonProductModal>
                                    <ButtonAddBasket icons={true} text="Add Basket" onClick={() => handelOpenAddBasket(true)} />
                                    <ButtonProductDetail onClick={() => history.push('/product/' + _id)} >View Detail Product</ButtonProductDetail>
                                </ButtonProductModal>
                            </ModalContentRight>
                        </ModalRightProduct>
                    </ModalContent>
                    {isOpenAddBasket && (
                        <ConfirmAddBasket id={_id}
                            animation={valueAnimation}
                            setValueAnimation={setValueAnimation}
                            nameproduct={productModal.name}
                            description={productModal.descProduct}
                            color={selectColor}
                            colorArray={productModal.ColorProduct}
                            picture={productModal.imgUrlProduct.imgfirst}
                            open={isOpenAddBasket}
                            NewPrice={productModal.NewPrice}
                            OldPrice={productModal.OldPrice}
                            onClose={() => setOpenAddBasket(false)}
                            setSelectColor={setSelectColor}
                            city={city}
                            district={district}
                            ward={ward}
                            setCityS={setCityS}
                            setDistrictS={setDistrictS}
                            setWardS={setWardS}
                            numberQuantity={numberQuantity}
                            setNumberQuantity={setNumberQuantity}
                            handelUpquantity={handelUpquantity}
                            handelDownquantity={handelDownquantity}
                        />)}
                </ModalAll>
            )
            }
        </>
    )
}