import {classNames} from "shared/libs/classNames/classNames";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink,
  Briefcase,
  Flag,
  Plane,
} from "lucide-react";
import {FC} from "react";
import * as styles from "./AboutMe.module.scss";

interface AboutMeProps {
  className?: string;
}

const AboutMe: FC = ({className}: AboutMeProps) => {
  return (
    <div className={classNames(styles.AboutMeProps, {[styles.hero]: true}, [])}>
      <div className={styles.container}>
        <h1>Алексютович Артем Владимирович</h1>
        <h2>Frontend-разработчик | React, Redux</h2>

        <div className={styles.contact}>
          <a
            href="https://t.me/frontender89"
            className={styles.contactItem}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={24} />
            @frontender89
          </a>

          <a href="tel:+79013011397" className={styles.contactItem}>
            <Phone size={24} />
            +7 (901) 301-13-97
          </a>

          <a href="mailto:artem.aleksiutovich.br@gmail.com" className={styles.contactItem}>
            <Mail size={24} />
            artem.aleksiutovich.br@gmail.com
          </a>

          <a
            href="https://t.me/frontender89"
            className={styles.contactItem}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={24} />
            Telegram Channel
          </a>
        </div>

        <div className={styles.location}>
          <MapPin size={24} />
          Санкт-Петербург, м. Садовая
        </div>

        <div className={styles.additionalInfo}>
          <p>
            <Flag size={20} />
            Гражданство: Беларусь
          </p>
          <p>
            <Briefcase size={20} />
            Разрешение на работу: Россия, Беларусь
          </p>
          <p>
            <MapPin size={20} />
            Не готов к переезду
          </p>
          <p>
            <Plane size={20} />
            Не готов к командировкам
          </p>
        </div>
      </div>
    </div>
  );
};

export {AboutMe};
