import * as React from 'react';
import styled from 'styled-components'
import tw from 'twin.macro'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { SCREEN } from '../responsive'

export interface ProductPrice {

    NewPrice?: number;
    OldPrice?: number;
    handelDownquantity: any;
    handelUpquantity: any;
    numberQuantity: number;
    totalCost?: number;

}


const Price = styled.div`
    ${tw`
    flex
    space-x-2
    `}
`

const ProductPriceNew = styled.div`
    ${tw`
        text-red-500
        font-bold
        cursor-pointer
        hover:text-red-600
    `}

`

const ProductPriceOld = styled.div`
    ${tw`
    text-gray-500
    hover:text-gray-600
    font-bold
    line-through
    cursor-pointer
    `}
`

const ProductQuantity = styled.div`
    ${tw`
    flex
    w-full
    items-center
    justify-center
    space-x-3
    my-1
    `}

    @media (max-width: ${SCREEN.sm}){
       ${tw`
       my-4
       
       
       `}
    }
`

const ProductDownQuantity = styled.div`

${tw`
    rounded-md
    bg-yellow-400
    active:bg-yellow-500
`}

`

const ProductUpQuantity = styled.div`

${tw`
    rounded-md
    bg-yellow-400
    active:bg-yellow-500
`}

`

const ProductQuantityNumber = styled.div`

    height: 40px;
    width: 40px;
    box-shadow: 0 1.3px 17px -2px rgb(0 0 0 / 40%);
    
    ${tw`
    flex
    items-center
    justify-center
    rounded-lg
    `}

    span{
        font-size: 18px;
        font-weight: 600;
    }

`

const ProductProductPriceAndQuantity = styled.div`
    // height: 100px;
 
    ${tw`
    my-5
    flex
    flex-wrap
    w-full
    justify-between
    `}
`

const ProductPriceAndQuantityLeft = styled.div`
    ${tw`
    h-full
    flex
    justify-center
    items-center
    flex-col
    `
    }
    @media (max-width: ${SCREEN.sm}){
        ${tw`
        w-full
        `}
     }
`

const ProductPriceandQuantityRight = styled.div`
    ${tw`
    h-full
    flex
    items-center
    justify-center
    space-x-2
    `
    }
    @media (max-width: ${SCREEN.sm}){
        ${tw`
        w-full
        `}
     }
`

const ProductTotalPrice = styled.div`

    height: 50px;
    padding: 10px;
    box-shadow: 0 1.3px 17px -2px rgb(0 0 0 / 40%);
    border-radius: 10px;

    ${tw`
    flex
    items-center
    justify-center
    `}
`

const DiscountPercent = styled.div`

    margin-left: 15px;
    font-size: .75rem;
    color: #fff;
    text-transform: uppercase;
    background: #ee4d2d;
    border-radius: 2px;
    padding: 2px 4px;
    font-weight: 600;
    line-height: 1;
    white-space: nowrap;
    display: flex;
    align-items: center;
    

`

export function ProductPrice(props: ProductPrice) {

    const { NewPrice, OldPrice, handelDownquantity, numberQuantity, handelUpquantity, totalCost } = props

    let Percent;
    if (NewPrice && OldPrice) {
        Percent = Math.round(100 - ((NewPrice / OldPrice) * 100))
    }


    return (
        <>
            <ProductProductPriceAndQuantity>
                <ProductPriceAndQuantityLeft>
                    <Price>
                        <ProductPriceNew>
                            <span>{NewPrice}</span><span>đ</span>
                        </ProductPriceNew>
                        <ProductPriceOld>
                            <span>{OldPrice}</span><span>đ</span>
                        </ProductPriceOld>
                        <DiscountPercent>
                            <span>Giảm: </span> <span>{Percent}%</span>
                        </DiscountPercent>
                    </Price>
                    <ProductQuantity>
                        <ProductDownQuantity onClick={handelDownquantity}>
                            <ChevronLeftIcon className="h-6 cursor-pointer" />
                        </ProductDownQuantity>
                        <ProductQuantityNumber>
                            <span>{numberQuantity}</span>
                        </ProductQuantityNumber>
                        <ProductUpQuantity onClick={handelUpquantity}>
                            <ChevronRightIcon className="h-6 cursor-pointer" />
                        </ProductUpQuantity>
                    </ProductQuantity>
                </ProductPriceAndQuantityLeft>
                <ProductPriceandQuantityRight>
                    <span>TotalCost:</span>
                    <ProductTotalPrice><span>{`${numberQuantity} x ${NewPrice} = ${totalCost}`}</span></ProductTotalPrice>
                </ProductPriceandQuantityRight>
            </ProductProductPriceAndQuantity>
        </>
    );
}
