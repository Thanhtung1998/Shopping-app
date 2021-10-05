import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import tw from 'twin.macro'
// import { SelectCityDropDown } from './selectCity'
// import { SelectDistrictDropDown } from "./selectDistrict"
// import { SelectWardDropDown } from "./selectStreet"
import { SCREEN } from '../responsive'
import { SelectDropDown } from "../DropDownData"
import Map from '../../assets/fake-data/mapVietNam'

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
    // background: var(--light);

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
    darkMode: any;

}


export function DropDownLocation(props: ISelectLocation) {

    // console.log(props);

    const { setCityS, setDistrictS, setWardS, darkMode } = props;

    const [city, setCity] = useState("")
    const [district, setDistrict] = useState("")
    const [ward, setWard] = useState("")
    const nameCity = Map.map((city) => { return city.name })
    const [nameDistrict, setNameDistrict] = useState([""])
    const [nameWard, setNameWard] = useState([""])


    useEffect(() => {

        const handleDistrict = () => {

            const cityName = Map.map(city => city.name)

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

    }, [city, setDistrict])


    useEffect(() => {
        const handleStreet = () => {

            const cityName = Map.map(city => city.name)

            for (var i = 0; i < cityName.length; ++i) {
                if (city === cityName[i]) {
                    const District = Map[i].district
                    const nameDistricts = District.map(name => name.name)
                    for (var j = 0; j < nameDistricts.length; j++)
                        if (district === nameDistricts[j]) {
                            const Ward = District[j].ward
                            const nameWard = Ward.map(name => name.name)

                            setNameWard(nameWard);
                        }

                }
            }
        }
        handleStreet();
        setWard("");
    }, [city, district, setWard])

    useEffect(() => {
        setCityS(city);
        setDistrictS(district);
        setWardS(ward);
    }, [setWardS, setDistrictS, setCityS, city, district, ward]);




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
                    <SelectDropDown
                        text={city}
                        dataRequired={"true"}
                        defaultText={"Select City"}
                        setValue={setCity}
                        dataArray={nameCity}
                        darkMode={darkMode}
                    />
                </SelectCity>

                <SelectDistrict>
                    <SelectTitle>
                        Select District
                    </SelectTitle>
                    <SelectDropDown
                        text={district}
                        dataRequired={city}
                        defaultText={"Select District"}
                        setValue={setDistrict}
                        dataArray={nameDistrict}
                        darkMode={darkMode}
                    />
                </SelectDistrict>

                <SelectStreet>
                    <SelectTitle>
                        Select Ward
                    </SelectTitle>
                    <SelectDropDown
                        text={ward}
                        dataRequired={district}
                        defaultText={"Select Ward"}
                        setValue={setWard}
                        dataArray={nameWard}
                        darkMode={darkMode}
                    />
                </SelectStreet>
            </SelectDropDownContainer>
        </ >
    )

}