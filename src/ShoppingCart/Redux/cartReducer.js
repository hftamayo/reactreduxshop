const initialState = {
  cart: [],
};

export const getTotal = (cart) => {
  return cart.reduce((amount, item) => parseInt(item.price) + amount, 0);
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "Add_Item_To_Cart":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "Remote_Item_From_Cart":
      return {};
    default:
      return state;
  }
}

export default cartReducer;
