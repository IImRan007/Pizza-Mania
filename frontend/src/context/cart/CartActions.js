import axios from "axios";

const API_URL = "/api/cart/";

// Add item to cart
export const addItemToCart = async (data, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(API_URL, data, config);

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get cart items
export const getCartItems = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(API_URL, config);

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete cart item
export const deleteCartItem = async (itemId, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.delete(API_URL + itemId, config);

    return response.data;
  } catch (error) {
    throw error;
  }
};
