import {classNames} from "shared/libs/classNames/classNames";
import * as cls from "./PageLoading.module.scss";
import {FC} from "react";
import LoadingSpinner from "../../shared/ui/LoadingSpinner/LoadingSpinner";

interface PageLoadingProps {
  className?: string;
}

const PageLoading: FC = ({className}: PageLoadingProps) => {
  return (
    <div className={classNames(cls.PageLoading, {}, [])}>
      <LoadingSpinner />
    </div>
  );
};

export {PageLoading};
