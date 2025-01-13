import React, {useState, useRef, useEffect, useCallback} from "react";
import {classNames} from "shared/libs/classNames/classNames";
import * as styles from "./Modal.module.scss";
import {Portal} from "../Portal/Portal";

interface ModalProps {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

const Modal: React.FC<ModalProps> = ({className, children, onClose, isOpen}) => {
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen || false,
    [styles.isClosing]: isClosing,
  };

  const closeHandler = () => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  };

  const onContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={classNames(styles.Modal, mods, [className])}>
        <div className={styles.overlay} onClick={closeHandler}>
          <div className={styles.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export {Modal};
