import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTransaction } from '../features/transaction/transactionSlice';

const Form = () => {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');
    console.log(name, type, amount);

    const dispatch = useDispatch();
    const { isLoading, isError, error} = useSelector((state)=>state.transaction)


    const handleCreate = (e) =>{
        e.preventDefault();
        dispatch(createTransaction({
            name,
            type,
            amount: Number(amount)
        }))

    }

    return (
        <div className="form">
            <h3>Add new transaction</h3>

           <form onSubmit={handleCreate} action="">
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="My Salary"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group radio">
                    <label>Type</label>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="income"
                            name="type"
                            required
                            checked={type === 'income'}
                            onChange={(e) => setType('income')}
                        />
                        <label>Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="type"
                            placeholder="Expense"
                            checked={type === 'expense'}
                            onChange={(e) => setType('expense')}
                        />
                        <label>Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Amount</label>
                    <input
                        type="number"
                        placeholder="300"
                        name="amount"
                        required
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <button type='submit' disabled={isLoading} className="btn">Add Transaction</button>

                {
                    !isLoading && isError && <div className='error'>
                        {error}
                    </div>
                }

           </form>

            <button className="btn cancel_edit">Cancel Edit</button>

        </div>
    );
};

export default Form;