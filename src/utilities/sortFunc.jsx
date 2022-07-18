const SortFunc = (Product, sortBy) => {
  if (sortBy === "HIGH_TO_LOW") {
    return [...Product].sort((a, b) => b.price - a.price);
  } else if (sortBy === "LOW_TO_HIGH") {
    return [...Product].sort((a, b) => a.price - b.price);
  } else {
    return Product;
  }
};
export { SortFunc };
