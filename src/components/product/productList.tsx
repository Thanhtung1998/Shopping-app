import React, { memo, useEffect, useRef } from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import { IProduct } from "../../typings/product"
import { Button } from '../button';
import '../../css/productList.css'
import {
    EyeIcon,
} from '@heroicons/react/outline'

import useResize from '../../hooks/useResize'


interface IProductProps extends IProduct {
    _id?: string,
    isopen: boolean,
    onOpenChange: any,
    setActiveModalOpen?: any,
}




const ProductContainer = styled.div`
    width: 100%;
    min-height: 35em;
    // max-height: 30em;
    box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
    background-color: var(--surface-background);
    ${tw`
        flex
        flex-col
        items-center
        // justify-center
        p-5
        rounded-md
        mx-2
        sm:mx-1
        md:mx-2
    `};
`;

const BrandContent = styled.div`

    ${tw`
    w-full
    relative
    pt-3
    `}
    span{
        color: var(--secondary-text);
        ${tw`
        absolute
        z-10
        -top-3
        -right-1
        text-sm  
        italic 
        text-gray-400
        `}
       
    }

`

const ProductThumbnailPicture = styled.div`
    width: 100%;
    display: block;
`
const ProductThumbnail = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    display: block;
    img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        ${tw`
        rounded-md
        `}
    }
    ${tw``};
`;

const ProductViewMore = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
    }
`

const ViewMoreBox = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
`

const ViewMoreBtn = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
 
`

const ViewMoreBtnS = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${tw`
    cursor-pointer p-2 rounded-md text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 focus:outline-none active:from-yellow-500 font-bold
    `}
`

const ProductName = styled.h3`
    color: var(--secondary-text);
    display: block;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    text-transform: uppercase;
    ${tw`
        text-center
        text-base 
        font-bold 
        overflow-hidden
        mt-1 mb-1 
        cursor-default
    `};
`;

const PricesContainer = styled.div`
    ${tw`
    w-full
    flex
    justify-start
    mt-1
    `};
`;

const SmallText = styled.p`
    color: inherit;
    ${tw`
        text-xs
        font-thin
    `}
`;

const NewPriceValue = styled.h5`
    ${tw`
        text-red-500
        font-bold
        text-sm
        mr-3
        flex
        cursor-default
    `};
`;

const OldPriceValue = styled.h5`
    ${tw`
        text-gray-500
        font-bold
        text-sm
        flex
        line-through
        cursor-default
    `};
`;

const ProductDetailsContainer = styled.div`
    ${tw`
    flex
    w-full
    justify-between
    `};
`;

const ProductDetail = styled.div`
    ${tw`
        flex
        items-center
        my-2
        z-10
    `};
`;

const ProductColor = styled.div`
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

const SeparatorBefore = styled.div`
    min-height: 1px;
    min-width: 100%;
    
   
    ${tw`
        flex
        bg-gray-300
        mt-2 
        `
    };
   
`;

const SeparatorAfter = styled.div`
    min-height: 1px;
    min-width: 100%;
    
   
    ${tw`
        flex
        bg-gray-300
        `
    };
   
`;

const ProductDesc = styled.div`
    min-height: 40px;
    max-height: 40px;
    ${tw`
        flex
        items-center
        justify-center
        my-2
        overflow-hidden
        w-full
    `};
`;

const ProductDescSpan = styled.span`
    height: 40px;
    font-size: 18px;
    line-height: 20px;
    display: block;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: var(--secondary-text);
    ${tw`
        text-justify
        w-full
    `}
`

const RentButton = styled(Button)`
    height: 37px;
    margin-top:auto;
    ${tw`
        min-w-full
        pt-5
    `}
`;


export function ProductList(props: IProductProps) {

    // const [IdCurrent, setIdCurrent] = useState("")

    const [width, height] = useResize();
    const boxImgRef = useRef(null);
    // console.log(width, height)

    const { name, brand, ImgUrlProduct, OldPrice, NewPrice, ColorProduct, descProduct, onOpenChange, setActiveModalOpen } = props;

    const _id = props._id

    // console.log(IdCurrent);

    // console.log(QuantityProductAndSize);

    const colors = ColorProduct;

    // console.log(id);

    const handleQuickChange = (e: any, open: boolean, id: string | undefined) => {
        // if (onOpenChange) {
        //     onOpenChange(open);
        //     console.log("I love You")
        // }
        // setActiveModalOpen(false);

        e.preventDefault();

        // console.log("render")

        if (onOpenChange) {
            onOpenChange(open, id)
        }
    }


    useEffect(() => {
        const elements: any = document.querySelectorAll("#thumbnails--product");
        // console.log(elements)

        if (width && height) {
            elements.forEach((element: any, index: any) => {
                const rectElement = element?.getBoundingClientRect()
                // console.log(rectElement?.width)  
                if (rectElement && element) {
                    element.style.height = `${rectElement?.width}px`
                }
            })

            // console.log("re-render")
        }

    }, [width, height])


    // useEffect(() => {
    //     if (id) {
    //         console.log(name);
    //     }
    // }, [id])

    return (
        <>
            <ProductContainer>
                <BrandContent>
                    <span>{brand}</span>
                </BrandContent>
                <ProductThumbnailPicture ref={boxImgRef} id="thumbnails--product">
                    <ProductThumbnail className="images-animation">
                        <img className="images__product" srcSet={`${ImgUrlProduct.imgfirst}`} alt="" sizes={"(min-width: 0rem) 100vw"} />
                        <ProductViewMore className="images__product">
                            <img className="viewMore-img" srcSet={`${ImgUrlProduct.imgsecond} 2x`} alt="" />
                            <ViewMoreBox>
                                <ViewMoreBtn>
                                    <ViewMoreBtnS onClick={(e: any) => {
                                        handleQuickChange(e, true, _id);
                                    }}>
                                        <span>Quick View</span>
                                        <EyeIcon className="h-6 ml-1" />
                                    </ViewMoreBtnS>
                                </ViewMoreBtn>
                            </ViewMoreBox>
                        </ProductViewMore>
                    </ProductThumbnail>
                </ProductThumbnailPicture>
                <ProductName >{name}</ProductName>
                <PricesContainer>
                    <NewPriceValue >{NewPrice}<SmallText>vnđ</SmallText></NewPriceValue>
                    <OldPriceValue>{OldPrice}<SmallText>vnđ</SmallText></OldPriceValue>
                </PricesContainer>
                <SeparatorBefore />

                <ProductDetailsContainer>
                    <ProductDetail>
                        {colors && colors?.map((color) => (
                            <ProductColor key={Math.random()} style={{ background: color }}></ProductColor>
                        ))}
                    </ProductDetail>
                </ProductDetailsContainer>
                <SeparatorAfter />
                <ProductDesc>
                    <ProductDescSpan>{descProduct}</ProductDescSpan>
                </ProductDesc>
                <RentButton icons={true} text="Buy Now" />

            </ProductContainer>

        </>
    );
}

memo(ProductList)
