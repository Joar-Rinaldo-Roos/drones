import { useState, useRef } from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";

import Item from "./Item/Item";
import Cart from "./Cart/Cart";
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import { auth } from "../../firebase";
import firebase from "firebase/app";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import MyCards from "./Card/Card";

import {
  Wrapper,
  StyledButton,
  Container,
  FormWrap,
  FormContent,
  FormButton,
  FormH1,
  Icon,
} from "./App.styles";
import React from "react";
import { dataItems } from "./Cart/data";
import { Button } from "@material-ui/core";
import ActionAreaCard from "./Card/Card";

export type CartItemType = {
  id: number;
  category: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const emailRef = useRef();
  const passwordRef = useRef();
  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Button
          variant="contained"
          onClick={() => {
            firebase.auth().signOut();
          }}
          href="/"
        >
          Log Out
        </Button>
        <Wrapper>
          <Drawer
            anchor="right"
            open={cartOpen}
            onClose={() => setCartOpen(false)}
          >
            <Cart
              cartItems={cartItems}
              addToCart={handleAddToCart}
              removeFromCart={handleRemoveFromCart}
            />
          </Drawer>
          <StyledButton onClick={() => setCartOpen(true)}>
            <Badge badgeContent={getTotalItems(cartItems)} color="error">
              <AddShoppingCartIcon />
            </Badge>
          </StyledButton>
          <Grid container spacing={3}>
            {dataItems?.map((item) => (
              <Grid item key={item.id} xs={12} sm={4}>
                <ActionAreaCard item={item} handleAddToCart={handleAddToCart} />
              </Grid>
            ))}
          </Grid>
        </Wrapper>
      </>
    </QueryClientProvider>
  );
};

export default App;
