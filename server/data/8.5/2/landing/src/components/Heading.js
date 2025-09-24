import css from "./Heading.module.css";

export const Heading = ({ type, heading }) => {
    switch (type) {
        default: {
            return (<h2 className={css.heading}>{heading}</h2>);
        }
        case 'h5': {
            return (<h5 className={css.heading}>{heading}</h5>);
        }
        case 'h4': {
            return (<h4 className={css.heading}>{heading}</h4>);
        }
        case 'h3': {
            return (<h3 className={css.heading}>{heading}</h3>);
        }
        case 'h2': {
            return (<h2 className={css.heading}>{heading}</h2>);
        }
        case 'h1': {
            return (<h1 className={css.heading}>{heading}</h1>);
        }
    }
};