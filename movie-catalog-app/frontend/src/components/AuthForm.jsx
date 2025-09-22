import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser, loginUser } from '../services/auth';

const AuthForm = ({ isLogin }) => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                await loginUser(formData);
            } else {
                await registerUser(formData);
            }
            history.push('/'); // Redirect to home after successful auth
        } catch (err) {
            setError(err.response.data.message || 'An error occurred');
        }
    };

    return (
        <div>
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            </form>
        </div>
    );
};

export default AuthForm;