import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { setProducts } from "../state/slices/productSlice";
import { useSelector, useDispatch } from "react-redux";
const Controls = ({ data, isLoading }) => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  // const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  data?.products.forEach((product) => {
    let categoryExist = category.find((cate) => cate === product.category);
    if (!categoryExist) {
      category.push(product.category);
    }
  });

  const handleSelectCategory = (e) => {
    let { value, checked } = e.target;
    setSelectedCategory((prevCategory) => {
      if (checked) {
        return [...prevCategory, value];
      } else {
        return prevCategory.filter((cat) => cat !== value);
      }
    });
  };

  const filterByCategory = () => {
    const filteredProducts = data?.products.filter((product) => {
      return selectedCategory.some((cate) => product.category === cate);
    });
    dispatch(setProducts(filteredProducts));
  };

  useEffect(() => {
    filterByCategory();
  }, [selectedCategory]);

  return (
    <>
      <div className="controls col-span-2 sticky max-h-screen top-0">
        <div className="categories flex flex-col gap-2">
          <h1 className="text-xl font-bold">Category:</h1>
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="category flex flex-col gap-2 mt-2">
              {category.map((category) => (
                <div className="input-group flex gap-2" key={category}>
                  <input
                    type="checkbox"
                    id={category}
                    value={category}
                    onChange={(e) => handleSelectCategory(e)}
                  />
                  <label
                    htmlFor={category}
                    className="text-gray-600 capitalize"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Controls;
