import React, { useState, useEffect } from 'react';
import { getWallet } from '../services/walletService';

const WalletList = () => {
    const [walletId, setWalletId] = useState('');
    const [wallet, setWallet] = useState(null);

    const handleWalletIdChange = (e) => {
        setWalletId(e.target.value);
    };

    const fetchWallet = async () => {
        try {
            const data = await getWallet(walletId);
            setWallet(data);
        } catch (error) {
            console.error('Error fetching wallet:', error);
        }
    };

    return (
        <div>
            <h2>View Wallet</h2>
            <input
                type="text"
                value={walletId}
                onChange={handleWalletIdChange}
                placeholder="Enter Wallet ID"
            />
            <button onClick={fetchWallet}>Get Wallet</button>

            {wallet && (
                <div>
                    <h3>{wallet.walletName}</h3>
                    <p>Balance: ${wallet.balance}</p>
                </div>
            )}
        </div>
    );
};

export default WalletList;
