import ItemService from "../services/ItemService";

export const getItems = (page, itemType) => (dispatch) => {
  ItemService.getAll(page, itemType)
    .then((response) =>
      dispatch({ type: "GET_ITEMS_SUCCES", payload: response.data })
    )
    .catch((e) => dispatch({ type: "GET_ITEMS_ERROR", payload: e }));
};

export const addItemBasket = (item) => {
  return { type: "ADD_ITEM_BASKET", payload: item };
};

export const deleteItemBasket = (item) => {
  return { type: "DELETE_ITEM_BASKET", payload: item };
};
