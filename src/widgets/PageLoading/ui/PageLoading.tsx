import {classNames} from "shared/libs/classNames/classNames";
import * as cls from "./PageLoading.module.scss";
import React from "react";
import LoadingSpinner from "../../../shared/ui/LoadingSpinner/LoadingSpinner";

interface PageLoadingProps {
  className?: string;
}

const PageLoading: React.FC = ({className}: PageLoadingProps) => {
  return (
    <div className={classNames(cls.PageLoading, {}, [])}>
      <LoadingSpinner />
    </div>
  );
};

export {PageLoading};
