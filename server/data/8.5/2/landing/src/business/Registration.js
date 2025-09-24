import {Heading, Button} from "../components";

import css from './Styles.module.css';

export const Registration = () => {
     return (
        <section id="registration" className={css.registration}>
            <Heading type="h2" heading="Регистрация на мероприятие" />
            <Button title="ЗАРЕГИСТРИРОВАТЬ" />
        </section>
    );
};