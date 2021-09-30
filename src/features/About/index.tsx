import { TextField } from '@material-ui/core';
// import InputField from "../../components/customInputField";
import { Form, Formik } from 'formik';
import React from "react";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Button, Spinner } from 'reactstrap';
import styled from "styled-components";
import tw from "twin.macro";
import userApi from '../../api/userApi';
import { Navbar } from "../../components/Navbar";
import { RootState } from "../../app/store";
import { authActions } from '../../redux/Slice/authUser/userSlice'
import { useAppDispatch } from '../../app/hooks'


const AboutContainer = styled.div`
    ${tw`
    w-full
    mt-20
    `}

   
`

const AboutContent = styled.div`
    ${tw`
    flex
    flex-col
    w-full
    items-center
    relative
`}
`

export default function About(props: any) {
    const initialValues = {
        firstName: "Tung",
    };
    const dispatch = useAppDispatch();

    const userData = useSelector((state: RootState) => {
        return state.user;
    });

    const user = {
        username: "Thanhtung444",
        email: "Thanhtung444@gmail.com",
        password: "12345644",
    }

    const history = useHistory();

    const handlerClick = async (data: any) => {

        try {

            // const response = userApi.Login(user).then(res => console.log(res)).catch(error => console.error(error));

            // console.log(response);

            const response = await userApi.Register(user).then(res => console.log(res)).catch((error) => console.log(error.response.data));

            console.log(response);

            // dispatch(authActions.loginStart(user))

            // const res = await axios.post("/user/login", user);

            // const action = LOGIN_SUCCESS(res.data)
            // dispatch(action);
            // if (res) {
            //     localStorage.setItem('user2', JSON.stringify(res.data))
            // }
        }
        catch (err) {
            console.error(err);
        }
    }

    // const handlerLoginClick = (data: any) => {
    //     dispatch(authActions.loginStart(user))
    // }

    // console.log(userData);

    // const history = useHistory();

    // history.push('/about')

    return (
        <AboutContainer>
            {/* <Navbar setUser={props.setUser} /> */}
            <AboutContent>
                <Formik initialValues={initialValues}
                    onSubmit={data => {
                        // console.log(data)
                        handlerClick(data)
                        // handlerLoginClick(data);
                    }}
                >
                    {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) =>
                    (
                        <Form onSubmit={handleSubmit}>
                            <div>
                                <TextField name="firstName" onChange={handleChange} onBlur={handleBlur} value={values.firstName} />
                                <pre>{JSON.stringify(values, null, 2)}</pre>
                            </div>

                            <Button type="submit">
                                {isSubmitting && <Spinner size="sm" />}
                                Click Me!
                            </Button>

                        </Form>
                    )
                    }

                </Formik>

                <Button type="submit" onClick={() => dispatch(authActions.logout())}>
                    Click Me 2
                </Button>
            </AboutContent>
        </AboutContainer>
    )
}