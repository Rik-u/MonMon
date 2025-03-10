import React, { useState } from 'react';
import accountService from '../services/accountService';

const CreateAccountForm = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await accountService.createAccount(name);
            setMessage(response.message);
            setName('');
        } catch (error) {
            setMessage('Error creating account');
        }
    };

    return (
        <div>
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Account Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Account</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CreateAccountForm;
