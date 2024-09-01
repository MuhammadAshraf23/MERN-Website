// api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const authenticateSignup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: error.message };
  }
};
