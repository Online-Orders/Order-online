import classes from './Header.module.css';
import mealImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <>
      <nav className={classes.header}>
        <div className={classes.logo}>
          <h2>Foodie</h2>
        </div>
        <div className={classes.linksStyling}>
          <Link className={classes.link} to="/">
            Meals
          </Link>
          <Link className={classes.link} to="/users">
            Users
          </Link>
          <Link className={classes.link} to="/contact">
            Contact Us
          </Link>
        </div>
        <HeaderCartButton showModal={props.showModal} />
      </nav>
      <div className={classes['main-image']}>
        <img src={mealImage} alt="delicious food" />
      </div>
    </>
  );
};

export default Header;
