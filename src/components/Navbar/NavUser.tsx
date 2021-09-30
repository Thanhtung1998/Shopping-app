import { useState } from 'react'
// import { AuthContext } from '../../context/Authcontext/AuthContext';
// import { logout } from "../../context/Authcontext/AuthActions";
import styled from 'styled-components';
import tw from "twin.macro"
import {
    Link
} from "react-router-dom";
import { authActions } from '../../redux/Slice/authUser/userSlice'
import { useAppDispatch } from '../../app/hooks'
import { RootStateOrAny, useSelector } from "react-redux";


const NavUserContainer = styled.div`
    z-index: 3;
    height: 40px;
    width: 40px;
    ${tw`
    // relative
    `}

    img{
        ${tw`
        object-cover
        rounded-full
        overflow-hidden
        cursor-pointer
        `}
    }

`

const BoxUserDropDown = styled.div`
    // height: 100px;
    width: 200px;
    z-index: 2;
    ${tw`
    // bg-white
    shadow-md
    absolute
    top-12
    `}
`

const BoxUl = styled.ul`
    ${tw`
    list-none
    // bg-white
    `}
`

const BoxLoginAfter = styled.div`

:hover img{
    display: none;
}

:hover span{
${tw`
    w-full
    h-full
`}
}

img{
    display: block;
}

span{
    ${tw`items-center flex text-base font-semibold text-gray-400 hover:text-blue-300`}
}

`


export function NavUser() {

    // const { state } = useContext(AuthContext);
    // const { dispatch } = useContext(AuthContext);

    const dispatch = useAppDispatch();

    const [activeUser, setActive] = useState(false)

    // const isFetchingIn = (localStorage.getItem('user-token'));

    const state = useSelector((state: RootStateOrAny) => state);


    return (


        <NavUserContainer >
            {state.user.user ?
                <div className="relative h-full w-full" >
                    <img className="h-full w-full" onClick={() => setActive(!activeUser)} src="https://gamek.mediacdn.vn/133514250583805952/2021/5/6/photo-1-16202854061651675408487.jpg" alt="" />
                    {activeUser &&
                        (<BoxUserDropDown>
                            <BoxUl>
                                <li className="cursor-pointer h-10 flex items-center text-lg font-medium justify-center hover:bg-blue-300 ">Information User</li>
                                <li onClick={() => {
                                    dispatch(authActions.logout());
                                }} /*onClick={() => dispatch(logout())}*/ className="cursor-pointer h-10 flex items-center text-lg font-medium justify-center hover:bg-blue-300 ">Log out</li>
                                {/* <li></li> */}
                            </BoxUl>
                        </BoxUserDropDown>
                        )
                    }

                </div>

                :
                <BoxLoginAfter className="w-full h-full overflow-hidden">
                    <Link to="/login" className="w-full h-full ">
                        <img className="h-1/2 w-1/2 m-auto" src="https://w1.pngwing.com/pngs/386/684/png-transparent-face-icon-user-icon-design-user-profile-share-icon-avatar-black-and-white-silhouette.png" alt="" />
                        <span className="">Login</span>
                    </Link>
                </BoxLoginAfter>

            }

        </NavUserContainer>

    )


}