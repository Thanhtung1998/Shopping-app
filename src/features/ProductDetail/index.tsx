import { useEffect } from 'react';
import { useState } from "react";
import { useParams } from 'react-router-dom';
import tw from 'twin.macro';
import styled from 'styled-components';
import axios from 'axios';
import MoonLoader from "react-spinners/MoonLoader";
import productApi from '../../api/productApi';
import { PictureProduct } from './pictureProduct';
import { InfoProduct } from './infoProduct'
import commentApi from '../../api/commentApi';


const MainContent = styled.div`
    min-height: 100vh;
    ${tw`
        flex
        flex-col
        w-full
        items-center
        relative
        mb-20
    `}

`
const Content = styled.div`
    ${tw`
        w-full
        h-full
        max-w-screen-2xl
        flex
        flex-wrap
        justify-center
        pl-3
        pr-3
    `}
`

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


const MarginTop = styled.div`
    margin-top: 5em;
    ${tw`

    `}
`

const HeaderContent = styled.div`
    ${tw`
        w-full
        flex
        justify-start
        items-center
       
    `}

    span:nth-child(1)::after{
        ${tw`
        absolute
        block
        `}
        content: "";
        border : 1px solid  rgba(107,114,128,0.7);;
        height: 14px;
        right: -9px;
        top: 50%;
        transform: translateY(-50%);
    }

    span:nth-child(2)::after{
        ${tw`
        absolute
        block
        `}
        content: "";
        border : 1px solid  rgba(107,114,128,0.7);;
        height: 14px;
        right: -9px;
        top: 50%;
        transform: translateY(-50%);
    }

    span{
        line-height: 24px;
        margin: 0 8px;
        ${tw`
            relative
            text-base
            font-semibold
            text-gray-500
        `}
    }

`

const HeaderTitle = styled.div`
    ${tw`

    `}

    h2 {
        ${tw`
        text-3xl
        lg:text-5xl
        text-gray-600
        font-extrabold

        `};
    }
`
const Information = styled.div`
    ${tw`
        w-full
        h-full
        flex 
        // flex-col 
        md:flex-row
        items-center
        justify-center
        flex-wrap
    `}
`

const LeftContent = styled.div`
    ${tw`
        w-full
        lg:w-1/2
        md:h-full
        mb-5 
        px-2
        md:px-5
    `}

`


const RightContent = styled.div`
    ${tw`
        w-full
        md:h-full 
        lg:w-1/2
        mb-5
        px-2
        md:px-5
        flex-col
    `}
`

const MarginBottom = styled.div`
    ${tw`
    mb-16
    sm:mb-28
    `}
`


export default function ProductDetail(props: any) {

    const typeProduct: any = {};
    const anyType: any = 0
    const [product, setProduct] = useState(typeProduct)
    const [isLoading, setLoading] = useState(false)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const params: any = useParams();
    const id = params.id

    const FetchProduct = async () => {
        try {
            setLoading(true)
            const product = await productApi.getSingleProduct(id);
            setProduct(product);
            setLoading(false);
        }
        catch (error: any) {
            throw new Error(error)
        }

    }

    const FetchComment = async () => {
        try {
            const comment = await commentApi.getAllComment();
            console.log(comment)
            const comment2 = await commentApi.getCommentByProductId(id);
            console.log(comment2)
        } catch (error: any) {
            console.log(error)
            // throw new Error(error)
        }
    }

    useEffect(() => {
        FetchProduct();
        FetchComment();
    }, [])


    return (
        <MainContent>
            <MarginTop></MarginTop>
            <Content>
                <HeaderContent><span> Product </span> <span> {product.name} </span> <span className="hidden md:flex"> {product._id} </span>   </HeaderContent>
                {isLoading && (
                    <LoadingContainer>
                        <MoonLoader size={30} />
                    </LoadingContainer>
                )}
                {!isLoading && (
                    <Information>
                        <LeftContent>
                            <PictureProduct picture={product.ImgUrlProduct} />
                        </LeftContent>
                        <RightContent>
                            <InfoProduct {...product} _id={product._id} />
                        </RightContent>
                    </Information>
                )}
            </Content>
        </MainContent>
    )
}



