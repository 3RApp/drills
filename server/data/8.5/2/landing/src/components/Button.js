import css from "./Button.module.css";

export const Button = ({ title, onClick, size = "sm", type, ...rest }) => {

    return <button onClick={onClick} className={css[size]} {...rest}>{title}</button>;
};