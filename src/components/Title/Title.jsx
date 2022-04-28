import style from './Title.module.css';

export const Title = ({children}) => {
    return(
        <h2 className={style.title}>
            {children}
        </h2>
    )
}
