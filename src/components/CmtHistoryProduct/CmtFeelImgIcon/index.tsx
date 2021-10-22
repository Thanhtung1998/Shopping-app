import * as React from 'react';
import RegularlyIcon from './RegularlyIcon'
import CommonIconImg from './CommonIconImg'
import { useEffect, useState } from 'react';
import styled from "styled-components"
import Icon from "./DataIcon/DataIcon"
import { setTimeout } from 'timers';
import MoonLoader from "react-spinners/MoonLoader";


// const CommonIconImg = React.lazy(() => import("./CommonIconImg"))
// const RegularlyIcon = React.lazy(() => import("./RegularlyIcon"))

export interface FeelIconCmtProps {
    setIsCallData: any;
}

const LoadingContainer = styled.div`
    width: 100%;
    height: 283px;
    display: flex;
    justify-content: center;
    align-items: center;

`

export default function FeelIconCmt(props: FeelIconCmtProps) {

    const { setIsCallData } = props;

    const initialIconData: any[] = [];
    const [keyHumanIcon, setKeyHumanIcon] = useState("Smileys & People");
    const [keyAnimalIcon, setKeyAnimalIconIcon] = useState("Animals & Nature");
    const [keyFoodIcon, setKeyFoodIcon] = useState("Food & Drink");
    const [humanIconData, setHumanIconData] = useState(initialIconData);
    const [animalIconData, setAnimalIconData] = useState(initialIconData);
    const [foodIconData, setFoodIconData] = useState(initialIconData);
    const [keyPlaying, setKeyPlaying] = useState("Activities");
    const [playingIconData, setPlayingIconData] = useState(initialIconData);
    const [keyTravel, setKeyTravel] = useState("Travel & Places");
    const [travelIconData, setTravelIconData] = useState(initialIconData);
    const [keyItems, setKeyItems] = useState("Objects");
    const [itemsIconData, setItemsIconData] = useState(initialIconData);
    const [keyIconMore, setKeyIconMore] = useState("Symbols");
    const [iconMoreIconData, setIconMoreIconData] = useState(initialIconData);
    const [keyFlags, setKeyFlags] = useState("Flags");
    const [flagsIconData, setFlagsIconData] = useState(initialIconData);
    const [loading, setLoading] = useState(true);

    const fetchIcon = () => {
        if (Icon) {
            const Code = Icon.map(icon => icon.code)
            // console.log(Code);
            for (var i = 0; i < Code.length; ++i) {
                if (keyHumanIcon === Code[i]) {
                    const icon = Icon[i].data
                    // console.log(icon)
                    setHumanIconData(icon)
                }
                if (keyAnimalIcon === Code[i]) {
                    const icon = Icon[i].data
                    // console.log(icon)
                    setAnimalIconData(icon)
                }
                if (keyFoodIcon === Code[i]) {
                    const icon = Icon[i].data
                    // console.log(icon)
                    setFoodIconData(icon)
                }
                if (keyPlaying === Code[i]) {
                    const icon = Icon[i].data
                    // console.log(icon)
                    setPlayingIconData(icon)
                }
                if (keyTravel === Code[i]) {
                    const icon = Icon[i].data
                    // console.log(icon)
                    setTravelIconData(icon)
                }
                if (keyItems === Code[i]) {
                    const icon = Icon[i].data
                    // console.log(icon)
                    setItemsIconData(icon)
                }
                if (keyIconMore === Code[i]) {
                    const icon = Icon[i].data
                    // console.log(icon)
                    setIconMoreIconData(icon)
                }
                if (keyFlags === Code[i]) {
                    const icon = Icon[i].data
                    // console.log(icon)
                    setFlagsIconData(icon)
                }
            }
        }
    }

    useEffect(() => {

        const URL = "https://static.xx.fbcdn.net/images/emoji.php/v9/tee/1/28/1f302.png";

        const fetchDataIcon = async () => {
            const responseData = await fetch(URL).then(function (response) {
                if (response.status === 200) {
                    // console.log("fetch success");   
                    fetchIcon();
                    setLoading(false);
                    setIsCallData(true);
                }

            }).catch((error) => {
                setTimeout(() => {
                    fetchIcon();
                    setLoading(false);
                    setIsCallData(true);
                }, 1000)
            });

        }

        fetchDataIcon();

        return () => {
            clearTimeout();
        }
    }, [])



    return (
        <>
            {loading ? (
                <LoadingContainer>
                    <MoonLoader size={25} />
                </LoadingContainer>
            )
                :
                (
                    <>
                        <RegularlyIcon />
                        <CommonIconImg textHeader={"Smileys & People"} IconData={humanIconData} lazyLoading={false} />
                        <CommonIconImg textHeader={"Animals & Nature"} IconData={animalIconData} lazyLoading={true} />
                        <CommonIconImg textHeader={"Food & Drink"} IconData={foodIconData} lazyLoading={true} />
                        <CommonIconImg textHeader={"Activities"} IconData={playingIconData} lazyLoading={true} />
                        <CommonIconImg textHeader={"Travel & Places"} IconData={travelIconData} lazyLoading={true} />
                        <CommonIconImg textHeader={"Objects"} IconData={itemsIconData} lazyLoading={true} />
                        <CommonIconImg textHeader={"Symbols"} IconData={iconMoreIconData} lazyLoading={true} />
                        <CommonIconImg textHeader={"Flags"} IconData={flagsIconData} lazyLoading={true} />
                    </>
                )
            }

        </>
    );
}
