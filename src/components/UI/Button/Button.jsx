import style from "./Button.module.css"

const ButtonConnect = ({children, onClick, ...props}) => {
    return(
        <button
            className={style.buttonConnect}
            onClick={onClick}
            type="button"
        >
            {children}
        </button>
    )
}

export {ButtonConnect};
