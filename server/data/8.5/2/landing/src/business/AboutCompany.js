import {Heading, Text} from "../components";

import css from './Styles.module.css';

export const AboutCompany = () => {
    return (
        <section id="about-us" className={css.aboutcompany}>
            <Heading type="h2" heading="О нас" />
            <Text type="bodyM" text="Мы многого достигли, но впереди ещё предстоят бОльшие свершения. Жизнь нам подкидывала неожиданные повороты, но мы преодолевали всё на своём пути. Наш коллектив - сплоченная команда профессионалов, готовая прийти на выручку друг другу в любую трудную минуту. Но самое главное наше достижение - это ваши подтверждения за наши разработки. Спасибо вам Большое, что вы с нами!" />
            <Text type="bodyM" text="Коллектив Услуги" />
        </section>
    );
};