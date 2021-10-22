import * as React from 'react';
import styled from "styled-components"
export interface CmtGifProps {
    dataGif: any[];
}
const BoxGifImgItems = styled.div`
    font-family: inherit;
    min-height: 0;
    padding-right: 0;
    box-sizing: border-box;
    padding-bottom: 0;
    border-bottom-right-radius: inherit;
    display: inline-flex;
    flex-shrink: 0;
    margin-bottom: 0;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    border-top-left-radius: inherit;
    flex-basis: auto;
    position: relative;
    margin-top: 0;
    border-bottom-left-radius: inherit;
    padding-top: 0;
    text-align: inherit;
    min-width: 0;
    margin-left: 0;
    align-items: stretch;
    background-color: transparent;
    touch-action: manipulation;
    z-index: 0;
    margin-right: 0;
    flex-direction: row;
    border-top-right-radius: inherit;
    -webkit-user-select: none;
    padding-left: 0;
    border-right-color: var(--always-dark-overlay);
    border-left-width: 0;
    border-bottom-style: solid;
    border-top-width: 0;
    border-bottom-color: var(--always-dark-overlay);
    border-left-color: var(--always-dark-overlay);
    border-right-width: 0;
    border-top-color: var(--always-dark-overlay);
    border-left-style: solid;
    border-top-style: solid;
    border-right-style: solid;
    border-bottom-width: 0;
    list-style: none;
    outline: none;
    text-decoration: none;
`

export function CmtGif(props: CmtGifProps) {

    const { dataGif } = props;

    return (
        <>
            {dataGif && dataGif.map((data: any) => (
                <BoxGifImgItems key={data.id}
                    role="button" tabIndex={0}><img key={data.id} height={data.height} width={data.width}
                        alt={data.alt}
                        referrerPolicy="origin-when-cross-origin"
                        src={data.src}
                    // same-site="none"
                    />
                    {/* <div>{data.id}</div> */}
                </BoxGifImgItems>
            ))}
        </>
    );
}
