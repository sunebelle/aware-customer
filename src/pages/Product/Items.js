import React from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import Pagination from "../../components/Pagination/Pagination";
import CardItem from "./CardItem";
// import { products } from "./dummyData";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Items = ({ setSort, page, setPage, category }) => {
  const { products } = useSelector((state) => state.product);
  const { isLoading } = useSelector((state) => state.ui);

  // console.log(products);

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <Dropdown setSort={setSort} />
        {products?.length === 20 && (
          <Pagination page={page} setPage={setPage} />
        )}

        {/* <Pagination page={page} setPage={setPage} /> */}
      </div>

      {isLoading ? (
        <div className="flex justify-center py-10 mt-8 items-center">
          <Loader />
        </div>
      ) : products?.length > 0 ? (
        <>
          {/* Many items display here */}
          {/* <div className="flex flex-row flex-wrap justify-start space-y-4 first:space-y-0 mt-4 w-full"> */}
          {/* <div className="grid grid-flow-col auto-cols-fr gap-2 mt-3 w-full"> */}
          <div className="grid-container--fill mt-3 w-full">
            {products?.map((product) => (
              <Link key={product._id} to={`/product/${product._id}`}>
                <CardItem product={product} category={category} />
              </Link>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            {/* <Pagination page={page} setPage={setPage} /> */}
            {products?.length === 20 && (
              <Pagination page={page} setPage={setPage} />
            )}
          </div>
        </>
      ) : (
        <div className="flex justify-center py-10 mt-8">
          <p className="Montserrat-m font-normal text-[#b7b7b7]">
            No result found
          </p>
        </div>
      )}
    </div>
  );
};

export default Items;
