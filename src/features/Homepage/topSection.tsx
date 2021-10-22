import { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components';
import tw from "twin.macro";
import { SCREEN } from '../../components/responsive';
import topSectionData from '../../assets/fake-data/hero-slider'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { Button } from '../../components/button'

import "../../index.css"
import "../../css/animation.css"
import { setInterval } from 'timers';


interface TopSectionInputProps {
    timeInterval?: number | undefined;
    auto?: boolean;
}


const TopSectionBody = styled.section`
    ${tw`
        flex
        items-center
        justify-center  
    `}

    width: 100vw;
    height: 100vh;

    @media (max-width: ${SCREEN.sm}){
        margin-top: 0;
    }

    @media (min-width: ${SCREEN['2xl']}){
        margin-top: calc(40px);
    }

    @media (min-width: ${SCREEN.xl}) and (max-width: ${SCREEN['2xl']}){
        margin-top: calc(58px + 58px);
    }

`

const TopSectionContainer = styled.div`
    min-height: calc(100vh - 58px - 58px);
    margin-top: 0em;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        flex-wrap
        justify-between
        pl-3
        pr-3
        lg:pl-12
        lg:pr-12
    `};

`;

const LeftContainer = styled.div`
    white-space: pre-wrap;
${tw`
    w-1/2
    flex
    flex-col
    h-full
`};
@media (min-width: ${SCREEN.xl}){
    justify-content: center;
}
`;


const RightContainer = styled.div`

${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
`};
`;

const Slogan = styled.h1`
    color: var(--secondary-text);
    ${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    
    mb-4
    sm: leading-snug
    lg: leading-normal
    xl: leading-relaxed
    `};
`;

const Description = styled.span`

    // white-space: pre-wrap;
    @media (max-width: 1500px){
        display: block;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }
   
    color: var(--secondary-text);
    ${tw`
        text-xs
        lg: text-sm
        xl: text-lg
        sm: max-h-full
        overflow-hidden
        max-h-20
        // text-gray-800
    `}
`

const BlobContainer = styled.div`
    width: 20em;
    height: 10em;
    position: absolute;
    right: -5em;
    top: -8em;
    z-index: 1;
    img{
        width: 100%;
        height: auto;
        max-height: max-content;
    }

    @media (min-width: ${SCREEN.sm}){
        width: 25em;
        max-height: 10em;
        right: 0em;
        top: -10em;
    }
    @media (min-width: ${SCREEN.lg}){
        width: 30em;
        max-height: 20em;
        right: 1em;
        top: -10em;
    }
    @media (min-width: ${SCREEN.xl}){
        width: 35em;
        max-height: 30em;
        right: 7em;
        top: -16em;
    }
    

    ${tw`
    
    `}
`

const StandaloneImg = styled.div`
    width: auto;
    height: 30em;
    right: -5em;
    top: -8em;
    position: absolute;
    z-index: 2;
    img{
        width: auto;
        height: 100%;
        max-width: fit-content;
    }

    @media (min-width: ${SCREEN.sm}){
        height: 30em;
        right: -1em;
        top: -10em;
    }
    
    @media (min-width: ${SCREEN.lg}){
        height: 35em;
        right: 1em;
        top: -10em;
    }
    
    @media (min-width: ${SCREEN.xl}){
        height: 45em;
        right: 5em;
        top: -16em;
    }
    @media (min-width: ${SCREEN["2xl"]}){
        height: 58em;
        right: 2em;
        top: -12em;
    }

`

const ButtonContainer = styled.div`

${tw`
flex
mt-4
flex-wrap
`}

`

const MiddleContainer = styled.div`
    height: 20px;
    ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-center
    relative
    `}

    @media (max-width: ${SCREEN.sm}) and (max-width: ${SCREEN.md}){
        top: 1.5em;
        z-index: 3;
    }

    @media (min-width: ${SCREEN.md}){
        top: 1.5em;
        z-index: 3;
    }

    @media (min-width: ${SCREEN.xl}) {
        top: 4em;
        z-index: 3;
    }
    
    @media (min-width: ${SCREEN['2xl']}){
        top: 14em;
    }
`
const NextPrevBox = styled.div`
    ${tw`
    flex
    space-x-2
    `}
`
const BoxColorBlob = styled.div`
    height: 200px;
    width: 200px;
    position: absolute;
    right: 60px;
    top: 40px;
    border-radius: 58% 42% 38% 62% / 42% 55% 45% 58%;
    transition: border-radius 13s ease;
    animation: border 10s infinite;
    @keyframes border {
        0% {
            border-radius: 58% 42% 38% 62% / 42% 55% 45% 58%;
        }
        50% {
            border-radius: 31% 69% 59% 41% / 28% 24% 76% 72%;
        }
        100% {
            border-radius: 58% 42% 38% 62% / 42% 55% 45% 58%;
        }
    } 
    @media (min-width: ${SCREEN.md}){
        height: 300px;
        width: 300px;
        right: 10px;
        top: 60px;
    } 
    @media (min-width: ${SCREEN.lg}){
        height: 350px;
        width: 350px;
        right: 10px;
        top: 60px;
    }
    
    @media (min-width: ${SCREEN.xl}){
        height: 400px;
        width: 400px;
    }
    @media (min-width: ${SCREEN["2xl"]}){
        height: 450px;
        width: 450px;
        top: 140px;
        right: 50px;
    }
`


const BookKingButton = styled(Button)`

height: 40px;
${tw`
outline-none
border-none
w-3/4    
`}

@media (min-width: ${SCREEN.md}){
    width: 45%; 
} 
@media (min-width: ${SCREEN.lg}){
    width: 45%; 
}

@media (min-width: ${SCREEN.xl}){
    width: 25%;
}

`


export function TopSection(props: TopSectionInputProps) {


    const timeInterval = props.timeInterval ? props.timeInterval : 60000

    // console.log(timeInterval)

    const [data] = [topSectionData];

    const [activeSlide, setActiveSlide] = useState(0);

    const [active, setActive] = useState(true);

    const nextSlide = useCallback(
        () => {
            const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1
            setActiveSlide(index)
            setTimeout(() => {
                setActive(true)
            }, 500);
            setActive(false)
        },
        [activeSlide, data],
    )

    const prevSlide = () => {
        const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1
        setActiveSlide(index)
        setTimeout(() => {
            setActive(true)
        }, 500);
        setActive(false)
    }

    useEffect(() => {
        if (props.auto) {
            const slideAuto = setInterval(() => {
                nextSlide()
            }, timeInterval);
            return () => {
                clearInterval(slideAuto)
            }
        }

    }, [nextSlide, props, timeInterval])



    return (
        <TopSectionBody>
            <TopSectionContainer>
                <LeftContainer>
                    <Slogan>
                        {data[activeSlide].title}
                    </Slogan>
                    <Description>
                        {data[activeSlide].description}
                    </Description>
                    <ButtonContainer>
                        <BookKingButton style={{ "color": `${data[activeSlide].color}` }} icons={true} text="Book Now" />
                    </ButtonContainer>
                </LeftContainer>

                <RightContainer>
                    <BlobContainer >
                        <BoxColorBlob style={{ background: `${data[activeSlide].color}` }}></BoxColorBlob>
                    </BlobContainer>
                    <StandaloneImg>
                        <img src={data[activeSlide].img} alt="" className={`animation__top__section--img ${active ? "active" : ""}`} />
                    </StandaloneImg>
                </RightContainer>
                <MiddleContainer>
                    {
                        data ? (
                            <NextPrevBox>
                                <div onClick={prevSlide}>
                                    <ChevronLeftIcon height="24px" />
                                </div>
                                <div >
                                    <div>
                                        {activeSlide + 1}/{data.length}
                                    </div>
                                </div>
                                <div onClick={nextSlide}>
                                    <ChevronRightIcon height="24px" />
                                </div>
                            </NextPrevBox>
                        ) : null
                    }
                </MiddleContainer>
            </TopSectionContainer >
        </TopSectionBody>
    )


}