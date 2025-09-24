import css from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={css.footer}>
            <div>
                <div>Email: email </div><div>Телефон: +7 (000) 000-00-00</div>
            </div>
            <div>Оказание услуги</div>
        </footer>
    );
};