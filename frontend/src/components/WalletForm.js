import React, { useState } from 'react';
import { createWallet } from '../services/walletService';

const WalletForm = () => {
    const [walletName, setWalletName] = useState('');
    const [balance, setBalance] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const walletData = {
            walletName,
            balance: parseFloat(balance),
        };

        try {
            const data = await createWallet(walletData);
            console.log('Wallet created:', data);
            alert('Wallet created successfully!');
            setWalletName('');
            setBalance('');
        } catch (error) {
            alert('Error creating wallet!');
        }
    };

    return (
        <div>
            <h2>Create Wallet</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={walletName}
                    onChange={(e) => setWalletName(e.target.value)}
                    placeholder="Wallet Name"
                />
                <input
                    type="number"
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                    placeholder="Initial Balance"
                />
                <button type="submit">Create Wallet</button>
            </form>
        </div>
    );
};

export default WalletForm;
