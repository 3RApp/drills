import { Link } from "react-router-dom";

import css from './Navigation.module.css';

export const Navigation = () => {
    return (
          <nav className={css.navigation}>
            <ul>
                <li><Link to="#">Главная</Link></li>
                <li><Link to="#event">Про мероприятие</Link></li>
                <li><Link to="#service">Об услуге</Link></li>
                <li><Link to="#confirmation">Подтверждение</Link></li>
                <li><Link to="#feedback">Отзывы</Link></li>
                <li><Link to="#registration">Регистрация</Link></li>
                <li><Link to="#about-us">О нас</Link></li>
            </ul>
          </nav>
    );
};