import React from "react";
import {classNames} from "shared/libs/classNames/classNames";
import * as styles from "./LoginModal.module.scss";
import {Modal} from "shared/ui/Modal/Modal";
import {LoginForm} from "../LoginForm/LoginForm";

type Props = {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
};

const LoginModal = ({className, isOpen, onClose}: Props) => {
  return (
    <Modal
      lazy
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(styles.LoginModal, {}, [className])}
    >
      <LoginForm />
    </Modal>
  );
};

export {LoginModal};
