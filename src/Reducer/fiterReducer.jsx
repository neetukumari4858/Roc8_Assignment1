const filterReducer = (filterState, action) => {
  switch (action.type) {
    case "HIGH_TO_LOW":
      return {
        ...filterState,
        sortBy: action.type
      };
    case "LOW_TO_HIGH":
      return { ...filterState, sortBy: action.type };

    case "CATEGORY":
      return {
        ...filterState,
        category: {
          ...filterState.category,
          [action.payload]: !filterState.category[action.payload]
        }
      };
    case "BRAND":
      return {
        ...filterState,
        brand: {
          ...filterState.brand,
          [action.payload]: !filterState.brand[action.payload]
        }
      };
    case "SIZE":
      return {
        ...filterState,
        size: {
          ...filterState.size,
          [action.payload]: !filterState.brand[action.payload]
        }
      };
    case "CLEAR_FILTER":
      return {
        sortBy: "",
        category: { Men: false, Woman: false },
        brand: { Adidas: false, Nike: false, Blackberrys: false },
        size: { S: false, M: false, XL: false, L: false }
      };
    default:
      return filterState;
  }
};
export { filterReducer };
