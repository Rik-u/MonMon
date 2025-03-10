import axios from 'axios';

const API_URL = 'http://localhost:3001/api/accounts';

const createAccount = async (name) => {
    try {
        const response = await axios.post(API_URL, { name });
        return response.data; //insertId
    } catch (error) {
        console.error("Error creating account", error);
        throw error;
    }
};

const getAllAccounts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; //Json
    } catch (error) {
        console.error("Error retrieving accounts", error);
        throw error;
    }
};

const updateAccount = async (id, name) => {
    try {
        const response = await axios.put('${API_URL}/${id}', { name });
        return response.data; //affectedRows
    } catch (error) {
        console.error("Error updating accounts", error);
        throw error;
    }
};

const deleteAccount = async (id) => {
    try {
        const response = await axios.delete('${API_URL}/${id}');
        return response.data; //affectedRows
    } catch (error) {
        console.error("Error deleting accounts", error);
        throw error;
    } 
};

export default {
    createAccount,
    getAllAccounts,
    updateAccount,
    deleteAccount
};


