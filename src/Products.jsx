import { Card } from "./card";
import { useFilter } from "./Context.jsx/filterContext";
import { SortFunc } from "./utilities/sortFunc";
import { CategoryFilterFunc } from "./utilities/categories";
import { brandFilterFunc } from "./utilities/brand";
import { sizeFilterFunc } from "./utilities/size";

const Products = () => {
  const { filterState } = useFilter();
  const { sortBy, Product, category, brand, size } = filterState;

  const sortedData = SortFunc(Product, sortBy);
  const categoriesData = CategoryFilterFunc(sortedData, category);
  const brandData = brandFilterFunc(categoriesData, brand);
  const sizeData = sizeFilterFunc(brandData, size);

  return (
    <div className="card_outer_container">
      {sizeData?.map(
        ({
          _id,
          image,
          brand,
          price,
          Discounted_value,
          size,
          categoryName
        }) => {
          return (
            <Card
              _id={_id}
              image={image}
              brand={brand}
              price={price}
              Discounted_value={Discounted_value}
              size={size}
              categoryName={categoryName}
            />
          );
        }
      )}
    </div>
  );
};
export { Products };
