import Rating from "./Rating";
import { useEffect, useState } from "react";
const Product = ({ product }) => {
  const [rating, setRating] = useState([]);
  let ratingNums = [];

  for (let i = 0; i < Math.round(parseFloat(product.rating)); i++) {
    ratingNums.push(i);
  }
  useEffect(() => {
    setRating(ratingNums);
  }, []);

  return (
    <>
      <div className="product bg-gray-100 rounded-md">
        <div className="header relative">
          <img src={product.thumbnail} alt="Thumbnail" />
          <span className="absolute top-2 left-2 bg-yellow-500 shadow-sm p-1 rounded-sm text-gray-100 text-[12px]">{`${product.discountPercentage}% OFF`}</span>
        </div>
        <div className="body flex flex-col gap-1 p-2">
          <h1 className="text-md font-bold text-gray-700">
            <a href="">{product.title}</a>
          </h1>
          <p className="text-gray-400 truncate">{product.description}</p>
          <div className="price flex justify-between items-center">
            <div className="flex gap-2">
              <span>{`${(
                product.price -
                (product.price * product.discountPercentage) / 100
              ).toFixed(2)}`}</span>
              <span>{product.price}</span>
            </div>
            <div className="rating flex gap-1">
              {rating.map((num) => (
                <Rating key={num} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
