import React from "react"
import styled from "styled-components";
import { IPolicyCard } from "../../typings/policyCard"
import tw from "twin.macro"
// import { SCREEN } from '../responsive'


interface IPolicyCardProps extends IPolicyCard {

}

const PolicyCardContainer = styled.div`
    padding: 20px;
    padding-left: 0;
    box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
    transition: transform ease 0.5s;
    width: 350px;
    height: 100px;
    ${tw`
    flex
    justify-start
    items-center
    rounded-md
    m-2
    sm:m-3
    md:m-3
    cursor-pointer
    `}

    :hover{
        transform: translateY(-5px);
    }


`

const PolicyCardIcon = styled.div`
    width: 40%;
    font-size: 2.7rem;
    ${tw`
    flex
    items-center
    justify-center
    text-blue-400
    `}

`

const PolicyCardInfo = styled.div`
    height: 100%;
    width: calc(100% - 40%);
    ${tw`
        
    `}
`

const PolicyCardName = styled.div`
    font-size: 1rem;
    font-weight: 600;

    ${tw`
        sm:text-lg
    `}
    

`
const PolicyCardDescription = styled.div`
    font-size: 1rem;
    line-height: 1.1rem;
    height: 2.2rem;
    display: block;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    ${tw`
    text-gray-500
    overflow-hidden
    `}
`

export function PolicyCard(props: IPolicyCardProps) {

    const { name, description, icon } = props;

    return (
        <PolicyCardContainer>
            <PolicyCardIcon>
                <i className={`${icon}`}></i>
            </PolicyCardIcon>
            <PolicyCardInfo>
                <PolicyCardName>
                    {name}
                </PolicyCardName>
                <PolicyCardDescription>
                    {description}
                </PolicyCardDescription>
            </PolicyCardInfo>
        </PolicyCardContainer>
    )



}