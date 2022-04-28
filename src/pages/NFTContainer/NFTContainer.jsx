import style from './NFTContainer.module.css';
import {Container} from "../../components/Container";
import {NFTCard} from "../../components/NFTCard";
import {useSelector, useDispatch} from "react-redux";
import {getStateAction} from "../../redux/store/Slice";

export const NFTContainer = () => {

    const wallet = useSelector(state => state.wallet.wallet);
    const dispatch = useDispatch();

    const handClick = () => {
            return async (dispatch, getState) => {
                const currentState= getState();
                console.log(currentState)
            }
    }

    return(
        <section>
            <Container>
                <div onClick={handClick} className={style.nftcards}>
                    <NFTCard/>
                </div>
            </Container>
        </section>
    )
}
