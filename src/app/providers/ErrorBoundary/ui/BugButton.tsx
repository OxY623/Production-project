import React, {useState} from "react";
import {Button} from "shared/ui/Button/Button";

const BugButton: React.FC = () => {
  const [error, setError] = useState<boolean>(false);

  if (error) {
    // Симуляция ошибки
    throw new Error("This is a simulated error!");
  }

  const handleThrowError = () => {
    setError(true);
  };

  return <Button onClick={handleThrowError}>Throw Error</Button>;
};

export {BugButton};
