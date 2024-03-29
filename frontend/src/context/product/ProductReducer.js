const ProductReducer = (state, action) => {
  console.log("state", state);
  switch (action.type) {
    case "CREATE_PRODUCT":
      return {
        ...state,
        products: null,
        product: action.payload,
        error: false,
        success: true,
        loading: false,
        message: "Product Created Successfully",
      };
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        product: null,
        error: false,
        success: true,
        loading: false,
        message: "Products Fetched Successfully",
      };
    case "GET_PRODUCT":
      return {
        ...state,
        products: null,
        product: action.payload,
        error: false,
        success: true,
        loading: false,
        message: "Get Single Product",
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: null,
        product: action.payload,
        error: false,
        success: true,
        loading: false,
        message: "Product Updated Successfully",
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: null,
        product: action.payload,
        error: false,
        success: true,
        loading: false,
        message: "Product Deleted Successfully",
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default ProductReducer;
