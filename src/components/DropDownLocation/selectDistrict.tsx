import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import tw from 'twin.macro'
import { ChevronDownIcon } from "@heroicons/react/solid"
import '../../css/animation.css'
import Map from '../../assets/fake-data/mapVietNam'

const SelectCityDropDownContainer = styled.div`
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

interface IDistrict {
    city?: string;
    district?: string;
    setDistrict?: any
}


export function SelectDistrictDropDown(props: IDistrict) {



    const { city, district, setDistrict } = props;
    const [isActiveSelectCity, setIsActiveSelectCity] = useState(false)
    const [nameDistrict, setNameDistrict] = useState([""])




    useEffect(() => {

        const handleDistrict = () => {



            const cityName = Map.map(city => city.name)

            // console.log(cityName)

            // console.log(cityName.length)

            for (var i = 0; i < cityName.length; ++i) {
                // console.log(cityName[i]);
                if (city === cityName[i]) {
                    const District = Map[i].district
                    // console.log(District);
                    const nameDistricts = District.map(name => name.name)
                    setNameDistrict(nameDistricts)
                }
            }


        }

        handleDistrict();

        setDistrict("");
        // return () => {
        //     console.log("reset Select")
        // }

    }, [city, setDistrict])


    // console.log(district, city);


    return (
        <SelectCityDropDownContainer>
            <BoxSelect onClick={(e) => setIsActiveSelectCity(!isActiveSelectCity)}>
                <BoxText>{district ? district : "Select District"}</BoxText>
                <ChevronDownIcon className="h-6" />
            </BoxSelect>
            {isActiveSelectCity && city && (
                <BoxDropDown className="hidden-animation">
                    {nameDistrict && nameDistrict.map((name) => (
                        <BoxDropDownItem key={name} onClick={(e) => { setDistrict(name); setIsActiveSelectCity(false) }} >
                            <span>{name}</span>
                        </BoxDropDownItem>
                    ))}
                </BoxDropDown>
            )}
        </SelectCityDropDownContainer>
    )

}