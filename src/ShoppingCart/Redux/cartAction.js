export function addToCart(id, title, price, rating, image) {
  return {
    type: "Add_Item_To_Cart",
    item: {
      id: id,
      title: title,
      price: price,
      rating: rating,
      image: image,
    },
  };
}

export function removeFromCart(id) {
  return {
    type: "Remove_Item_From_Cart",
    id: id,
  };
}
