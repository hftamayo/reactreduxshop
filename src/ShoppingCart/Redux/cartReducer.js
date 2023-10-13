const initialState = {
  cart: [],
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "Add_Item_To_Cart":
        return ()
    case "Remote_Item_From_Cart":
        return ()
    default:
        return state
  }
}

export default cartReducer;
