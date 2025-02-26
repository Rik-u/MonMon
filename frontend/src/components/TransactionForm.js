import React, { useState } from 'react';
import { addTransaction } from '../services/walletService';

const TransactionForm = ({ walletId }) => {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('debit');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const transactionData = {
            amount: parseFloat(amount),
            type,
            description,
        };

        try {
            const data = await addTransaction(walletId, transactionData);
            console.log('Transaction added:', data);
            alert('Transaction added successfully!');
            setAmount('');
            setDescription('');
        } catch (error) {
            alert('Error adding transaction!');
        }
    };

    return (
        <div>
            <h2>Add Transaction</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                />
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="debit">Debit</option>
                    <option value="credit">Credit</option>
                </select>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                />
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    );
};

export default TransactionForm;
