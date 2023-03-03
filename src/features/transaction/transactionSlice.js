import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTransaction, deleteTransaction, editTransaction, getTransaction } from "./transactionAPI";



//=========== initial state 
const initialState = {
    transactions: [],
    isLoading: false,
    isError: false,
    error:''
};


//=========== thunk function 
export const fetchTransactions = createAsyncThunk('transaction/fetchTransactions', async ()=>{
    const transactions = await getTransaction();
    return transactions;
});

export const createTransaction = createAsyncThunk('transaction/addTransaction', async (data)=>{
    const transaction = await addTransaction(data);
    return transaction;
})

export const updateTransaction = createAsyncThunk('transaction/editTransaction', async ({id, data})=>{
    const transaction = await editTransaction(id, data);
    return transaction;
})

export const removeTransaction = createAsyncThunk('transaction/deleteTransaction', async (id)=>{
    const transaction = await deleteTransaction(id);
    return transaction;
})



//============= api slice 
const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(fetchTransactions.pending, (state, action)=>{
                state.transactions = action.payload
            })

    }
})