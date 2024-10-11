// services/api.js
import axios from 'axios';
import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } from '../constants/productConstants'; // Import your action types

const API_BASE_URL = 'https://localhost:8000'; // Replace with your actual API URL

// Function to get products (example API endpoint)
export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/products`); 

        // Dispatch success action with fetched products data
        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        console.error("Error fetching products:", error);

        // Dispatch fail action with error information
        dispatch({
            type: GET_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};
