import React, { Component } from "react";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import AppHeader from './common/header';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import "./App.css";
import Listing from "./components/products/listing";
import Product from "./components/products/detail";
import Checkout from "./components/checkout";
import { ThemeProvider, createMuiTheme } from "@mui/material";
import AppFooter from "./common/footer";

const logintype = '';


const theme = createMuiTheme({
  typography: {
    fontFamily: 'Ubuntu, sans-serif',
    h2: { fontSize: 32, fontWeight: 700, },
    h4: { fontSize: 24, fontWeight: 500, },
    h5: { fontSize: 20, fontWeight: 500, },
    h6: { fontSize: 16, fontWeight: 500, },
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      textTransform: 'none'
    },
  },
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#FDC018',
    },
  },
});
  

function App() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <AppHeader login={logintype}/>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route index element={<Login />} />
            <Route path="listing" element={<Listing />} />
            <Route path="product" element={<Product />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="checkout" element={<Checkout />} />
          {/* </Route> */}
        </Routes>
        <AppFooter/>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;