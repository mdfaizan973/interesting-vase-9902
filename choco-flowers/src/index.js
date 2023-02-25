import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from ".//Pages/cartlength";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartContextProvider>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </CartContextProvider>
);
reportWebVitals();
