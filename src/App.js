import { useState } from 'react';
import Meals from './Components/Meals/Meals';
import CartProvider from './Store/CartProvider';
import UserDetails from './Components/UserDetails/UserDetails';
import { Routes, Route } from 'react-router-dom';
import RouterLayout from './Components/RouterLayout/RouterLayout';
import ContactUs from './Components/ContactUs/ContactUs';

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
      {/* {!modalIsShown ? '' : <Cart />}
      <Header /> */}
      <Routes>
        <Route
          path="/"
          element={
            <RouterLayout
              hideModal={modalIsHidden}
              handleModalIsShown={modalIsVisible}
              modalIsShown={modalIsShown}
            />
          }
        >
          <Route index element={<Meals />} />
          <Route path="users" element={<UserDetails />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
      {/* <Meals /> */}
      {/* <CustomerOrder /> */}
    </CartProvider>
  );
}

export default App;
