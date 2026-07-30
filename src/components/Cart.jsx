const Cart = ({ cart = [], removeFromCart }) => {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-5">
        Shopping Cart
      </h1>


      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {cart.map((item) => (

            <div
              key={item.id}
              className="
                border
                rounded-xl
                p-4
                shadow
              "
            >

              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-40
                  object-cover
                  rounded
                "
              />


              <h2 className="text-xl font-bold mt-3">
                {item.title}
              </h2>


              <p className="text-green-600 font-bold mt-2">
                ${item.price}
              </p>


              <p className="text-gray-600 mt-2">
                {item.description}
              </p>


              <p className="text-gray-600">
                Instructor: {item.instructor}
              </p>


              <button
                onClick={() => removeFromCart(item.id)}
                className="
                  mt-3
                  bg-red-500
                  text-white
                  px-4
                  py-2
                  rounded
                  hover:bg-red-600
                "
              >
                Remove from Cart
              </button>


            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default Cart;