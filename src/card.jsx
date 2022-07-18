const Card = ({
  _id,
  image,
  brand,
  price,
  Discounted_value,
  size,
  categoryName
}) => {
  return (
    <div className="card_container" key={_id}>
      <div>
        <img className="image_size" src={image} alt="T-shirt" />
      </div>
      <p>Brand:{brand}</p>
      <p>Ideal: {categoryName}</p>
      <div>
        {price}Rs. <span>{Discounted_value}Rs./-</span>
      </div>
      <p>Size:{size}</p>
    </div>
  );
};
export { Card };
