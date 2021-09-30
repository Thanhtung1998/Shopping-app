import React from 'react'
import { Navbar } from '../../components/Navbar'
import styled from 'styled-components'
import tw from 'twin.macro'

const Contrainer = styled.div`
    ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
    overflow-y-hidden
    `}
`

const Content = styled.div`
    height: calc(100% - 58px);
    overflow-y: auto;
    // top: px;
    ${tw`
    flex
    flex-col
    w-full
    items-center
    justify-center
    relative
    overflow-x-hidden
    `}
`

export function NotFound() {
    return (
        <>
            <Contrainer>
                <Navbar />
                <Content >
                    NOT FOUND
                </Content>
            </Contrainer>
        </>
    )
}
