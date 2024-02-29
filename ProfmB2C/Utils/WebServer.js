// api/index.js

import axios from 'axios';

const BASE_URL = 'https://hvserp.com';

// Set common headers
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['accept'] = 'application/json';

const apiRequest = async ({ method = 'GET', url, headers = {}, data = null }) => {
    try {
        const response = await axios({
            method,
            url: BASE_URL + url,
            headers: {
                ...headers,
                // Add any common headers here
            },
            data,
        });
        return response.data;
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
};

export const get = async (url, headers) => {
    return await apiRequest({ method: 'GET', url, headers });
};

export const post = async (url, data, headers) => {
    return await apiRequest({ method: 'POST', url, headers, data });
};

// Add other HTTP methods as needed (e.g., PUT, DELETE, etc.)

export const getWithToken = async (url, token) => {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    return await get(url, headers);
};

// You can also create similar functions for other HTTP methods with a token in the header
