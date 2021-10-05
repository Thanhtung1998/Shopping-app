import React from "react"
import styled from "styled-components";
import tw from "twin.macro"

import { Marginer } from "../../components/marginer";
import { PolicyCards } from "./policyCards";
import { TopProducts } from "./topProducts";
import { TopSection } from "./topSection";
import { ListProduct } from "./ListProduct";
import { Banner } from "../../components/Banner";

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../../app/store";

// const ListProduct = React.lazy(() => import("./ListProduct") )


interface IActiveModal {
    setActiveModalOpen?: any;
    activeModalOpen?: boolean;
    // className?: string;
}


export default function HomePage(props: IActiveModal) {

    const { setActiveModalOpen, activeModalOpen } = props;

    const userData = useSelector((state: RootState) => {
        // console.log(state.user);
    });

    // console.log(userData);

    return (

        <>
            <title>Home</title>
            {/* min-time-interval === 60000 */}
            <TopSection timeInterval={60000} auto={false} />
            <Marginer direction="vertical" margin="0em" />
            <PolicyCards />
            <Marginer direction="vertical" margin="2em" />
            <Banner />
            <Marginer direction="vertical" margin="2em" />
            <TopProducts setActiveModalOpen={setActiveModalOpen} />
            <Marginer direction="vertical" margin="2em" />
            <ListProduct setActiveModalOpen={setActiveModalOpen} />
            <Marginer direction="vertical" margin="2em" />
        </>

    );
}
