import React, {Suspense} from "react";
import {withTranslation, WithTranslation} from "react-i18next";
import * as styles from "./ErrorBoundary.module.scss";
import {Button} from "shared/ui/Button/Button";

interface Props extends WithTranslation {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {hasError: false};
    this.handleUpdatePage = this.handleUpdatePage.bind(this);
  }

  static getDerivedStateFromError(error: Error): State {
    return {hasError: true};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleUpdatePage() {
    location.reload();
  }

  render() {
    const {t} = this.props;

    if (this.state.hasError) {
      return (
        <Suspense fallback="">
          <div className={styles.errorPage}>
            <div className={styles.errorIcon}>⚠️</div>
            <h1>{t("граница ошибки.заголовок")}</h1>
            <p>{t("граница ошибки.сообщение")}</p>
            <Button onClick={this.handleUpdatePage}>{t("Обновить страницу")}</Button>
          </div>
        </Suspense>
      );
    }

    return this.props.children;
  }
}

export default withTranslation()(ErrorBoundary);
