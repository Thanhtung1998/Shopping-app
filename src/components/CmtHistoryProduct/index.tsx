import * as React from 'react';
import { CmtHistory } from './CmtHistory'
import { CommentInputProduct } from './CmtProductInputBox'
import styled from 'styled-components'
import tw from 'twin.macro'

export interface MainCmtProductProps {
    idProduct: string;
    stateComment: any;
}

const CommentSection = styled.section`
    ${tw`
        w-full
    `}
`

const BoxBorder = styled.div`
    ${tw`
        w-full
    `}
`

const BoxBackground = styled.div`
    background-color: var(--surface-background);
    ${tw`
        w-full
        rounded-xl
    `}

`

const Separator = styled.div`
    min-height: 2px;
    min-width: 100%;
    
   
    ${tw`
        flex
        bg-gray-300
        mt-0
        mb-2
        `
    };
`

export function MainCmtProduct(props: MainCmtProductProps) {
    const { idProduct, stateComment } = props

    return (
        <CommentSection>
            <BoxBorder>
                <BoxBackground>
                    <CommentInputProduct idProduct={idProduct} stateComment={stateComment} />
                    <Separator />
                    <CmtHistory idProduct={idProduct} stateComment={stateComment} />
                </BoxBackground>
            </BoxBorder>
        </CommentSection>
    );
}
