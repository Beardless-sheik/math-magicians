import cx from 'classnames';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => (
  <>
    <div className={styles.navContainer}>
      <h1> Math Magicians </h1>
      <div className={styles.navLinkCenter}>
        <ul className={styles.linkContainer}>
          <li className={cx(styles.linkItem)}>
            <Link to="/" className={styles.borderRightList}> Home </Link>
          </li>
          <li className={cx(styles.linkItem)}>
            <Link to="/calculator" className={styles.borderRightList}> Calculator </Link>
          </li>
          <li className={styles.linkItem}>
            <Link to="/quote"> Quote </Link>
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default NavBar;
