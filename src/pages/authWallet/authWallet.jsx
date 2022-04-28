import style from './authWallet.module.css';
import {ButtonConnect} from "../../components/UI/Button/Button";
import {Container} from "../../components/Container";
import {Message} from "../../components/Message";
import metamask from '../../assets/metamask.png';
import WALLET_LOGO from '../../assets/wallet-logo.png';
import {Title} from "../../components/Title";
import {useState} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {connectWalletAddress, logoutWallet} from "../../redux/store/Slice";

export const AuthWallet = () => {

    const [walletAddress, setWalletAddress] = useState('');

    const wallet = useSelector(state => state.wallet.wallet);
    const dispatch = useDispatch()

    const logOutWallet = () => {
        setWalletAddress('');
        let accountWallet = 'notAuth';
        dispatch(logoutWallet('notAuth'));
    }

    const connectWallet = async () => {
        if(typeof window.ethereum !== 'undefined'){
            const accounts = await window.ethereum.request( { method: 'eth_requestAccounts' } );
            let accountWallet = accounts[0];
            console.log(accountWallet)
            setWalletAddress(accounts[0]);
            dispatch(connectWalletAddress({accountWallet} ) )
        }
    }

    return(
        <section className={style.authWallet}>
            <img src={WALLET_LOGO} alt="wallet_logo"/>
            <Title>
                Wallet
            </Title>
            <Container>
                <div className={style.walletContainer}>
                    <div className={style.authWallet__header}>
                        <p>MetaMask</p>
                        <img src={metamask} alt="metamask_logo"/>
                    </div>
                    {!walletAddress ?
                        <ButtonConnect
                            onClick={connectWallet}
                        >
                            Connect MetaMask
                        </ButtonConnect>
                        :
                        <ButtonConnect
                            onClick={logOutWallet}>
                            LogOut MetaMask
                        </ButtonConnect>
                    }
                    <Message>
                        {walletAddress}
                    </Message>
                </div>
            </Container>
        </section>
    )
}
