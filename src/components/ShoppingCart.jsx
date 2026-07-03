import { useState } from "react";
import CourseCard from "./DashBoard/CourseCard";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (course) => {
    setCart([...cart, course]);
  };

  return (
    <CourseCard
      onAddToCart={addToCart}
    />
  );
};

export default ShoppingCart;