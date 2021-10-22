import { CodeIcon, MailIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { FastField, Form, Formik } from 'formik';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, FormGroup, Spinner } from 'reactstrap';
import styled from 'styled-components';
import tw from 'twin.macro';
import * as Yup from 'yup';
// import 'bootstrap/dist/css/bootstrap.css';
import BackgroundLogin from '../../assets/backgroundpicture/bglogin.jpeg';
import { login } from '../../context/Authcontext/apiAuth';
// import { useHistory } from 'react-router-dom'
// import { AuthContext } from '../../context/Authcontext/AuthContext';
import { InputFieldLogin } from '../../components/customField/inputField';
import "../../css/animation.css";
import "../../css/cssBootstrap.css";
import { authActions } from '../../redux/Slice/authUser/userSlice'
import { useAppDispatch } from '../../app/hooks'
import { LoginWithFireBase } from '../../components/loginWithFireBase';

const LoginSection = styled.section`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`



const LoginContainer = styled.div`
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
const LoginBox = styled.div`
   
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

const BoxLogin = styled.div`
   
    ${tw`
      w-full
    `}

    & > .errorType--Login > form > div > div.TypeSuccess {
        border: red 1px solid !important;
        background-image : url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right calc(.375em + .1875rem) center;
        background-size: calc(.75em + .375rem) calc(.75em + .375rem);
    }

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
        left-0
        w-full
        h-full
        `}
        background: linear-gradient(225deg,#e91e63,#03a9f4);
        z-index:1;
        mix-blend-mode: screen;
    }
    img{
        ${tw`
        absolute
        top-0
        left-0
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
            transform: translateY(-20px);
        }50%{
            transform : translateY(20px);
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
        left: -110px;
        width: 120px;
        height: 120px;
        z-index:2;
    }

    :nth-child(3){
        --i: 2;
        bottom: 50px;
        right: -40px;
        width: 80px;
        height: 80px;
        z-index: -1;
    }

    :nth-child(4){
        --i: 3;
        bottom: -40px;
        left: 100px;
        width: 70px;
        height: 70px;
    }

    :nth-child(5){
        --i: 4;
        top: -50px;
        left: 140px;
        width: 60px;
        height: 60px;
    }
    
`

toast.configure()
export function Login() {

    // const { dispatch } = useContext(AuthContext);

    const dispatch = useAppDispatch();

    // const history = useHistory();

    const [error, setError] = useState("")
    const [LoginCss, setLoginCss] = useState(false)
    // const [statusValue, setStatusValue] = useState(0)

    const initialValues = {
        Email: '',
        Password: '',
    }

    const validationSchema = Yup.object().shape({
        Email: Yup.string().email("This field just entered is not email").required("This field is required"),
        Password: Yup.string().min(6, 'Password must be at least 6 characters').required("This field is required")
    })

    const loginFailed = () => toast.error("Tài khoản hoặc mật khẩu không đúng", { autoClose: 5000 });
    // const loginSuccess = () => toast.success("Đăng nhập thành công");


    // console.log(error);

    // console.log(statusValue);

    const handelLogin = async (values: any, actions: any) => {
        // console.log("success");

        const params = {
            email: values.Email.trim(),
            password: values.Password.trim(),
        }

        // if (params) {
        //     dispatch(authActions.loginStart(params))
        // }

        // setTimeout(() => {
        //     actions.setSubmitting(false);
        // }, 2000)


        // console.log(params);
        try {
            const res = await axios.post('/user/login', params).then(function (response) {
                return response;

            }).catch(function (error) {
                return error.response;
            });

            if (res.status === 200) {
                // loginSuccess();
                setLoginCss(false);
                dispatch(authActions.loginStart(params))
            } else {
                loginFailed();
                setLoginCss(true);
                dispatch(authActions.loginStart(params))
                const textError = "Tên đăng nhập hoặc mật khẩu không đúng";
                await setError(textError);
                setTimeout(() => {
                    setLoginCss(false);
                    actions.setSubmitting(false);
                    setError("");
                }, 5000)

            }

        } catch (error) {

            console.log(error);
        }
    }

    // console.log(dispatch)

    return (
        <>
            <title>Login</title>
            <LoginSection>
                <LoginContainer className="LoginAnimation">
                    <ToastContainer />
                    <section className="bg-login__animation">
                        <div className="bg-login__animation-div"></div>
                        <div className="bg-login__animation-div"></div>
                        <div className="bg-login__animation-div"></div>
                        <BackgroundImgPage className="ImgBackGround">
                            <img src={BackgroundLogin} alt="" />
                        </BackgroundImgPage>
                        <LoginBox>
                            <div className="bg-login__box Hidden">
                                <Square></Square>
                                <Square></Square>
                                <Square></Square>
                                <Square></Square>
                                <Square></Square>
                                <BoxLogin>
                                    <div className={LoginCss ? "errorType--Login" : ""}>
                                        <h2>Login</h2>
                                        <Formik
                                            initialValues={initialValues}
                                            validationSchema={validationSchema}
                                            onSubmit={(values, actions) => {
                                                handelLogin(values, actions);
                                                actions.setStatus("Login");
                                            }}
                                            enableReinitialize={false}
                                            validateOnChange={true}
                                            validateOnBlur={true}
                                        // validateOnMount={true}

                                        >
                                            {formikProps => {
                                                const { values, errors, } = formikProps;


                                                // console.log(formikProps.isSubmitting);
                                                // console.log(errors);

                                                // console.log(status);
                                                return (
                                                    <Form  >
                                                        <FastField
                                                            // setStatus={false}
                                                            name="Email"
                                                            type="email"
                                                            component={InputFieldLogin}
                                                            label="Email"
                                                            placeholder="Email"
                                                            icon={MailIcon}
                                                            onChange={values.Email}
                                                            invalid={errors.Email}
                                                        />
                                                        <FastField
                                                            name="Password"
                                                            type="password"
                                                            component={InputFieldLogin}
                                                            label="PassWord"
                                                            placeholder="PassWord"
                                                            icon={CodeIcon}

                                                            invalid={errors.Password}
                                                            onChange={values.Password}
                                                        />

                                                        <div className="w-full">
                                                            {error && (
                                                                <div className="w-full mt-2 mb-2 flex flex-1 flex-wrap items-center" >
                                                                    <span className="w-full overflow-hidden error">{error}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <FormGroup>
                                                            <Button className="bg-red-400 w-full p-1 my-3 rounded-md text-gray-500 text-base font-semibold active:bg-red-600 btnBootstrap" type="submit" disabled={!formikProps.isValid}  >
                                                                {formikProps.isSubmitting && <Spinner size="sm" className="bootstrapSpinner" />}
                                                                Login
                                                            </Button>
                                                        </FormGroup>
                                                    </Form>
                                                )
                                            }
                                            }
                                        </Formik>

                                        <p>Don't have an account? <Link to="./register">Sign Up</Link></p>

                                        <LoginWithFireBase > </LoginWithFireBase>
                                    </div>
                                </BoxLogin>
                            </div>
                        </LoginBox>
                    </section>

                </LoginContainer>
            </LoginSection>
        </>
    )
}