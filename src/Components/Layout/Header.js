import classes from './Header.module.css';
import mealImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <nav className={classes.header}>
        <h2>OrderOnline</h2>
        <HeaderCartButton showModal={props.handleModalIsShown} />
      </nav>
      <div className={classes['main-image']}>
        <img src={mealImage} alt="delicious food" />
      </div>
    </>
  );
};

export default Header;
