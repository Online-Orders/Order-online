import classes from './Header.module.css';
import mealImage from '../../assets/meals.jpg';

const Header = (props) => {
  return (
    <>
      <nav className={classes.header}>
        <h2>OrderOnline</h2>
        <button>Your Cart 2</button>
      </nav>
      <div className={classes['main-image']}>
        <img src={mealImage} alt="delicious food" />
      </div>
    </>
  );
};

export default Header;
