import { createContext, useState } from "react";


export const CartContext = createContext();


export const CartProvider = ({children}) => {


  const [cart,setCart] = useState([]);



  const addToCart = (course)=>{

    setCart(prev=>{

      const exists = prev.find(
        item=>item.id === course.id
      );


      if(exists){
        return prev;
      }


      return [...prev,course];

    });

  };



  const removeFromCart = (id)=>{

    setCart(prev=>
      prev.filter(
        item=>item.id !== id
      )
    );

  };



  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart
      }}
    >

      {children}

    </CartContext.Provider>

  );

};