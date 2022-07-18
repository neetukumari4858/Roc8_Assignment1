const CategoryFilterFunc = (filterState, categoryName) => {
  if (Object.values(categoryName).every((value) => value === false)) {
    return filterState;
  }
  return filterState.filter((Product) => categoryName[Product.categoryName]);
};
export { CategoryFilterFunc };
