const INITIAL_STATE = {
  items: [],
  basket: [],
  message: "",
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_ITEMS_SUCCES":
      return { ...state, items: action.payload };
    case "GET_ITEMS_ERROR":
      return { ...state, message: action.payload };
    case "ADD_ITEM_BASKET":
      return { ...state, basket: [...state.basket, action.payload] };
    case "DELETE_ITEM_BASKET":
      const index = state.basket.findIndex(
        (obj) => obj.slug == action.payload.slug
      );
      let newBasket = Object.assign([], state.basket); // New Basket
      newBasket.splice(index, 1); // Remove Item By Index
      return { ...state, basket: [...newBasket] }; // New Basket

    default:
      return state;
  }
};
