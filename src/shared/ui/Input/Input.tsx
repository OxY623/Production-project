import {classNames} from "shared/libs/classNames/classNames";
import * as styles from "./Input.module.scss";
import React, {memo, useLayoutEffect} from "react";

type IValue = string;
type HTMLInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "label"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: IValue;
  type?: string;
  onChange?: (value: IValue) => void;
  id?: string;
  placeholder?: string;
  label?: string;
  autofocus?: boolean;
}

const Input = memo((props: InputProps) => {
  const {className, value, onChange, type, id, placeholder, label, autofocus, ...otherProps} =
    props;
  const [isFocused, setIsFocused] = React.useState(false);
  const [positionCarriage, setPositionCarriage] = React.useState(0);
  const ref = React.useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onBlur = () => {
    setIsFocused(false);
  };
  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (event: any) => {
    setPositionCarriage(event?.target?.selectionStart || 0);
  };
  return (
    <div className={classNames(styles.Input, {}, [])}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {`${label}> `}
        </label>
      )}
      <div className={styles.wrapperInput}>
        <input
          ref={ref}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          id={id}
          value={value}
          onChange={(e) => {
            onChange?.(e.target.value);
            setPositionCarriage(e.target.value.length);
          }}
          type={type}
          placeholder={placeholder}
          className={styles.inputTmp}
          {...otherProps}
        />
        {isFocused && (
          <span style={{left: `${positionCarriage * 7}px`}} className={styles.carriage} />
        )}
      </div>
    </div>
  );
});

export {Input};
