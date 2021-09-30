import React, { Suspense, useEffect, useState } from "react";
import { unwrapResult } from '@reduxjs/toolkit';
import { RootStateOrAny, useSelector } from "react-redux";
// import { HomePage } from './app/containers/Homepage';
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import productApi from "./api/productApi";
import './App.css';
import { Login } from "./features/Login";
import { NotFound } from "./features/notFound";
import { PageLayOut } from "./features/PageLayout";
import { PrivateRouter } from "./features/PrivateRouter";
import { Register } from "./features/Register";
import { Services } from "./features/Services";
// import { useQuery } from "@apollo/client"
// import { Get_ALL_Product } from './services/productService/queries'
import ProductService from './services/productService';
import { useDispatch } from "react-redux";
import { addProducts } from "./redux/Slice/product/productSlice"
import { getMe } from './redux/Slice/authUser/userSlice';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';


// config fire base here
const config = {
  apiKey: 'AIzaSyAc_xlFN5gL9nX-0tUVkgt7EdeOm7AcIQE',
  authDomain: 'shopping-app-f29b6.firebaseapp.com',
};
firebase.initializeApp(config);


// ---------------------------------
const AppContainer = styled.div`
${tw`
  flex
  flex-col
  w-full
  h-full
`}
`

const HomePage = React.lazy(() => import("./features/Homepage"))
const About = React.lazy(() => import("./features/About"))
const ProductDetail = React.lazy(() => import("./features/ProductDetail"))

function App() {

  // API EVN
  /*
  const PF = process.env.REACT_APP_API_URL;

  console.log(PF);
  */

  const dispatch = useDispatch();

  // ------------ Connect Data Graphql -------------------
  // const { error, data } = useQuery(Get_ALL_Product)

  // console.log(data);

  // 
  // const { state } = useContext(AuthContext);
  // const isFetchingIn = (localStorage.getItem('user-token'));

  const state = useSelector((state: RootStateOrAny) => state);

  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // console.log(state.user);

  // console.log(user);

  // const [productList, setProductList] = useState([])

  //handle firebase auth changed




  useEffect(() => {

    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user: any) => {

      if (!user) {
        // user logs out , handle something here
        console.log("User is not login")

        return;
      }

      try {
        const actionResult: any = await dispatch(getMe());
        const currentUser = unwrapResult(actionResult);
        console.log('Logged in user: ', currentUser);

        const token = await user.getIdToken();

        console.log('Logged in user token: ', token)

      } catch (err) {
        console.log(err)
      }

    });

    return () => unregisterAuthObserver();
  }, [])


  useEffect(() => {
    // const fetchData = async () => {
    //   const product = await ProductService.getProducts().catch((err) => console.log(err));
    //   // console.log(product);
    // }
    // fetchData();
    const FetchProduct = async () => {
      try {
        // const name = "Tung"
        const res = await productApi.getAllProduct();
        dispatch(addProducts(res.data.product));
        // console.log(res);
      } catch (err) {
        console.log("Failed to fetch product list", err)
      }
    }
    FetchProduct();
  }, [])


  // console.log(user);

  const [activeModalOpen, setActiveModalOpen] = useState(true);



  return (
    <AppContainer className={!activeModalOpen ? "activeModal" : "add"}>

      <Suspense fallback={<div>Loading ....</div>}>

        {/* {user ? <Redirect from="/" to="/home" /> : ""} */}
        <Switch>
          {/* <Route exact path="/home"> <HomePage setActiveModalOpen={setActiveModalOpen} activeModalOpen={activeModalOpen} setUser={setUser} /> </Route> */}

          <Route exact path="/">
            <PageLayOut>
              <HomePage setActiveModalOpen={setActiveModalOpen} activeModalOpen={activeModalOpen} />
            </PageLayOut>
          </Route>

          <Route exact path="/product/:id">
            <PageLayOut>
              <ProductDetail />
            </PageLayOut>
          </Route>

          <PrivateRouter exact path="/about" >
            <PageLayOut>
              <About />
            </PageLayOut>
          </PrivateRouter>

          <PrivateRouter exact path="/services">
            <PageLayOut>
              <Services setActiveModalOpen={setActiveModalOpen} activeModalOpen={activeModalOpen} />
            </PageLayOut>
          </PrivateRouter>
          <Route exact path="/login">
            {
              state.user.user ? <Redirect to="/" /> : <Login />
            }
          </Route>
          <Route exact path="/register">
            <PageLayOut>
              <Register />
            </PageLayOut>
          </Route>

          <Route>
            <NotFound />
          </Route>


        </Switch>
        {/* */}
      </Suspense>

    </AppContainer>
  );
}

export default App;
