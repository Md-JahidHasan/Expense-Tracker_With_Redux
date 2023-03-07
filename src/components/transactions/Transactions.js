import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../../features/transaction/transactionSlice';
import Transaction from './Transaction';

const Transactions = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchTransactions())
    }, [dispatch]);

    const {transactions} = useSelector((state)=>state.transaction)
    return (
        <>
            <p className="second_heading">Your Transactions:</p>

            <div className="conatiner_of_list_of_transactions">
                <ul>
                    {
                        transactions.map(t => <Transaction
                        key={t.id}
                        transaction={t}
                        ></Transaction>)
                    }
                    
                </ul>
            </div>
        </>
    );
};

export default Transactions;