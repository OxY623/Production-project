import {useEffect} from "react";
import {useAppDispatch} from "./useAppDispatch";
import {checkAuth} from "entities/User/services/authService";

export const useAuthInit = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
};
