import { Link } from 'react-router-dom';
import { classNames } from 'shared/helpers/classNames/classNames';
import * as cls from './Navbar.module.scss';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps) {
  return (
    <nav className={classNames(cls.navbar, {}, [])}>
      <ul className={cls.navbar__links}>
        <li>
          {/* <Link to='/'>Main Page</Link> */}
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            className={cls.mainLink}
            to='/'
          >
            Main Page
          </AppLink>
        </li>
        <li>
          {/* <Link to='/about'>About</Link> */}
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            className={cls.mainLink}
            to='/about'
          >
            About
          </AppLink>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
