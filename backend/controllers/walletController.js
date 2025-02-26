const Wallet = require("../models/Wallet");

// Create a new wallet
const createWallet = async (req, res) => {
    try {
        const wallet = new Wallet();
        await wallet.save();
        res.status(201).json(wallet);
    } catch (error) {
        res.status(500).json({ error: "Failed to create wallet" });
    }
};

// Add a transaction
const addTransaction = async (req, res) => {
    const { walletId, amount, description } = req.body;
    try {
        const wallet = await Wallet.findById(walletId);
        if (!wallet) {
            return res.status(404).json({ error: "Wallet not found" });
        }

        wallet.transactions.push({ amount, description });
        wallet.balance += amount;
        await wallet.save();

        res.status(200).json(wallet);
    } catch (error) {
        res.status(500).json({ error: "Failed to add transaction" });
    }
};

// Get wallet details
const getWallet = async (req, res) => {
    try {
        const wallet = await Wallet.findById(req.params.walletId);
        if (!wallet) {
            return res.status(404).json({ error: "Wallet not found" });
        }
        res.status(200).json(wallet);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch wallet" });
    }
};

module.exports = { createWallet, addTransaction, getWallet };
