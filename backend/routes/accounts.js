const express = require('express');
const router = express.Router();
const db = require('../db');

//Create new account
router.post('/', (req, res) => {
    const { name } = req.body;

    const sqlQuery = 'INSERT INTO accounts (name) VALUES (?)';

    db.query(sqlQuery, [name] , (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error creating account', error: err });
        }
        res.status(200).json({ message: 'Account created successfully', id: result.insertId });
    });
});

//Retrieve all accounts
router.get('/', (req, res) => {
    const sqlQuery = 'SELECT * FROM accounts';

    db.query(sqlQuery, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error retrieving accounts', error: err });
        }
        res.status(200).json(result);
    });
});

//Update account
router.put('/:id', (req, res) => {
    const { name } = req.body;
    const accountId = req.params.id;

    const sqlQuery = 'UPDATE accounts SET name = ? WHERE id = ?';

    db.query(sqlQuery, [name, accountId], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating account', error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Account not found'});
        }
        res.status(200).json({ message: 'Account updated successfully' });
    });
});

//Delete account
router.delete('/:id', (req, res) => {
    const accountId = req.params.id;

    const sqlQuery = 'DELETE FROM accounts WHERE id = ?';

    db.query(sqlQuery, [accountId], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting account', error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Account not found' });
        }
        res.status(200).json({ message: 'Account deleted successfully' });
    });
});

module.exports = router;