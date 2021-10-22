import React, { useState, useEffect } from "react"
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
    overflow-hidden
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

interface IStreet {
    city?: string;
    district?: string;
    ward?: string;
    setWard?: any;
}


export function SelectWardDropDown(props: IStreet) {



    const { city, district, ward, setWard } = props;
    const [isActiveSelectCity, setIsActiveSelectCity] = useState(false)
    // const [nameDistrict, setNameDistrict] = useState([""])
    const [nameStreet, setNameStreet] = useState([""])

    // console.log(district);

    useEffect(() => {
        const handleStreet = () => {

            const cityName = Map.map(city => city.name)

            // console.log(cityName)

            // console.log(cityName.length)

            for (var i = 0; i < cityName.length; ++i) {
                // console.log(cityName[i]);
                if (city === cityName[i]) {
                    const District = Map[i].district
                    const nameDistricts = District.map(name => name.name)
                    for (var j = 0; j < nameDistricts.length; j++)
                        if (district === nameDistricts[j]) {
                            const Ward = District[j].ward
                            const nameWard = Ward.map(name => name.name)

                            setNameStreet(nameWard);
                        }
                    // console.log(nameDistricts);
                    // setNameDistrict(nameDistricts)

                }
            }
        }
        handleStreet();
        setWard("");
    }, [city, district, setWard])

    return (
        <SelectCityDropDownContainer >
            <BoxSelect onClick={(e) => setIsActiveSelectCity(!isActiveSelectCity)}>
                <BoxText>{ward ? ward : "Select Ward"}</BoxText>
                <ChevronDownIcon className="h-6" />
            </BoxSelect>
            {isActiveSelectCity && city && district && (
                <BoxDropDown >
                    {nameStreet && nameStreet.map((name) => (
                        <BoxDropDownItem key={name} onClick={(e) => { setWard(name); setIsActiveSelectCity(false) }} >
                            <span>{name}</span>
                        </BoxDropDownItem>
                    ))}
                </BoxDropDown>
            )}
        </SelectCityDropDownContainer>
    )

}