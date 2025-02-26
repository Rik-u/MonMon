import React from 'react';
import WalletForm from './components/WalletForm';
import WalletList from './components/WalletList';
import TransactionForm from './components/TransactionForm';

function App() {
  return (
    <div>
      <h1>Finance Tracker</h1>
      <WalletForm />
      <WalletList />
      {/* Replace with actual walletId when available */}
      <TransactionForm walletId="60b5f37d18a4c82d2f0a7bfa" />
    </div>
  );
}

export default App;
