import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./Cart.styles";
import { CartItemType } from "../App";
import React, { useState } from "react";
import { ArrowForward } from "../../HeroSection/HeroElements";
import { ArrowRight } from "../../HeroSection/HeroElements";
import { NavBtnLink, NavBtn, AButton } from "../../Navbar/NavbarElements";
import Item from "../Item/Item";
import { Button, Hidden } from "@material-ui/core";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  if (cartItems.length === 0) {
  }
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
      <NavBtn>
        <Button
          variant="contained"
          disabled={cartItems.length === 0}
          href="https://google.se"
        >
          Checkout
        </Button>
      </NavBtn>
    </Wrapper>
  );
};

export default Cart;
