import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro'
import { SCREEN } from '../../components/responsive'

export interface ModalEditProfileProps {
    onClose: any;
    id: any;
}

const ModalSection = styled.section`
    ${tw`
    w-full
    h-full
    fixed
    flex
    items-center
    justify-center
    // bg-red-500
    `}
`

const ModalLayer = styled.div`
    z-index: 210;
    background: rgba(0,0,0,0.2);
    ${tw`
    absolute
    left-0
    right-0
    top-0
    bottom-0
    h-full
    w-full
    flex
    items-center
    justify-center
    `}
`

const ModalBody = styled.div`
    height: 70%;
    width: 30%;
    background-color: var(--surface-background);
    z-index:210;
    box-shadow: 0 1.3px 17px -2px rgb(0 0 0 / 40%);
    ${tw`
    relative
    // mb-5
    rounded-2xl
    flex
    flex-wrap
    items-center
    top-0
    bottom-0
    right-0
    left-0
    overflow-hidden
    overflow-y-auto
    `}

    @media (max-width: ${SCREEN.xl}){
        width: 100%;
        height: 70%;
    }

    @media (max-width: ${SCREEN.sm}){
        margin-top: 6px;
        width: 100%;
        height: 100%;
    }

`

export function ModalViewHistoryBuy(props: ModalEditProfileProps) {

    const { onClose, id } = props;

    console.log(id);

    return (
        <ModalSection>
            <ModalLayer onClick={onClose}></ModalLayer>
            <ModalBody>

            </ModalBody>
        </ModalSection>
    );
}
