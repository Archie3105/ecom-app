import React from 'react'
import { useState } from "react";
import LatestProducts from "./LatestProducts";
import Slider from "./Slider";
import Category from "./Category";
import Features from "./Features";
import { Routes,Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Products from './Products';
function Home(props) {


  return (
    <>
    {/* <Alert alert={alert} /> */}
        <Slider mode={props.mode} />
        <Category mode={props.mode} />
        <LatestProducts mode={props.mode} />
        <Features mode={props.mode} />
        <Routes>
        <Route  path="/products" element={<Products/>} >
            <Route exact path="./products/productdetails" element={<ProductDetails />} />
            <Route exact path="./products/productdetails" element={<ProductDetails />} />
            <Route exact path="./products/productdetails" element={<ProductDetails />} />
          </Route >
        </Routes>
    </>
  )
}

export default Home
