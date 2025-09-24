import {Heading, Text} from "../components";

import css from './Styles.module.css';

export const BusinessEvent = () => {
    return (
        <section id="event" className={css.businessevent}>
            <Heading type="h2" heading="Про мероприятие" />
            <Text type="bodyM" text="На мероприятии у каждого будет возможность вживую посмотреть на результаты. Бесплатно попробовать себя в роли, а также пообщаться с теми, кто уже давно пользуется этой услугой." />
            <Text type="bodyM" text="На мероприятии мы гарантируем вам много общения, а приглашенные музыканты украсят атмосферу незабываемым образом." />
        </section>
    );
};