import React from "react";
import { IconButton } from "@mui/material";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import "./App.scss";
import bemCreator from "./components/bemCreator";

const cn = bemCreator("app");

function App() {
  return (
    <div className={cn()}>
      <header>
        <div>
          <span>520 ₽</span>
          <ShoppingBasketOutlinedIcon></ShoppingBasketOutlinedIcon>
          <span>3</span>
        </div>
      </header>
    </div>
  );
}

export default App;
