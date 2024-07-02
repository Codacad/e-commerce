import Controls from "../components/Controls";
import Product from "../components/Product";
import { useGetProductsQuery } from "../state/apis/productAPi";
import Spinner from "../components/Spinner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../state/slices/productSlice";
const Products = () => {
  const { data, isError, isLoading, isSuccess, error } = useGetProductsQuery();
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProducts(data?.products));
  });
  return (
    <>
      <div className="ecommerce grid grid-cols-12 p-16 gap-4">
        <Controls data={data} isLoading={isLoading} />
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="products col-span-10 grid grid-cols-4 gap-4">
            {products?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
