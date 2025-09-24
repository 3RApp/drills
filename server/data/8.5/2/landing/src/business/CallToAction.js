import {Heading, Button} from "../components";

import css from './Styles.module.css';

export const CallToAction = () => {
    return (
        <section className={css.calltoaction}>
            <Heading type="h2" heading="С этой услугой" />
            <Heading type="h2" heading="задачи решаются" />
            <Heading type="h2" heading="на 50% быстрее" />
            <Button title="ТОЖЕ ХОЧУ" />
        </section>
    );
};