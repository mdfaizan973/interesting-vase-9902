import { createContext, useState, useEffect } from "react";
import axios from "axios";
//create...
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartd, setCartd] = useState(false);
  const MyCartData = () => {
    axios
      .get("http://localhost:8010/cartItems")
      .then((res) => {
        console.log(res);
        setCartd(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    MyCartData();
  }, [cartd]);

  let totalcart = cartd.length;
  // console.log("cdata", totalcart);
  return (
    <CartContext.Provider value={{ cartd, totalcart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
