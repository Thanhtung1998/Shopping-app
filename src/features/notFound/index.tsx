import React from 'react'
import { Navbar } from '../../components/Navbar'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Footer } from '../../components/footer'

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

const Container = styled.div`
    min-height: 100vh;
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
                    <Container>
                        NOT FOUND
                    </Container>
                </Content>
                <Footer />
            </Contrainer>
        </>
    )
}
