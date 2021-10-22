import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from "styled-components"
import Icon from "./DataIcon/DataIcon"
import IconImg from "./IconImg"

export interface RegularlyIconProps {
}

const RegularlyIconMain = styled.div`

`

const H3Header = styled.h3`
font-family: inherit;
color: #1c1e21;
font-size: 13px;
font-weight: 600;
margin: 0;
padding: 0;
line-height: 17px;
&._3vgh {
    color: #8d949e;
    cursor: default;
    font-weight: normal;
    margin: 0 8px 4px;
    -webkit-user-select: none;
}
`
const BoxIcon = styled.div`
    font-family: inherit;

    & > div.clearfix{
        zoom: 1;
        :after {
            clear: both;
            content: '.';
            display: block;
            font-size: 0;
            height: 0;
            line-height: 0;
            visibility: hidden;
        }
    }

`

export default function RegularlyIcon(props: RegularlyIconProps) {

    // console.log(Icon);
    const initialIconData: any[] = [];
    const [keyIcon, setKeyIcon] = useState("RegularlyIcon")
    const [IconData, setIconData] = useState(initialIconData)
    // const lazyLoading = true;

    const fetchIcon = () => {
        if (Icon) {
            const Code = Icon.map(icon => icon.code)
            // console.log(Code);
            for (var i = 0; i < Code.length; ++i) {
                if (keyIcon === Code[i]) {
                    const icon = Icon[i].data
                    // console.log(icon)
                    setIconData(icon)
                }
            }
        }
    }

    useEffect(() => {
        fetchIcon();
    }, [])


    return (
        <RegularlyIconMain className={`main__div--feel--icon`} id="Recent">
            <H3Header className="_3vgh" tabIndex={-1}>Đã dùng gần đây</H3Header>
            <BoxIcon className="_3vgi" style={{ minHeight: "40px" }}>
                <div className="clearfix">
                    {IconData && IconData.map(data => (
                        <IconImg key={data.id} alt={data.alt} src={data.src} lazy_key={true} />
                    ))}
                </div>
            </BoxIcon>
        </RegularlyIconMain>
    );
}
