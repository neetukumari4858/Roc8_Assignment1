import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "./Reducer/fiterReducer";
const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);
const FilterProvider = (children) => {
  const [filterState, dispatchFilter] = useReducer(filterReducer, {
    sortBy: "",
    category: { Men: false, Woman: false },
    Brand: { Adidas: false, Nike: false, Blackberrys: false },
    size: { S: false, M: false, XL: false, L: false }
  });
  return (
    <FilterContext.Provider value={{ filterState, dispatchFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
export { useFilter, FilterProvider };
