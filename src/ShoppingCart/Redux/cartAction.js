export function addToCart() {
  return {
    type: "Add_Item_To_Cart",
  };
}

export function removeFromCart() {
    return {
      type: "Remove_Item_From_Cart",
    };
  }