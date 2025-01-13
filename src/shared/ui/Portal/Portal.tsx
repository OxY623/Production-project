import React from "react";
import {createPortal} from "react-dom";

interface PortalProps {
  children?: React.ReactNode;
  element?: HTMLElement;
}

const Portal = ({children, element = document.body}: PortalProps) => {
  return createPortal(children, element);
};

export {Portal};
