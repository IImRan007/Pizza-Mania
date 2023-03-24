const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        products: null,
        product: action.payload,
        error: false,
        success: true,
        loading: false,
        message: "Item Added Successfully",
      };
    case "GET_ITEMS":
      return {
        ...state,
        products: action.payload,
        product: null,
        error: false,
        success: true,
        loading: false,
        message: "Items Fetched Successfully",
      };
    case "DELETE_ITEM":
      return {
        ...state,
        products: null,
        product: action.payload,
        error: false,
        success: true,
        loading: false,
        message: "Item Deleted Successfully",
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

export default CartReducer;
