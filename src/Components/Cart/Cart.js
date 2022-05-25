import CartItem from './CartItem';

const Cart = () => {
  const addedToCart = [
    {
      id: '1',
      name: 'sushi',
      price: 22.99,
      qtyAdded: 2,
    },
  ];
  const cartItems = (
    <ul>
      {addedToCart.map((item) => (
        <CartItem
          id={item.id}
          key={item.id}
          name={item.name}
          price={item.price}
          qtyAdded={item.qtyAdded}
        />
      ))}
    </ul>
  );
  return <>{cartItems}</>;
};

export default Cart;
