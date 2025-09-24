import css from "./Text.module.css";

export const Text = ({ type = "bodyM", text }) => {
    return (<p className={css[type]}>{text}</p>);
};