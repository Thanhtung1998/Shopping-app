import * as React from 'react';
import styled from "styled-components";
import tw from "twin.macro";

import { Footer } from '../../components/footer';
import { Navbar } from '../../components/Navbar';


const PageContainer = styled.div`
  ${tw`
  flex
  flex-col
  // flex-wrap
  w-full
  h-full
  items-center
  overflow-x-hidden
  overflow-y-hidden
  `}

`

const MainContent = styled.div`
// height: calc(100% - 58px);
height: calc(100% - 58px);
// background: var(--dark);
min-height: 100vh;
overflow: auto;
top: 58px;
${tw`
flex
flex-col
w-full
items-center
relative
overflow-x-hidden
overflow-y-hidden
`}
`

export function PageLayOut(props: any) {
    const { children } = props
    return (
        <div>
            <PageContainer>
                <Navbar />
                <MainContent>
                    {children}
                </MainContent>
                <Footer />
            </PageContainer>
        </div>
    );
}
