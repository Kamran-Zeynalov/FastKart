import React from "react";
import AllFooter from "../components/LoginPage/Footer/AllFooter";
import AllHeader from "../components/LoginPage/Header/AllHeader";
import CartCm from "../components/Cartcomponent/CartCm";
import Sticky from "../components/StickyNav/Sticky";

function Cart() {
    return (
        <>
            <AllHeader />
            <CartCm />
            <Sticky />


            <AllFooter />

        </>
    )
}


export default Cart;