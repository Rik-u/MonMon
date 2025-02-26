const express = require("express");
const { createWallet, addTransaction, getWallet } = require("../controllers/walletController");

const router = express.Router();

// Define routes
router.post("/create-wallet", createWallet);
router.post("/add-transaction", addTransaction);
router.get("/get-wallet/:walletId", getWallet);

module.exports = router;
