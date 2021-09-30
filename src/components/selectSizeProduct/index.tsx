import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import tw from 'twin.macro'
import { ChevronDownIcon } from "@heroicons/react/solid"


interface ISizeProduct {
    size?: any[];
    Size?: string;
    setSize?: any;
    setQuantity?: any;
}


const SelectSizeDropDownContainer = styled.div`
    ${tw`
    w-full
    relative
    `}

`


const BoxSelect = styled.div`
    width: 100%;
    padding: 10px;
    box-shadow: 0 1.3px 17px -2px rgb(0 0 0 / 40%);
    border-radius: 10px;
    cursor: pointer;

    ${tw`
    flex
    items-center
    justify-between
    `}
`

const BoxText = styled.h2`
    user-select:none;
`

const BoxDropDown = styled.div`

    width: 100%;
    position: absolute;
    height: 100px;
    top: 50px;
    padding: 10px;
    box-shadow: 0 1.3px 17px -2px rgb(0 0 0 / 40%);
    border-radius: 10px;
    background: white;
    z-index: 100;

    ${tw`
        overflow-hidden
        overflow-y-auto
    `}
    
`

const BoxDropDownItem = styled.div`
    
    ${tw`
        flex
        w-full
        hover:bg-blue-100
        text-lg
        font-medium
        overflow-hidden
        cursor-pointer
    `};
    user-select:none;
    height: 1.75rem;
    transition: all 0.2s;
    span{
        display: block;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }
    
    
   
`

export function SelectSizeProduct(props: ISizeProduct) {

    const { size, Size, setSize, setQuantity } = props;

    const [activeSelectSize, setActiveSelectSize] = useState(false)

    const SizePro = size?.map((size) => size.size);


    const SizeQuantity = size?.map((quantity) => quantity.QuantityProduct);

    const handleCheckQuantitySize = () => {

        if (SizeQuantity && SizePro) {
            for (let i = 0; i < SizePro.length; i++) {
                if (Size === SizePro[i]) {
                    setQuantity(SizeQuantity[i])
                }
            }
        }

    }

    useEffect(() => {
        handleCheckQuantitySize()
    }, [Size])

    return (

        <SelectSizeDropDownContainer>
            <BoxSelect onClick={() => setActiveSelectSize(!activeSelectSize)}>
                <BoxText>{Size ? Size : "Select Size"}</BoxText>
                <ChevronDownIcon className="h-6" />
            </BoxSelect>
            {activeSelectSize && (
                <BoxDropDown className="hidden-animation">
                    {SizePro && SizePro.map((size) => (
                        <BoxDropDownItem key={size} onClick={(e) => { setSize(size); setActiveSelectSize(false) }} >
                            <span>{size}</span>
                        </BoxDropDownItem>
                    ))}
                </BoxDropDown>
            )}
        </SelectSizeDropDownContainer>
    );

}