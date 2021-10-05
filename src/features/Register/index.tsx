import React, { useState, useContext, useRef } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components'
import tw from 'twin.macro'
import { Formik, Form, FastField } from 'formik'
import { InputFieldRegister } from '../../components/customField/InputRegister'
import { FormGroup, Button, Spinner } from 'reactstrap';
import * as Yup from 'yup'
import { AuthContext } from '../../context/Authcontext/AuthContext';
import { Link } from 'react-router-dom'
import "../../css/animation.css"
import CSS from 'csstype';

import BackgroundRegister from '../../assets/backgroundpicture/bgregister3.jpg'


const RegisterContainer = styled.div`
${tw`
    w-full
    h-full
    flex
    flex-wrap
    items-center
    justify-center
    overflow-hidden
    // bg-black 
`}

`
const RegisterBox = styled.div`

${tw`
w-1/2
h-full
flex
flex-wrap
items-center
justify-center
rounded-md
p-4
`}

@media (max-width: 768px){
    z-index:3;
    ${tw`
    w-full
    h-full
    flex
    flex-wrap
    items-center
    justify-center
    `}

}

`

const BoxRegister = styled.div`
${tw`
 w-full
`}

h2{ 
    color: #607d8b;
    font-weight: 600;
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-bottom: 20px;
    border-bottom: 4px solid #ff4584;
    display: inline-block;
    letter-spacing: 1px;
    user-select: none;
}

p{
    color: #607d8b;
    font-size: 16px;
    font-weight: 600;
    user-select: none;
}

p > a{ 
    color: #ff4584;
    text-decoration: underline;
    cursor: pointer;
}

// @media (max-width: 1440px){
//     width: 55%;
// }

// @media (max-width: 1024px){
//     width: 60%;
// }

// @media (max-width: 768px){
//     width:100%;
//     padding 40px;
//     background: rgba(255,255,255,0.8);
//     margin: 10px;
//     border-radius: 4px;
// }
`

const BackgroundImgPage = styled.div`

${tw`
relative
w-1/2
h-full
`}

:before{
    content: '';
    ${tw`
    absolute
    top-0
    right-0
    w-full
    h-full
    `}

    // background: linear-gradient(225deg,#ff0055,#001aff);
    z-index:1;
    // mix-blend-mode: screen;
}
img{
    ${tw`
    absolute
    top-0
    right-0
    w-full
    h-full
    object-cover
    `}
}

@media (max-width: 768px){

    ${tw`
    absolute
    top-0
    left-0
    w-full
    h-full
    `}

}

`


const Square = styled.div`

   
    
    ${tw`
    absolute
    `}
    backdrop-filter:blur(5px);
    box-shadow: 0 25px 45px rgba(0,0,0,0.1);
    border-right: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    background: rgba(255,255,255,0.1);
    border-radius: 10px;
    animation: animate 10s linear infinite;
    animation-delay: calc(-1s * var(--i));

    @keyframes animate{
        0%,100%{
            transform: translateY(-40px);
        }50%{
            transform : translateY(40px);
        }
    }

    :nth-child(1){
        --i: 0;
        top:-50px;
        right: -60px;
        width: 100px;
        height: 100px;
    }

    :nth-child(2){
        --i: 1;
        top:150px;
        left: -100px;
        width: 120px;
        height: 120px;
        z-index:2;
    }

    :nth-child(3){
        --i: 2;
        bottom: 50px;
        right: -60px;
        width: 80px;
        height: 80px;
        z-index:2;
    }

    :nth-child(4){
        --i: 3;
        bottom: -80px;
        left: 100px;
        width: 50px;
        height: 50px;
    }

    :nth-child(5){
        --i: 4;
        top: -80px;
        left: 140px;
        width: 60px;
        height: 60px;
    }
    
`

const RegisterSection = styled.section`
    width: 100vw;
    height: 100vh;
`


toast.configure()
export function Register(props: any) {


    // const loginFailed = () => toast.error("Tài khoản hoặc mật khẩu không đúng", { autoClose: 5000 });
    const loginSuccess = () => toast.success("Đăng nhập thành công");

    const initialValues = {
        Username: '',
        Email: '',
        Password: '',
        ConfirmPassword: '',
    }

    const validationSchema = Yup.object().shape({
        Username: Yup.string().min(2, "Mininum 2 characters").max(24, "Maximum 24 characters").required("This field is required"),
        Email: Yup.string().email("This field just entered is not email").required("This field is required"),
        Password: Yup.string().min(6, 'Password must be at least 6 characters')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{9,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            )
            .required("This field is required"),
        ConfirmPassword: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .when("Password", {
                is: (val: any) => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("Password")],
                    "Both password need to be the same"
                ),
            })
            .required("Confirm Password Required"),
    })

    const { dispatch } = useContext(AuthContext);

    const handleApi = async () => {

        try {
            const res = await axios.get('/user/all').then(function (response) {
                return response.data;
            }).catch(function (error) {
                console.log(error);
            })

        } catch (err) {
            console.log(err)
        }
        const data = {
            username: "ThanhTung2",
            email: "Thanhtung2@gmail.com",
            password: "123456"
        }
        try {
            const res = await axios.post('/user/register', data).then(function (response) {
                return response;
            }).catch(function (error) {
                console.log(error);
            })

            console.log(res);



        } catch (error) {
            console.log(error);
        }

    }



    return (
        <>
            <title>Register</title>
            <RegisterSection>
                <RegisterContainer className="RegisterAnimation">
                    <ToastContainer />
                    <section className="bg-login__animation">
                        <div className="bg-login__animation-div"></div>
                        <div className="bg-login__animation-div"></div>
                        <div className="bg-login__animation-div"></div>
                        <RegisterBox >
                            <div className="bg-login__box Hidden">
                                <Square style={{}}></Square>
                                <Square ></Square>
                                <Square ></Square>
                                <Square ></Square>
                                <Square ></Square>
                                <Square ></Square>
                                <BoxRegister >
                                    <h2>Register</h2>
                                    <Formik
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={(values, actions) => {
                                            console.log(values);
                                            handleApi();
                                            // actions.setStatus("Login");
                                            setTimeout(() => {
                                                // 
                                                actions.setSubmitting(false);
                                            }, 1500);
                                        }}
                                        enableReinitialize={false}

                                        validateOnChange={true}
                                        validateOnBlur={true}

                                    >
                                        {formikProps => {
                                            const { values, errors, touched, status } = formikProps;

                                            return (
                                                <Form  >
                                                    <FastField
                                                        // setStatus={false}
                                                        name="Username"
                                                        type="text"
                                                        component={InputFieldRegister}
                                                        label="Username"
                                                        placeholder="Username"
                                                        onChange={values.Email}
                                                        invalid={errors.Email}

                                                    />
                                                    <FastField
                                                        // setStatus={false}
                                                        name="Email"
                                                        type="email"
                                                        component={InputFieldRegister}
                                                        label="Email"
                                                        placeholder="Email"
                                                        onChange={values.Email}
                                                        invalid={errors.Email}

                                                    />
                                                    <FastField
                                                        name="Password"
                                                        type="password"
                                                        component={InputFieldRegister}
                                                        label="PassWord"
                                                        placeholder="PassWord"

                                                        invalid={errors.Password}
                                                        onChange={values.Password}

                                                    />
                                                    <FastField
                                                        // setStatus={false}
                                                        name="ConfirmPassword"
                                                        type="password"
                                                        component={InputFieldRegister}
                                                        label="ConfirmPassword"
                                                        placeholder="ConfirmPassword"
                                                        onChange={values.Email}
                                                        invalid={errors.Email}
                                                    />

                                                    <FormGroup>
                                                        <Button className="bg-red-400 w-full p-1 my-3 rounded-md text-gray-500 text-base font-semibold active:bg-red-600" type="submit" disabled={!formikProps.isValid}  >
                                                            <Spinner size="sm" />
                                                            Sign up
                                                        </Button>
                                                    </FormGroup>
                                                </Form>
                                            )
                                        }
                                        }
                                    </Formik>

                                    <p>I have an account? <Link to="./login">Sign In</Link></p>

                                </BoxRegister>
                            </div>
                        </RegisterBox>
                        <BackgroundImgPage className="ImgBackGround">
                            <img src={BackgroundRegister} alt="" />
                        </BackgroundImgPage>
                    </section>
                </RegisterContainer >
            </RegisterSection>
        </>
    )

}