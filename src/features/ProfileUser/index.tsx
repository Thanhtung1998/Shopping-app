import { CurrencyDollarIcon, PencilAltIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import * as React from 'react';
import { useEffect, useState } from 'react';
import { RootStateOrAny, useSelector } from "react-redux";
import styled from "styled-components";
import tw from "twin.macro";
import defaultImgUser from "../../assets/backgroundpicture/bglogin.jpeg";
import { SelectDropDown } from '../../components/DropDownData';
import { SCREEN } from "../../components/responsive";
import { ChartHistoryBuy } from './ChartHistoryBuy';
import { ChartLineBuyMonth } from './ChartLineBuyMonth';
import { HistoryBuy } from './HistoryBuy';
import { ModalEditProfile } from './ModalEditProfile';
import { ModalViewHistoryBuy } from './viewModalHistoryBuy';
import DataUserBuy from '../../api/dataUserBuy'
import DataHistoryBuy from "../../api/dataHistoryBuy";

export interface ProfileUserProps {
}

const SectionProfileUser = styled.section`
min-height: 100vh;
${tw`
    flex
    flex-col
    w-full
    items-center
    relative
    mb-20
`}

color: var(--secondary-text);

`
const MainContent = styled.div`
    margin-top: 30px;
    ${tw`
        w-full
        h-full
        max-w-screen-2xl
        flex
        flex-wrap
        justify-center
        pl-3
        pr-3
    `}
`

const MarginTop = styled.div`
   
    ${tw`
        mt-10
        // md:mt-16
        sm:mt-20
    `}

    @media (min-width: 770px){
        margin-top: 5rem;
    }

`

const GridSystemLayout = styled.div`
    ${tw`
    w-full
    grid
    grid-cols-3
    xl:grid-cols-4
    gap-y-2
    md:gap-1
    lg:gap-3
    xl:gap-5
    `}
`

const LeftContent = styled.div`
    ${tw`
    w-full
    col-span-3
    md:col-span-1
    xl:col-span-1
    // lg:col-span-1
    flex
    // items-center
    justify-center
    `}

    

`

const RightContent = styled.div`
    ${tw`
    w-full
    col-span-3
    md:col-span-2
    xl:col-span-3
    // lg:col-span-2
    `}
`

const MainUserInfo = styled.div`
    ${tw`
    w-full
    rounded-md
    `}
    background-color: var(--surface-background);
    @media (min-width: 768px) and (max-width: ${SCREEN.md}){
        min-height: 23rem;
        max-height: 26.5rem;
    }
    @media (min-width: 769px ) and (max-width: 1023px){
        min-height: 23rem;
        max-height: 26.5rem;
    }
    @media (min-width: 1024px ) and (max-width: 1920px){
        min-height: 30rem;
        max-height: 31.5rem;
    }

`

const UserProfilePicture = styled.div`
    ${tw`
    w-full
    `}
`

const BoxProfileImg = styled.div`
    height: 15rem;
    // width: 90%;
    margin: auto;
    // background-color: var(--placeholder-icon);
    ${tw`
    p-5
    md:p-1
    lg:p-3
    xl:p-5
    rounded-md
    `}

    @media (min-width: ${SCREEN.sm}) and (max-width: 767px) {
        width: 55%;
        margin: auto;
        height: 18rem;
    }

    @media (min-width: ${SCREEN.md}){
        height: 12rem;
    }

    @media (min-width: ${SCREEN.lg}){
        height: 15rem;
    }

    @media (min-width: ${SCREEN.xl}){
        height: 17rem;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
        ${tw`
        rounded-md
        `}
    }

`

const UserInformation = styled.div`
${tw`
    px-3
    pt-0
    pb-1
    md:pt-0
    md:pb-1
    md:px-1
    lg:pt-0
    lg:pb-3
    lg:px-3
    xl:pt-0
    xl:pb-5
    xl:px-5
`}
`

const BoxEditProfileBtn = styled.div`
    ${tw`
    mt-3
    w-full
    flex
    items-center
    justify-center
    z-0
    `}

    .btn{
        min-width: 140px;
        display: flex;
        justify-content: center;
        algin-items: center;
        position: relative;
        ${tw`
        space-x-1
        flex 
        items-center 
        p-3
        rounded-lg
        `}
        border: 2px solid #ff7675;
        overflow: hidden;
        transition: 1s all ease;
         
        span{
            ${tw`
            text-base
            font-semibold
            `}
            // z-index: 1;
        }

        @media ()

    }

    .btn::before{
        background-color: #ff7675;
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        transition: all 0.6s ease;
        width: 100%;
        height: 0%;
        transform: translate(-50%,-50%) rotate(45deg);
        z-index: -1;
    }
    
    .btn:hover::before{
        height: 380%;
    }
`

const BoxInformation = styled.div`
    ${tw`
    flex
    flex-col
    p-3
    xl:p-0
    `}
`

const TagDescUser = styled.div`
    color: var(--secondary-text);

    p{
        text-align: center;
        font-size: 18px;
        font-weight: 600;
    }

    @media (min-width: 640px) and (max-width: ${SCREEN.md}){
        p{
            text-align: center;
            font-size: 14px;
            font-weight: 600;
        } 
    }

    @media (min-width: 769px) and (max-width: ${SCREEN.lg}){
        p{
            text-align: center;
            font-size: 15px;
            font-weight: 600;
        } 
    }

`

const TagUserName = styled.div`
    color: var(--secondary-text);
    director: ltr;
    ${tw`
    flex
    items-center
    `}
    span{
        font-family: inherit;
        color: inherit;
        ${tw`
        text-base
        font-bold
        `}
    }

`

const TagUserContact = styled.div`
    color: var(--secondary-text);
    director: ltr;
    ${tw`
        flex
        items-center
    `}
    span{
        font-family: inherit;
        color: inherit;
        ${tw`
        text-base
        font-bold
        `}
    }

`

const TagUserAddress = styled.div`
    color: var(--secondary-text);
    director: ltr;
    ${tw`
        flex
        items-center
    `}
    span{
        font-family: inherit;
        color: inherit;
        ${tw`
        text-base
        font-bold
        `}
    }
`

const HistoryBuyShop = styled.div`
    width: 100%;
    background-color: var(--surface-background);
    ${tw`
        rounded-md
    `}
`

const HistoryBuyContent = styled.div`
    ${tw`
        w-full
        rounded-md
        p-3
        grid
        grid-cols-2
        gap-2
    `}
`
const ChartHistory = styled.div`
    ${tw`
        lg:col-span-1
        col-span-2
    `}
`

const HistoryList = styled.div`
    ${tw`
        lg:col-span-1
        col-span-2
    `}
`

const BoxInformationBuy = styled.div`
    ${tw`
        w-full
        col-span-2
    `}
`

const InformationBuyBg = styled.div`
    ${tw`
        w-full
        grid
        grid-cols-2
        gap-y-2
        gap-2
    `}

`
const InformationBuyLeft = styled.div`
    background-color: var(--comment-background);
    ${tw`
        p-3
        rounded-md
    `}

`

const TotalCostInformation = styled.div`
    ${tw`
        w-full
        flex
        items-center
        justify-center
    `}
`

const InformationBuyRight = styled.div`
    background-color: var(--comment-background);
    ${tw`
        p-3
        rounded-md
    `}
`

const TotalOrderInformation = styled.div`
    ${tw`
        w-full
        flex
        items-center
        justify-center
    `}
`

const ChartLineHistory = styled.div`
    ${tw`
        // flex
        // items-center
        w-full
        col-span-2
    `}
`

const SelectChartType = styled.div`
height: 100%;
width: 30%;

@media (max-width: ${SCREEN.sm}){
    width: 100%;
}

`

export default function ProfileUser(props: ProfileUserProps) {
    const initialUser: any = {};
    const initialArray: any = [];
    const initialString: any = "";
    const [userData, setUserData] = useState(initialUser);
    const [Desc1, setDesc1] = useState("");
    const [Desc2, setDesc2] = useState("");
    const state = useSelector((state: RootStateOrAny) => state);
    const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
    const [chartType, setChartType] = useState("Bar");
    const [listDataHistoryBuy, setListDataHistoryBuy] = useState(initialArray)
    const [isOpenViewHistoryBuy, setIsOpenViewHistoryBuy] = useState(false);
    const [idProduct, setIsProduct] = useState(initialString);

    const chartList = ["Bar", "Line", "Doughnut"]

    // const dataBuyFake = [
    //     {
    //         id: 1,
    //         nameProduct: "Quan 1",
    //         pictureProduct: "https://i.pinimg.com/564x/cf/16/89/cf16897b11230f0aae89f7dc8f43575f.jpg",
    //         priceProduct: 1000000,
    //     },
    //     {
    //         id: 2,
    //         nameProduct: "Quan 1",
    //         pictureProduct: "https://i.pinimg.com/564x/ff/e8/f5/ffe8f529656726adf8987f86e615e4ed.jpg",
    //         priceProduct: 1000000,
    //     },
    //     {
    //         id: 3,
    //         nameProduct: "Quan 2",
    //         pictureProduct: "https://i.pinimg.com/564x/c4/b4/f2/c4b4f216b876d4aebadbe151ba14c743.jpg",
    //         priceProduct: 1000000,
    //     },
    //     {
    //         id: 4,
    //         nameProduct: "Quan 2",
    //         pictureProduct: "https://i.pinimg.com/564x/30/86/a3/3086a3b3a67ecae149b3791e71210c16.jpg",
    //         priceProduct: 1000000,
    //     },
    //     {
    //         id: 5,
    //         nameProduct: "Quan 2",
    //         pictureProduct: "https://i.pinimg.com/564x/65/0e/f8/650ef8e52c28aa44eaf1ddc0cc088085.jpg",
    //         priceProduct: 1000000,
    //     },
    //     {
    //         id: 6,
    //         nameProduct: "Quan 2",
    //         pictureProduct: "https://i.pinimg.com/564x/3e/1b/13/3e1b136753abe0fbdce4fbdcc390a224.jpg",
    //         priceProduct: 1000000,
    //     },
    // ]

    useEffect(() => {
        // const fetchDataUserBuy = async () => {
        //     const response = await DataUserBuy.getAllUserBuy();
        //     console.log(response.data);
        // }
        // console.log(userData)
        if (userData._id) {
            const fetchSingeData = async () => {
                const response: any = await DataUserBuy.getBuyId(userData._id);
                if (response.data) {
                    const resHistoryBuy: any = await DataHistoryBuy.getAllDataBuy(response.data.id);
                    // console.log(resHistoryBuy)
                    setListDataHistoryBuy(resHistoryBuy.data)
                }
            }
            fetchSingeData()
        }
        // fetchDataUserBuy()
    }, [userData._id])

    const handleClose = () => {
        setIsOpenModalEdit(false);
    }

    useEffect(() => {
        if (state.user.user) {
            setUserData(state.user.user.user)
        }
    }, [state.user.user])

    // console.log(state.user.user)

    useEffect(() => {
        if (userData) {
            const Text = userData.desc
            if (Text?.length > 40) {
                const ArrayText = Text.split(" ");
                const lengthArrayText = ArrayText.length
                if (lengthArrayText >= 10) {
                    const Desc1 = ArrayText.slice(0, lengthArrayText - 3)
                    const Desc2 = ArrayText.slice(lengthArrayText - 3, lengthArrayText)
                    setDesc1(Desc1.join(" "))
                    setDesc2(Desc2.join(" "))
                    // console.log(Desc1, Desc2);
                } else {
                    const Desc1 = ArrayText.slice(0, lengthArrayText - 1)
                    const Desc2 = ArrayText.slice(lengthArrayText - 1, lengthArrayText)
                    setDesc1(Desc1.join(" "))
                    setDesc2(Desc2.join(" "))
                }
                // console.log()
            } if (Text?.length < 40) {
                setDesc1(Text);
            }
        }
    }, [userData])

    // console.log(userData)

    const handleOpenView = (open: any, id: any) => {
        setIsOpenViewHistoryBuy(open)
        setIsProduct(id)
    }

    const handleCloseHistory = () => {
        setIsOpenViewHistoryBuy(false)
    }

    return (
        <SectionProfileUser>
            <MarginTop></MarginTop>
            <MainContent>
                <GridSystemLayout>
                    <LeftContent>
                        <MainUserInfo>
                            <UserProfilePicture>
                                <BoxProfileImg>
                                    <img srcSet={`${defaultImgUser} 2x`} alt="ProfilePicture" aria-label='User Profile Picture' />
                                </BoxProfileImg>
                            </UserProfilePicture>
                            <UserInformation>
                                <BoxInformation>
                                    <TagDescUser>
                                        {userData.desc && Desc1 !== "" && (
                                            <p>{Desc1}</p>
                                        )}
                                        {userData.desc && Desc2 !== "" && (
                                            <p>{Desc2}</p>
                                        )}
                                    </TagDescUser>
                                    <TagUserName aria-label="User Name">
                                        <span>UserName: &nbsp;</span>
                                        <p>{userData.displayName}</p>
                                    </TagUserName>
                                    <TagUserContact aria-label="Phone Number">
                                        <span>NumberPhone: &nbsp;</span>
                                        <p>{userData.phoneNumber}</p>
                                    </TagUserContact>
                                    <TagUserAddress aria-label="Address City">
                                        <span>City: &nbsp;</span>
                                        <p>{userData.city}</p>
                                    </TagUserAddress>
                                    <TagUserAddress aria-label="Address Live">
                                        <span>From: &nbsp;</span>
                                        <p>{userData.from}</p>
                                    </TagUserAddress>
                                    <BoxEditProfileBtn >
                                        <button onClick={() => setIsOpenModalEdit(true)} className="btn">
                                            <span>Edit Profile</span><PencilAltIcon className="h-6 icon" />
                                        </button>
                                    </BoxEditProfileBtn>
                                </BoxInformation>
                                {/* <TagUserContact>
                                    
                                </TagUserContact> */}
                            </UserInformation>
                        </MainUserInfo>
                    </LeftContent>
                    <RightContent>
                        <HistoryBuyShop>
                            <HistoryBuyContent>
                                <BoxInformationBuy>
                                    <InformationBuyBg>
                                        <InformationBuyLeft>
                                            <TotalCostInformation>
                                                <CurrencyDollarIcon className="h-8" />
                                                <span className="italic font-bold text-xl">Total Money</span>
                                            </TotalCostInformation>
                                        </InformationBuyLeft>
                                        <InformationBuyRight>
                                            <TotalOrderInformation>
                                                <ShoppingCartIcon className="h-8" />
                                                <span className="italic font-bold text-xl">Total Order</span>
                                            </TotalOrderInformation>
                                        </InformationBuyRight>
                                    </InformationBuyBg>
                                </BoxInformationBuy>
                                <ChartHistory>
                                    <ChartHistoryBuy />
                                </ChartHistory>
                                <HistoryList>
                                    <HistoryBuy data={listDataHistoryBuy} handleOpenView={handleOpenView} />
                                </HistoryList>
                                <ChartLineHistory>
                                    <div className="w-full flex justify-end mb-4">
                                        <SelectChartType>
                                            <span className="font-bold">Select Chart Type</span>
                                            <SelectDropDown
                                                text={chartType}
                                                dataRequired={"true"}
                                                defaultText={"Bar"}
                                                setValue={setChartType}
                                                dataArray={chartList}
                                            />

                                        </SelectChartType>
                                    </div>
                                    <ChartLineBuyMonth typeChart={chartType}></ChartLineBuyMonth>
                                </ChartLineHistory>
                            </HistoryBuyContent>
                        </HistoryBuyShop>
                    </RightContent>
                </GridSystemLayout>
            </MainContent>
            {isOpenModalEdit && (
                <ModalEditProfile onClose={handleClose} />
            )}
            {isOpenViewHistoryBuy && (
                <ModalViewHistoryBuy id={idProduct} onClose={handleCloseHistory} />
            )
            }

        </SectionProfileUser>
    );
}
