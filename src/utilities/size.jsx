const sizeFilterFunc = (filterState, size) => {
  if (Object.values(size).every((value) => value === false)) {
    return filterState;
  }
  return filterState.filter((Product) => size[Product.size]);
};
export { sizeFilterFunc };
