import {classNames} from "shared/libs/classNames/classNames";
import * as styles from "./Input.module.scss";
import React, {memo, useLayoutEffect, useEffect} from "react";

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
  const {
    className,
    value = "",
    onChange,
    type = "text",
    id,
    placeholder,
    label,
    autofocus,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = React.useState(false);
  const [positionCarriage, setPositionCarriage] = React.useState(0);
  const ref = React.useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.offsetWidth);
    }
  }, []);

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (event: React.SyntheticEvent<HTMLInputElement>) => {
    if (!ref.current) return;

    const selectionStart = event.currentTarget.selectionStart || 0;

    // Берём реальную ширину символа через getComputedStyle
    const charWidth = parseFloat(getComputedStyle(ref.current).fontSize) * 0.6; // Средняя ширина символа в монопространстве

    setPositionCarriage(selectionStart * charWidth - ref.current.scrollLeft);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);

    if (!ref.current) return;

    const selectionStart = e.target.selectionStart || e.target.value.length;
    const charWidth = parseFloat(getComputedStyle(ref.current).fontSize) * 0.6;

    setPositionCarriage(selectionStart * charWidth - ref.current.scrollLeft);
  };

  return (
    <div className={classNames(styles.Input, {}, [])}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {`${label}*> `}
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
          max={otherProps.max}
          min={otherProps.min}
          onChange={onChangeHandler}
          type={type}
          placeholder={placeholder}
          className={styles.inputTmp}
          {...otherProps}
        />
        {isFocused && <span style={{left: `${positionCarriage}px`}} className={styles.carriage} />}
      </div>
    </div>
  );
});

export {Input};
