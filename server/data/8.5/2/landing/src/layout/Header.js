import css from './Header.module.css';

export const Header = () => {
    
    return (
        <header className={css.layout}>
            <div className={css.logo} />
            <h1>Услуга</h1>
        </header>
    )
};