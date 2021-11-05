import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro'
import { PencilAltIcon } from "@heroicons/react/outline"

export interface HistoryBuyProps {
    data: any;
}

const HistoryBuySection = styled.section`
    font-family: inherit;
    ${tw`
    w-full
    `}
`
const BoxHistoryBuy = styled.div`
    font-family: inherit;
    height: 30rem;
    ${tw`
        w-full
        flex
        flex-col
        justify-center
        items-start
        xl:p-3
        p-1
        rounded-md
    `}
    background-color: var(--comment-background);
`

const TagHistoryUl = styled.ul`
    font-family: inherit;
    list-style: none;
    ${tw`
    w-full
    h-full
    p-1
    m-0
    space-y-3
    overflow-y-scroll
    overflow-x-hidden
    `}

    ::-webkit-scrollbar{
        width: 5px;
        // background-color: var(--scroll-shadow);
        // background-color: #aaa;
    }

    ::-webkit-scrollbar-thumb{
        border-radius: 2px;
        background: var(--scroll-thumb);
    }
`

const TagLiHistoryItem = styled.li`
    font-family: inherit;
`

const MainHistoryItem = styled.div`
    ${tw`
    flex
    items-center
    justify-between
    `}
`

const LeftHistoryItem = styled.div`
   ${tw`
   flex
   items-center
   space-x-2
   flex-1
   `}
`

const RightHistoryItem = styled.div`
    ${tw`
        mr-2
    `}
`

const BoxImgProduct = styled.div`
    ${tw`
        xl:h-20
        xl:w-20
        w-16
        h-16
        cursor-pointer
    `}
    img{
        border-radius: 100%;
        box-shadow: 0 0 0 2px white;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
    }

    :hover img{
        box-shadow: 0 0 0 2px red;
    }

`

const ProductInformation = styled.div`

    ${tw`
    flex
    flex-col
    items-center
    justify-center
    cursor-pointer
    `}

    & > span.nameProduct{
        text-transform: capitalize;
        text-decoration: none;
        color: var(--secondary-text);
        ${tw`
        // test-sm
        text-xs
        xl:text-base
        font-semibold
        `}
    }

    :hover > span.nameProduct{
        text-decoration: underline;
    }

    & > div > span.priceProduct{
        color: #ff5b5b;
        ${tw`
        // text-sm
        text-xs
        xl:text-base
        font-semibold
        `}
    }

    & > div > span.currencyUnit{
        font-size: 12px;
        line-height: 16px;
        color: #ff5b5b;
        font-weight: 600;
        text-align: justify;
        text-decoration: underline;
        -webkit-text-decoration-line: underline;
        position: relative;
        top: -5px;
        left: 2px;
    }
`

const TimeHistoryBuy = styled.div`
    ${tw`
    flex
    lg:flex-col
    xl:flex-row
    xl:space-x-2
    md:flex-row
    md:space-x-2
    flex-col
    flex-wrap
    items-center
    justify-center
    `}
    color: var(--secondary-text);
    span{
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }

`

const HeaderHistoryBuy = styled.div`
    ${tw`
    w-full
    flex
    items-center
    justify-center
    `}

    h2{
        font-size: 20px;
        line-height: 24px;
        font-weight: bold;
        color: var(--secondary-text);
    }
`

const LocationShipHistory = styled.div`
    ${tw`
    flex
    flex-wrap
    `}
    color: var(--secondary-text);
    span{
        ${tw`
        text-xs 
        xl:text-base
        `};
        font-weight: 600;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }
`

export function HistoryBuy(props: HistoryBuyProps) {

    const { data } = props;

    return (
        <HistoryBuySection>
            <BoxHistoryBuy>
                <HeaderHistoryBuy>
                    <h2>History Buy</h2>
                </HeaderHistoryBuy>
                <TagHistoryUl>
                    {data && data.map((item: any) => (
                        <TagLiHistoryItem key={Math.random()}>
                            <MainHistoryItem>
                                <LeftHistoryItem>
                                    <BoxImgProduct>
                                        <img srcSet={`${item.pictureProduct} 2x`} alt="" aria-label="Images Product History Buy" tabIndex={0} />
                                    </BoxImgProduct>
                                    <div className="flex items-center justify-around space-x-2">
                                        <ProductInformation>
                                            <span className="nameProduct">
                                                {item.nameProduct}
                                            </span>
                                            <div>
                                                <span className="priceProduct">
                                                    {item.priceProduct}
                                                </span>
                                                <span className="currencyUnit">vnđ</span>
                                            </div>
                                        </ProductInformation>
                                        <TimeHistoryBuy className="cursor-pointer">
                                            {/* convert time */}
                                            <LocationShipHistory>
                                                <span>Phú Diễn - Hà Nội</span>
                                            </LocationShipHistory>
                                            <span className="text-xs xl:text-base font-semibold">11/10/2021</span>
                                        </TimeHistoryBuy>
                                    </div>
                                </LeftHistoryItem>
                                <RightHistoryItem>
                                    <PencilAltIcon className="xl:h-7 h-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
                                </RightHistoryItem>
                            </MainHistoryItem>
                        </TagLiHistoryItem>
                    ))}
                </TagHistoryUl>
            </BoxHistoryBuy>
        </HistoryBuySection>
    );
}
