import { useState, useEffect } from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import { IProduct } from "../../typings/product"
import { Button } from '../button';
import { QuickView } from '../quickView'


interface IProductProps extends IProduct {
    id?: string;
    setQuickView?: any;
    setActiveModalOpen?: any;
    setId?: any;
    onOpenChange?: any;
}


const ProductContainer = styled.div`
    width: 18em;
    min-height: 27em;
    max-height: 27em;
    box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
    background: var(--dark);
    ${tw`
        flex
        flex-col
        items-center
        p-3
       
        rounded-md
        m-1
        sm:m-3
        md:m-6

    `};
`;

const ProductThumbnailPicture = styled.div`
    width: 100%;
    height: 200px;
`

const ProductThumbnail = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
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
    background: rgba(255, 255, 255, 0.1)
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
    border-radius: 15px;
    ${tw`
    cursor-pointer p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 focus:outline-none active:from-yellow-500 font-bold
    `}
`

const ProductName = styled.h3`
    color: var(--light);
    ${tw`
        text-base 
        font-bold 
        
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

const Seperator = styled.div`
    min-height: 1px;
    min-width: 100%;
    
    ${tw`
        flex
        bg-gray-300
        mt-2
        
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
    color: var(--light);
    ${tw`
        text-justify
        w-full
    `}
`

const RentButton = styled(Button)`
    height: 37px;
    ${tw`
        min-w-full
        pt-5
    `}
`;


export function Product(props: IProductProps) {

    const { id, name, ImgUrlProduct, OldPrice, NewPrice, ColorProduct, descProduct, setQuickView, onOpenChange } = props;

    // console.log(ImgUrlProduct.img);

    // console.log(id);

    const colors = ColorProduct;



    // const product = []; product.push(name, ImgUrlProduct, OldPrice, NewPrice, ColorProduct, descProduct);

    // useEffect(() => {
    //     props.setId(id);
    // }, [])

    function handleQuickChange(open: boolean, id?: string) {
        // if (onOpenChange) {
        //     onOpenChange(open);
        //     console.log("I love You")
        // }
        // setActiveModalOpen(false);
        // console.log(id);
        if (onOpenChange) {
            onOpenChange(open, id)
        }
    }



    return (
        <>
            <ProductContainer>
                <ProductThumbnailPicture>
                    <ProductThumbnail>
                        <img src={ImgUrlProduct.imgfirst} alt="" />
                    </ProductThumbnail>
                </ProductThumbnailPicture>
                <ProductName>{name}</ProductName>
                <PricesContainer>
                    <NewPriceValue>{NewPrice}<SmallText>vnđ</SmallText></NewPriceValue>
                    <OldPriceValue>{OldPrice}<SmallText>vnđ</SmallText></OldPriceValue>
                </PricesContainer>
                <Seperator />

                <ProductDetailsContainer>
                    <ProductDetail>
                        {colors && colors?.map((color) => (
                            <ProductColor key={Math.random()} style={{ background: color }}></ProductColor>
                        ))}
                    </ProductDetail>
                </ProductDetailsContainer>
                <ProductDesc>
                    <ProductDescSpan>{descProduct}</ProductDescSpan>
                </ProductDesc>
                <RentButton icons={true} text="Buy Now" onClick={() => handleQuickChange(true, id)} />
            </ProductContainer>


        </>
    );
}


