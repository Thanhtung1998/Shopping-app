import React, { useState } from "react"
import styled from 'styled-components'
import tw from 'twin.macro'
import { ChevronDownIcon } from "@heroicons/react/solid"
import '../../css/animation.css'
import Map from '../../assets/fake-data/mapVietNam'


const SelectCityDropDownContainer = styled.div`

    color: var(--light);
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
    background-color: var(--comment-background);
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

interface ICity {
    city?: string;
    setCity?: any;
    darkMode?: boolean;
}


export function SelectCityDropDown(props: ICity) {

    const { city, setCity, darkMode } = props
    // const [city, setCity] = useState("")
    const [isActiveSelectCity, setIsActiveSelectCity] = useState(false)

    // console.log(isActiveSelectCity);

    const nameCity = Map.map((city) => { return city.name })

    // console.log(city)




    return (
        <SelectCityDropDownContainer className={!darkMode ? "lightMode" : ""}>
            <BoxSelect onClick={(e) => setIsActiveSelectCity(!isActiveSelectCity)}>
                <BoxText>{city ? city : "Select City"}</BoxText>
                <ChevronDownIcon className="h-6" />
            </BoxSelect>
            {isActiveSelectCity && (
                <BoxDropDown className={!darkMode ? "hidden-animation BgLightMode" : "hidden-animation"}>
                    {nameCity && nameCity.map((city) => (
                        <BoxDropDownItem key={city} onClick={(e) => { setCity(city); setIsActiveSelectCity(false) }} >
                            <span className={!darkMode ? "modeText" : ""}>{city}</span>
                        </BoxDropDownItem>
                    ))}
                </BoxDropDown>
            )}
        </SelectCityDropDownContainer>
    )

}
