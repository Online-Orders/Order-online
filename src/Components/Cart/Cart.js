const Cart = () => {
  const addedToCart = [
    {
      id: '1',
      name: 'sushi',
      price: 22.99,
      qtyAdded: 2,
    },
  ];
  const cartItems = addedToCart.map((item) => item.name);
  return <>{cartItems}</>;
};

export default Cart;
