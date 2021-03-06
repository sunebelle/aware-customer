import React from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import Pagination from "../../components/Pagination/Pagination";
import CardItem from "./CardItem";
// import { products } from "./dummyData";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

const Items = ({ setSort, page, setPage, subCategoryName }) => {
  const { products } = useSelector((state) => state.product);
  const { isLoading } = useSelector((state) => state.ui);

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <Dropdown setSort={setSort} />
        {(products?.length === 20 || page >= 2) && (
          <Pagination setPage={setPage} />
        )}
      </div>

      {isLoading ? (
        <div className="flex justify-center py-10 mt-8 items-center">
          <Loader />
        </div>
      ) : products?.length > 0 ? (
        <>
          {/* Many items display here */}
          <div className="inline-flex flex-wrap gap-5 w-full mt-4">
            {products?.map((product) => (
              <CardItem
                key={product._id}
                product={product}
                category={subCategoryName}
              />
            ))}
          </div>
          <div className="flex justify-end mt-4">
            {(products?.length === 20 || page >= 2) && (
              <Pagination setPage={setPage} />
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
