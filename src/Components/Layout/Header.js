import classes from './Header.module.css';
import mealImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <nav className={classes.header}>
        <div className={classes.logo}>
          <h2>Foodie</h2>
        </div>

        <HeaderCartButton showModal={props.handleModalIsShown} />
      </nav>
      <div className={classes['main-image']}>
        <img src={mealImage} alt="delicious food" />
      </div>
    </>
  );
};

export default Header;
