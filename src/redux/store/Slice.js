import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice( {
    name: 'wallet',
    initialState: {
        wallet: []
    },
    reducers: {
        connectWalletAddress(state, action) {
            console.log(action.payload);

            state.wallet.push({
                walletAddress: action.payload.text,
                isAccess: false
            });
        },

        logoutWallet(state, action) {
            state.wallet = state.wallet.filter(address => address.id !== action.payload)
        },

        getStateAction(){

        }
    }
} );

export const {connectWalletAddress, logoutWallet, getStateAction} = slice.actions;

export default slice.reducer;
