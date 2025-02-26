const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
    balance: { type: Number, default: 0 },
    transactions: [
        {
            amount: Number,
            description: String,
            date: { type: Date, default: Date.now },
        },
    ],
});

const Wallet = mongoose.model("Wallet", walletSchema);

module.exports = Wallet;
