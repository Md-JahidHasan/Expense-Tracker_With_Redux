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
            //====== Fetch Transaction
            .addCase(fetchTransactions.pending, (state)=>{
                state.isLoading = true;
                state.transactions= [];
                state.isError= false;
            })
            .addCase(fetchTransactions.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.transactions = action.payload;
            })
            .addCase(fetchTransactions.rejected, (state, action)=>{
                state.error = action.error?.message;
                state.isError = true;
                state.isLoading = false;
                state.transactions = [];
            })

            // ====== Add Transaction
            .addCase(createTransaction.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(createTransaction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.transactions.push(action.payload);
            })
            .addCase(createTransaction.rejected, (state, action) => {
                state.error = action.error?.message;
                state.isError = true;
                state.isLoading = false;
            })

            // ====== Edit Transaction
            .addCase(updateTransaction.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(updateTransaction.fulfilled, (state, action) => {
                state.isLoading = false;
                const indexToUpdate = state.transactions.findIndex(t => t.id === action.payload.id);
                state.transactions[indexToUpdate] = action.payload;
            })
            .addCase(updateTransaction.rejected, (state, action) => {
                state.error = action.error?.message;
                state.isError = true;
                state.isLoading = false;
            })

            // ====== Delete Transaction
            .addCase(removeTransaction.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(removeTransaction.fulfilled, (state, action) => {
                state.isLoading = false;
                const transactionAfterDeleted = state.transactions.filter(t =>t.id !== action.payload.id);
                state.transactions = transactionAfterDeleted
            })
            .addCase(removeTransaction.rejected, (state, action) => {
                state.error = action.error?.message;
                state.isError = true;
                state.isLoading = false;
            })
    }
})


export default transactionSlice.reducer;