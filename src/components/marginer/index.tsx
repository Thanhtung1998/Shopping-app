import React from "react";
import styled from "styled-components";

export interface IMarginerProps {
    margin: number | string;
    direction?: "horizontal" | "vertical";
    // horizontal - chiều nang
    // vertical - chiều dọc
}

// HorizontalMargin chiều nang margin
const HorizontalMargin = styled.span<IMarginerProps>`
  display: flex;
  min-width: ${({ margin }) =>
        typeof margin === "string" ? margin : `${margin}px`}; //kiểm tra margin kiểu dữ liệu là gì
`;

const VerticalMargin = styled.span<IMarginerProps>`
  display: flex;
  min-height: ${({ margin }) =>
        typeof margin === "string" ? margin : `${margin}px`};
`;

function Marginer(props: IMarginerProps) {
    const { direction } = props;

    if (direction === "horizontal") return <HorizontalMargin {...props} />;
    else {
        return <VerticalMargin {...props} />;
    }
}

Marginer.defaultProps = {
    direction: "horizontal",
}; //mặc đinh horizontal

export { Marginer };