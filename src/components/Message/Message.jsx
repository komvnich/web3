import style from './Message.module.css';

export const Message = ({children, props}) => {
    return(
        <h4 className={style.message}>
            {children}
        </h4>
    )
}
