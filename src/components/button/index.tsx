import React from 'react'
import styled from 'styled-components';
import tw from "twin.macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "../../css/button.css"

interface IButtonProps {
    theme?: 'filled' | 'outlined';
    text: string;
    className?: string;
    icons?: string | boolean;
    style?: { color: string };
    onClick?: () => void;
}

const BaseButton = styled.button`
${tw`
    pl-5
    pr-5
    pt-3
    pb-3
    outline-none
    rounded-md
    text-white
    text-xs
    md:font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
    relative
`};
`;

const OutlinedButton = styled(BaseButton)`
    ${tw`
        bg-red-500
        border-none
        hover:border-transparent
        overflow-hidden
    `}
    
`

const FilledButton = styled(BaseButton)`
    ${tw`
        border-red-500
        text-red-500
        bg-transparent
        hover:text-white
        hover:bg-red-500
        hover:border-transparent
    `}
`
const SmallText = styled.span`
    color: white;
    transform: translateX(-100%);
    ${tw`
        flex
        items-center
        justify-center
        absolute
        top-0
        left-0
        h-full
        w-full
    `};
`;

const TextSpan = styled.span`
    text-transform: uppercase;
    ${tw`
    flex
    items-center
    justify-center
    absolute
    top-0
    left-0
    h-full
    w-full
    `}
`


// transform: translateX(200%);


export function Button(props: IButtonProps) {

    const { theme, text, className, icons, style, onClick } = props;

    // const [click, setClick] = useState(false);

    if (theme === "filled") {
        return (
            <FilledButton className={className} >{icons ? (<SmallText><FontAwesomeIcon icon={faShoppingCart} /></SmallText>) : null}{text}</FilledButton>
        );
    } else {
        return (<OutlinedButton onClick={onClick} style={{ background: `${style?.color}` }} className={className} id="button" >{icons ? (<SmallText className="icon-span"><FontAwesomeIcon className="bx-tada" icon={faShoppingCart} /></SmallText>) : null}<TextSpan className="text-span">{text}</TextSpan></OutlinedButton>);
    }

}