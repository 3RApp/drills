import {Heading, Text} from "../components";

import css from './Styles.module.css';

export const Service = () => {
    return (
        <section id="service" className={css.service}>
            <Heading type="h2" heading="Об услуге" />
            <Text type="bodyM" text="Она была разработана именно для того, чтобы каждый мог решать свои задачи наиболее эффективно. Разработчики услуги сами когда-то были на вашем месте и в один момент решили, что пора действовать." />
            <Text type="bodyM" text="Теперь и у вас есть возможность за меньшее время получать бОльшие результаты." />
            <Text type="bodyM" text="Это ли не чудо" />
        </section>
    );
};
