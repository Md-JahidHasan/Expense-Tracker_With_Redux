import React from 'react';
import editImg from '../../assets/images/edit.svg';
import deleteImg from '../../assets/images/delete.svg';

const Transaction = ({transaction}) => {
    return (
        <li className={`transaction ${transaction.type}`}>
            <p>{transaction.name}</p>
            <div className="right">
                <p>৳ {transaction?.amount}</p>
                <button className="link">
                    <img
                        className="icon"
                        src={editImg}
                        alt=''
                    />
                </button>
                <button className="link">
                    <img
                        className="icon"
                        src={deleteImg}
                        alt=''
                    />
                </button>
            </div>
        </li>
    );
};

export default Transaction;