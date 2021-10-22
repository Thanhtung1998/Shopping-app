import { useState, useEffect } from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import { IProduct } from "../../typings/product"
import { Button } from '../button';
import { QuickView } from '../quickView'


interface IProductProps extends IProduct {
    _id?: string;
    setQuickView?: any;
    setActiveModalOpen?: any;
    setId?: any;
    onOpenChange?: any;
}

const ProductContainer = styled.div`
    width: 20.375rem;
    min-height: 30em;
    max-height: 30em;
    box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
    background-color: var(--surface-background);
    ${tw`
        flex
        flex-col
        items-center
        p-5
        rounded-md
        m-2
        sm:m-3
        md:m-6
    `};


`;

const BrandContent = styled.div`

    ${tw`
    w-full
    relative
    pt-3
    `}
    span{
        text-transform: capitalize;
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
        ${tw`
        rounded-md
        `}
    }
    ${tw``};
`;

const ProductName = styled.h3`
    color: var(--secondary-text);
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

export function Product(props: IProductProps) {

    const { _id, brand, name, ImgUrlProduct, OldPrice, NewPrice, ColorProduct, descProduct, setQuickView, onOpenChange } = props;

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
        console.log(id);
        if (onOpenChange) {
            onOpenChange(open, id)
        }
    }



    return (
        <>
            <ProductContainer>

                <BrandContent>
                    <span>{brand}</span>
                </BrandContent>
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
                <RentButton icons={true} text="Buy Now" onClick={() => handleQuickChange(true, _id)} />
            </ProductContainer>
        </>
    );
}


