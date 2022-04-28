import {configureStore} from "@reduxjs/toolkit";
import walletReducer from './Slice';

export default configureStore( {
    reducer: {
        wallet: walletReducer,
    }
} );
