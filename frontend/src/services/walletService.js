import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const createWallet = async (walletData) => {
    try {
        const response = await axios.post(`${API_URL}/wallet/create-wallet`, walletData);
        return response.data;
    } catch (error) {
        console.error("Error creating wallet:", error);
        throw error;
    }
};

const getWallet = async (walletId) => {
    try {
        const response = await axios.get(`${API_URL}/wallet/${walletId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching wallet:", error);
        throw error;
    }
};

const addTransaction = async (walletId, transactionData) => {
    try {
        const response = await axios.post(`${API_URL}/wallet/${walletId}/transaction`, transactionData);
        return response.data;
    } catch (error) {
        console.error("Error adding transaction:", error);
        throw error;
    }
};

export { createWallet, getWallet, addTransaction };
