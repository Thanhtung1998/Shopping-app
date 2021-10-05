import React, { useState, useEffect } from 'react';
import { IProduct } from '../../typings/product'
import styled from 'styled-components'
import tw from 'twin.macro'
import { SelectCityDropDown } from '../../components/DropDownLocation/selectCity'
import { DropDownLocation } from '../../components/DropDownLocation'
import { SCREEN } from '../../components/responsive'
import { ProductPrice } from '../../components/product/priceProduct'
import { SelectSizeProduct } from '../../components/selectSizeProduct'
import { RatingStar } from './ratingStar'

interface InfoProduct extends IProduct {
    _id: string;
}



const NameProduct = styled.div`
    
    ${tw`
        mt-5
    `}

    span{
        ${tw`
            text-lg
            text-gray-500
            font-semibold
        `}
    }

`

const SpanProduct = styled.div`
    ${tw`
    mt-2
    flex
    items-center
   
    `}

    span{
    ${tw`
        text-lg
        text-gray-500
        font-semibold
        relative
    `}
    }
    span:nth-child(3)::after{
        ${tw`
        absolute
        block
        `}
        content: "";
        border : 1px solid  rgba(107,114,128,0.7);;
        height: 18px;
        left: -4px;
        top: 50%;
        transform: translateY(-50%);
    }
`

const ColorPro = styled.div`
    ${tw`
    mt-2
    flex
    w-3/6
    flex-wrap
    `}

    span{
        ${tw`
            w-full
            md:w-auto
            text-lg
            text-gray-500
            font-semibold
        `}
        }
`

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
    width: 100%;
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
        // text-gray-500
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

const DescProduct = styled.div`
    ${tw`
    mt-2
    `}
    height: 100px;
    font-size: 20px;
    line-height: 25px;
  
    white-space: pre-wrap;

    span{
       
        ${tw`
            text-gray-500
            font-semibold
        `}
        display: block;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
    }

    @media (max-width: ${SCREEN.sm}){
        span:nth-child(1){
            display: none;
        }
    }
   

    ${tw`
        flex
        w-full
        text-justify
        overflow-hidden
    `}
`


export function InfoProduct(props: InfoProduct) {

    const { ColorProduct, NewPrice, RateProduct } = props

    // console.log(RateProduct)

    const [city, setCityS] = useState("");
    const [district, setDistrictS] = useState("");
    const [ward, setWardS] = useState("");

    const [numberQuantity, setNumberQuantity] = useState(1);
    const [Quantity, setQuantity] = useState(0);
    const [totalCost, setTotalCost] = useState(NewPrice);
    const [Size, setSize] = useState("");
    const [ratingData, setRatingData] = useState(0)
    const [totalCount, setTotalCount] = useState(0)



    const handleRating = (rate: any) => {

        let totalStar = 0
        let totalCount = 0

        if (rate) {
            rate.forEach((ratingData: any) => {
                const totalAll = ratingData.star * ratingData.count
                totalStar += totalAll
                totalCount += ratingData.count
            })
        }

        const rating = totalStar / totalCount


        return {
            rating: rating.toFixed(1),
            totalCount: totalCount,
        }

    }

    // const ratingObject = 


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
        const ratingData = Number.parseFloat(handleRating(RateProduct).rating)
        setRatingData(ratingData)
        const totalCount = handleRating(RateProduct).totalCount
        setTotalCount(totalCount)
    }, [])

    return (
        <>
            <NameProduct>
                <span>Name Product: </span>
                <span>{props.name}</span>
            </NameProduct>
            <SpanProduct>
                <span>Id Product: </span>
                <span>{props._id}</span>
            </SpanProduct>
            <SpanProduct>
                <span>Brand: </span>
                <span>{props.brand}</span>
            </SpanProduct>

            <SpanProduct className="Sp">
                <span>Vote Star: </span>
                <div className="mx-1 flex items-center">
                    <span className="mr-1">{ratingData}</span>
                    <RatingStar ratingData={ratingData} />
                </div>

                <span className="ml-1">Votes: </span><span>{totalCount}</span>

            </SpanProduct>
            <DescProduct>
                <span>Description:&nbsp;</span>
                <span>{props.descProduct}</span>
            </DescProduct>
            <div className="mt-2 w-full flex items-center justify-between">
                <ColorPro>
                    <span>Color Product: </span>
                    {ColorProduct && ColorProduct?.map(color => (
                        <ProductColor key={Math.random()} style={{ background: color }}></ProductColor>
                    ))}
                </ColorPro>

                <BoxSizeModal>
                    <QuantityModalProduct><h2>Số lượng hiện có:</h2><span>{Quantity}</span></QuantityModalProduct>
                    <SelectSizeProduct
                        size={props.QuantityProductAndSize?.map((size) => size)}
                        Size={Size}
                        setSize={setSize}
                        setQuantity={setQuantity}
                        darkMode={false}
                    />
                </BoxSizeModal>
            </div>

            <div className="mt-2">
                <ProductPrice
                    NewPrice={NewPrice}
                    OldPrice={props.OldPrice}
                    handelDownquantity={handelDownquantity}
                    handelUpquantity={handelUpquantity}
                    numberQuantity={numberQuantity}
                    totalCost={totalCost}
                />
            </div>

            <ModalSelectLocation>
                <ModalBoxSelectLocation >
                    <DropDownLocation
                        darkMode={false}
                        setCityS={setCityS}
                        setDistrictS={setDistrictS}
                        setWardS={setWardS}
                    />
                </ModalBoxSelectLocation>
            </ModalSelectLocation>

        </>
    );
}
