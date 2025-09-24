import {Heading, Text} from "../components";

import css from './Styles.module.css';

export const Confirmation = () => {
    return (
        <section id="confirmation" className={css.confirmation}>
            <Heading type="h2" heading="Подтверждения" />
            <Text type="bodyM" text="Наша услуга, зарегистрирована в специальном реестре услуг, получить регистрацию в котором могут только организации прошедшие специальную комиссию для подтверждения надлежащего оказания" />
            <div className={css.certificate}>
                <div>
                    <p>
                        Данный сертификат подтверждает, что компания проводящая мероприятие, действительно оказывает услугу строго соответствующую установленному законодательству.
                    </p>
                    <p>
                        Главный специалист центра сертификации
                    </p>
                </div>
            </div>
        </section>
    );
};
