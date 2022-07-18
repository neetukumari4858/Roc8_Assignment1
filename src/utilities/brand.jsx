const brandFilterFunc = (filterState, brand) => {
  if (Object.values(brand).every((value) => value === false)) {
    return filterState;
  }
  return filterState.filter((Product) => brand[Product.brand]);
};
export { brandFilterFunc };
