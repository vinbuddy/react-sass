import "./Button.scss";
function Button({ children, type = "primary", size = "medium" }) {
    return <button className={`button ${type} ${size}`}>{children}</button>;
}

export default Button;
