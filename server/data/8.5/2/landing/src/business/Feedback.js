import {Heading, Text} from "../components";

import css from './Styles.module.css';

export const Feedback = () => {
    return (
        <section id="feedback" className={css.feedback}>
            <Heading type="h2" heading="Отзывы" />
            <Text type="bodyM" text="Мы хотели получить услугу, но всё никак руки не доходили. Но вот увидели объявление и решились. Пришли, получили услугу и ни разу не пожалели. Чего и вам желаем!" />
        </section>
    );
};
