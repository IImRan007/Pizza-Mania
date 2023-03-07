import axios from "axios";

const API_URL = "/api/products/";

// Create blog
export const createProduct = async (productData, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(API_URL, productData, config);

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get products
export const getProducts = async (token) => {
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

// Get all products
export const getAllProducts = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(API_URL + "all", config);

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get user product
export const getProduct = async (productId, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(API_URL + productId, config);

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update product
export const updateProduct = async (productId, productData, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.put(API_URL + productId, productData, config);

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete user product
export const deleteProduct = async (productId, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.delete(API_URL + productId, config);

    return response.data;
  } catch (error) {
    throw error;
  }
};
