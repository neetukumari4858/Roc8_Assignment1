import { useFilter } from "./Context.jsx/filterContext";
const Sidebar = () => {
  const { filterState, dispatchFilter } = useFilter();
  const { sortBy, category, brand, size } = filterState;
  return (
    <div className="sidebar_container">
      <button
        className="clear_btn"
        onClick={() => dispatchFilter({ type: "CLEAR_FILTER" })}
      >
        CLEAR ALL
      </button>
      <ul>
        <fieldset>
          <legend>Sort Price:</legend>

          <li>
            <input
              type="radio"
              name="radio"
              id="Low to High"
              checked={sortBy === "LOW_TO_HIGH"}
              onChange={() => dispatchFilter({ type: "LOW_TO_HIGH" })}
            />
            <label htmlFor="Low to High"> Low to High</label>
          </li>
          <li>
            <input
              type="radio"
              name="radio"
              id="High to Low"
              checked={sortBy === "HIGH_TO_LOW"}
              onChange={() => dispatchFilter({ type: "HIGH_TO_LOW" })}
            />
            <lebel htmlFor="High to Low">High to Low</lebel>
          </li>
        </fieldset>
        <fieldset>
          <legend>Ideal:</legend>

          <li>
            <input
              type="checkbox"
              id="Men"
              checked={category["Men"]}
              onChange={() =>
                dispatchFilter({ type: "CATEGORY", payload: "Men" })
              }
            />
            <lebel htmlFor="Men"> Men</lebel>
          </li>
          <li>
            <input
              type="checkbox"
              checked={category["Women"]}
              id="Women"
              onChange={() =>
                dispatchFilter({ type: "CATEGORY", payload: "Women" })
              }
            />
            <lebel htmlFor="Women"> Women</lebel>
          </li>
        </fieldset>
        <fieldset>
          <legend>Brand:</legend>

          <li>
            <input
              type="checkbox"
              checked={brand["Adidas"]}
              id="Adidas"
              onChange={() =>
                dispatchFilter({ type: "BRAND", payload: "Adidas" })
              }
            />
            <lebel htmlFor="Adidas"> Adidas</lebel>
          </li>
          <li>
            <input
              type="checkbox"
              checked={brand["Nike"]}
              id="Nike"
              onChange={() =>
                dispatchFilter({ type: "BRAND", payload: "Nike" })
              }
            />
            <lebel htmlFor="Nike"> Nike</lebel>
          </li>
          <li>
            <input
              type="checkbox"
              id="Blackberrys"
              checked={brand["Blackberrys"]}
              onChange={() =>
                dispatchFilter({ type: "BRAND", payload: "Blackberrys" })
              }
            />
            <lebel htmlFor="Blackberrys"> Blackberrys</lebel>
          </li>
        </fieldset>
        <fieldset>
          <legend>Size:</legend>

          <li>
            <input
              type="checkbox"
              checked={size["S"]}
              id="S"
              onChange={() => dispatchFilter({ type: "SIZE", payload: "S" })}
            />
            <lebel htmlFor="S">S</lebel>
          </li>
          <li>
            <input
              type="checkbox"
              checked={size["M"]}
              id="M"
              onChange={() => dispatchFilter({ type: "SIZE", payload: "M" })}
            />
            <lebel htmlFor="M">M</lebel>
          </li>
          <li>
            <input
              type="checkbox"
              checked={size["L"]}
              id="L"
              onChange={() => dispatchFilter({ type: "SIZE", payload: "L" })}
            />
            <lebel htmlFor="L">XL</lebel>
          </li>
          <li>
            <input
              type="checkbox"
              checked={size["XL"]}
              id="XL"
              onChange={() => dispatchFilter({ type: "SIZE", payload: "XL" })}
            />
            <lebel htmlFor="XL">XL</lebel>
          </li>
        </fieldset>
      </ul>
    </div>
  );
};
export { Sidebar };
// Size(S, M, L, XL)
