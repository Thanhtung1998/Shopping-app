import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import tw from 'twin.macro'
import { ChevronDownIcon } from "@heroicons/react/solid"
import '../../css/animation.css'


export interface SelectDataProps {
    text?: string;
    defaultText?: string;
    setValue?: any;
    dataArray?: string[];
    dataRequired?: string;
}

const SelectDropDownContainer = styled.div`
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
    background-color: var(--comment-background);
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
    z-index: 100;
    background-color: var(--comment-background);
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
        color: var(--light);
        display: block;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }

    .modeText{
        color: var(--dark);
    }
    
    
    
   
`

export function SelectDropDown(props: SelectDataProps) {

    const { text, defaultText, setValue, dataArray, dataRequired } = props
    // const [city, setCity] = useState("")
    const [isActiveSelectCity, setIsActiveSelectCity] = useState(false)

    // console.log(isActiveSelectCity);

    const values: string[] = [""]

    const [arrayData, setArrayData] = useState(values)

    useEffect(() => {
        const FetchData = () => {
            if (dataArray) {
                setArrayData(dataArray);
            }
        };
        FetchData();
    }, [dataArray])

    return (
        <SelectDropDownContainer>
            <BoxSelect onClick={(e) => setIsActiveSelectCity(!isActiveSelectCity)}>
                <BoxText>{text ? text : defaultText}</BoxText>
                <ChevronDownIcon className="h-6" />
            </BoxSelect>
            {isActiveSelectCity && dataRequired && (
                <BoxDropDown >
                    {arrayData && dataRequired && arrayData.map((data) => (
                        <BoxDropDownItem key={data} onClick={(e) => { setValue(data); setIsActiveSelectCity(false) }} >
                            <span>{data}</span>
                        </BoxDropDownItem>
                    ))}
                </BoxDropDown>
            )}
        </SelectDropDownContainer>
    )

}
