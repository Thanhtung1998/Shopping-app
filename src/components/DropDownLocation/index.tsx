import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import tw from 'twin.macro'
import { SelectCityDropDown } from './selectCity'
import { SelectDistrictDropDown } from "./selectDistrict"
import { SelectWardDropDown } from "./selectStreet"
import { SCREEN } from '../responsive'

const SelectDropDownContainer = styled.div`
    height: 100%;
    width: 100%;
    ${tw`
    // bg-red-400
    flex
    flex-wrap
    items-center
    justify-between
    `}

    

`
const SelectHeader = styled.div`
    width: 100%;
    height: 30px;
    ${tw`
        flex
        items-center
        justify-center
    `}
`

const SelectTitleHeader = styled.h2`

    ${tw`
        text-lg
        font-semibold
        text-gray-700
    `}

`

const SelectTitle = styled.h2`

    

`

const SelectCity = styled.div`
height: 100%;
width: 30%;

@media (max-width: ${SCREEN.sm}){
    width: 100%;
}


`

const SelectDistrict = styled.div`
height: 100%;
width: 30%;

@media (max-width: ${SCREEN.sm}){
    width: 100%;
}

`

const SelectStreet = styled.div`
    height: 100%;
    width: 30%;

    @media (max-width: ${SCREEN.sm}){
        width: 100%;
    }

`

interface ISelectLocation {

    // cityS: string;
    setCityS: any;
    setDistrictS: any;
    setWardS: any;


}


export function DropDownLocation(props: ISelectLocation) {

    // console.log(props);

    const { setCityS, setDistrictS, setWardS, } = props;

    const [city, setCity] = useState("")

    const [district, setDistrict] = useState("")

    const [ward, setWard] = useState("")

    useEffect(() => {
        setCityS(city);
        setDistrictS(district);
        setWardS(ward);
    }, [city, district, ward]);




    return (
        < >
            <SelectDropDownContainer>
                <SelectHeader>
                    <SelectTitleHeader> Select Location Deliver </SelectTitleHeader>
                </SelectHeader>
                <SelectCity>
                    <SelectTitle>
                        Select City
                    </SelectTitle>
                    <SelectCityDropDown city={city} setCity={setCity} />
                </SelectCity>

                <SelectDistrict>
                    <SelectTitle>
                        Select District
                    </SelectTitle>
                    <SelectDistrictDropDown city={city} district={district} setDistrict={setDistrict} />
                </SelectDistrict>

                <SelectStreet>
                    <SelectTitle>
                        Select Ward
                    </SelectTitle>
                    <SelectWardDropDown city={city} district={district} ward={ward} setWard={setWard} />
                </SelectStreet>
            </SelectDropDownContainer>
        </ >
    )

}