import { useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

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
    <div>
      {!modalIsShown ? '' : <Cart hideModal={modalIsHidden} />}
      <Header handleModalIsShown={modalIsVisible} />
      <Meals />
    </div>
  );
}

export default App;
