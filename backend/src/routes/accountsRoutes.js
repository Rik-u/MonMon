const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountsControllers');

router.post('/', accountController.createAccount);
router.get('/', accountController.getAllAccounts);
router.put('/:id', accountController.updateAccount);
router.delete('/:id', accountController.deleteAccount);

module.exports = router;