// import {Link} from "react-router-dom";
import {classNames} from "shared/libs/classNames/classNames";
import * as styles from "./Navbar.module.scss";
import React, {useCallback, useState} from "react";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";
import {ThemeButton} from "shared/ui/Button/Button.types";
import {LoginModal} from "features/AuthByUserName";
import {useSelector} from "react-redux";
import {selectorGetAuthData, userActions} from "entities/User";
import {useAppDispatch} from "app/providers/StoreProvider";
interface NavbarProps {
  className?: string;
}

const Navbar = ({className}: NavbarProps) => {
  const {t} = useTranslation("navbar");
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const AuthData = useSelector(selectorGetAuthData);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (AuthData) {
    return (
      <nav className={classNames(styles.navbar, {}, [])}>
        <ul className={styles.navbar__links}>
          <li>
            <span>{`${t("Привет")}, ${AuthData.username}`}</span>
          </li>
          <li>
            <Button
              onClick={(e) => {
                e.stopPropagation();
              }}
              theme={ThemeButton.CLEAR_INVERTED}
            >
              {t("Профиль")}
            </Button>
          </li>
          <li>
            <Button onClick={onLogout} theme={ThemeButton.CLEAR_INVERTED}>
              {t("Выход")}
            </Button>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <nav className={classNames(styles.navbar, {}, [])}>
      <ul className={styles.navbar__links}>
        <li>
          <Button theme={ThemeButton.CLEAR_INVERTED}>Место ссылки</Button>
        </li>
        <li>
          <Button onClick={onShowModal} theme={ThemeButton.CLEAR_INVERTED}>
            {t("Войти")}
          </Button>
          {/* <Modal isOpen={isAuthModal} onClose={onToggleModal}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, in voluptatem
            consequatur nostrum a, quisquam voluptates minus voluptatum quasi tempora hic deserunt
            voluptatibus vel quos, sunt atque incidunt ullam quod.
          </Modal> */}
          <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </li>
      </ul>
    </nav>
  );
};

export {Navbar};
