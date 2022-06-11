import { useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider';

function App() {
  const [modalIsShown, setModalIsShown] = useState(false);

  // Modal is visible on clicking header button
  const modalIsVisible = () => {
    setModalIsShown(true);
  };

  // hide Modal
  const modalIsHidden = () => {
    setModalIsShown(false);
  };
  return (
    <CartProvider>
      {!modalIsShown ? '' : <Cart hideModal={modalIsHidden} />}
      <Header handleModalIsShown={modalIsVisible} />
      <Meals />
    </CartProvider>
  );
}

export default App;
