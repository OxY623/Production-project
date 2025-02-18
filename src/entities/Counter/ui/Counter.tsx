import React from "react";
import {Button} from "shared/ui/Button/Button";
import {counterActions} from "../model/slice/CounterSlice";
import {useDispatch, useSelector} from "react-redux";
import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue";

type Props = {
  className?: string;
};

const Counter = (props: Props) => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className="">
      Counter
      <h1>Value = {counterValue}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};

export {Counter};
function useAppDispatch() {
  throw new Error("Function not implemented.");
}
