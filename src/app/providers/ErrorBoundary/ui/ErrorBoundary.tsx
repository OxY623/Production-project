import React from "react";
import * as styles from "./ErrorBoundary.module.scss";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error: Error): State {
    return {hasError: true};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorPage}>
          <div className={styles.errorIcon}>⚠️</div>
          <h1>Упс! Что-то пошло не так.</h1>
          <p>Пожалуйста, попробуйте обновить страницу или вернитесь позже.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
