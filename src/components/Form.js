import React, { useState } from 'react';

const Form = () => {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');
    console.log(name, type);


    return (
        <div className="form">
            <h3>Add new transaction</h3>

            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="My Salary"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
            </div>

            <div className="form-group radio">
                <label>Type</label>
                <div className="radio_group">
                    <input
                        type="radio"
                        value="income"
                        name="type"
                        checked={type === 'income'}
                        onChange={(e)=>setType('income')}
                    />
                    <label>Income</label>
                </div>
                <div className="radio_group">
                    <input
                        type="radio"
                        value="expense"
                        name="type"
                        placeholder="Expense"
                        checked= {type === 'expense'}
                        onChange={(e)=>setType('expense')}
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
                    value={amount}
                />
            </div>

            <button className="btn">Add Transaction</button>

            <button className="btn cancel_edit">Cancel Edit</button>
        </div>
    );
};

export default Form;