const db = require('../db');
const AccountModel = require('../models/AccountModel');

//Create new account
exports.createAccount = async (req, res) => {
    try {
        const { name } = req.body;
        const id = await AccountModel.create(name);
        res.status(200).json({ message: 'Account created succesfully', id });
    } catch (error) {
        res.status(500).json({ message: 'Error creating account', error});
    }
};

//Retrieve all accounts
exports.getAllAccounts = async (req, res) => {
    try {
        const accounts = await AccountModel.getAll();
        res.status(200).json(accounts);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving accounts', error });
    }
};

//Update account
exports.updateAccount = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;
        const updatedRows = await AccountModel.update(id, name);
        if (updatedRows === 0) return res.status(404).json({ message: 'Account not found' });
        res.status(200).json({ message: 'Account updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating account', error });
    }
};

//Delete account
exports.deleteAccount = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRows = await AccountModel.delete(id);
        if (deletedRows === 0) return res.status(404).json({ message: 'Account not found' });
        res.status(200).json({ message: 'Account deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting account', error });
    }
};