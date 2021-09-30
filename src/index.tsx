import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { AuthContextProvider } from './context/context/AuthContext'
// import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../src/app/store';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css'; //using icon and animation
import './index.css';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from "@apollo/client"
import { apolloClient } from './app/graphql';



console.log(store);
ReactDOM.render(
  <React.StrictMode>
    {/* <AuthContextProvider> */}
    <Provider store={store} >
      <ApolloProvider client={apolloClient}>
        <Router>
          <App />
        </Router>
      </ApolloProvider>
    </Provider>
    {/* </AuthContextProvider> */}
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
