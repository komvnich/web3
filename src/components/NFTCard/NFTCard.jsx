import style from './NFTCard.module.css';
import {useEffect, useState} from "react";
import axios from "axios";

export const NFTCard = () => {

    const [NFTList, setNFTList] = useState([]);

    const api = axios.create({
        baseURL: 'http://localhost:3003/nft'
    })

    useEffect(() => {
        api.get('/')
            .then(res => {
                const NFTList = res.data
                setNFTList(NFTList);
            })
    }, [setNFTList]);


    return(
        <>
            {NFTList.map(item => (
                <div className={style.nft_data}>
                    <div className={style.uid}>
                        #{item.id}
                    </div>
                    <div className={style.nft_data_img}>
                        <img src={item.image} alt=""/>
                    </div>
                    <div className={style.nft_data_name}>
                        {item.name}
                    </div>
                    <div className={style.nft_data_type}>
                        {item.type}
                    </div>
                </div>
            ))}
        </>
    )
}
