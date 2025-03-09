const db = require('../db');

const AccountModel = {
    create: (name) => {
        return new Promise((resolve, reject) => {
            const sqlQuery = 'INSERT INTO accounts (name) VALUES (?)';
            db.query(sqlQuery, [name], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result.insertId);
                }
            });
        });
    },

    getAll: () => {
        return new Promise((resolve, reject) => {
            const sqlQuery = 'SELECT * FROM accounts';
            db.query(sqlQuery, (err, result) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            });
        });
    },

    update: (id, name) => {
        return new Promise((resolve, reject) => {
            const sqlQuery = 'UPDATE accounts SET name = ? WHERE id = ?';
            db.query(sqlQuery,  [name, id], (err, result) => {
                if (err)
                    reject(err);
                else
                    resolve(result.affectedRows);
            });
        });
    },

    delete: (id) => {
        return new Promise((resolve, reject) => {
            const sqlQuery = 'DELETE FROM accounts WHERE id = ?';
            db.query(sqlQuery, [id], (err, result) => {
                if (err)
                    reject(err);
                else
                    resolve(result.affectedRows);
            });
        });
    }
};

module.exports = AccountModel;