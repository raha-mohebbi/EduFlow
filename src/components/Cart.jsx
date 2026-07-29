const Cart = ({ cart }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} width={120} />
          <h2>{item.title}</h2>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;