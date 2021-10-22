import React from "react"
import styled from "styled-components";
import tw from "twin.macro"
import LogoImg from "../../assets/logo/logo.png"

const LogoContainer = styled.div`
${tw`
    flex
    items-center
    md:ml-2 
    ml-4
`};
`;

const LogoText = styled.div`
${tw`
        text-xl
        md: text-2xl
        font-bold
        text-black
        m-1
    `
    };
${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
    ` as any;

const Image = styled.div`
width: auto;

img{
    width: auto;
    height: 100%;
}
${tw`
   h-12
   md:h-12
`}
`;

export function Logo() {
    return (
        <LogoContainer>
            <Image>
                <img src={LogoImg} alt="" />
            </Image>
            <LogoText>THTS</LogoText>
        </LogoContainer>
    );
}