import React from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import Pagination from "../../components/Pagination/Pagination";
import CardItem from "./CardItem";
// import { products } from "./dummyData";
import { useSelector } from "react-redux";

const Items = ({ setSort, page, setPage }) => {
  const {
    products: { data },
  } = useSelector((state) => state.product);

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <Dropdown setSort={setSort} />
        {/* {data?.length > 0 && <Pagination page={page} setPage={setPage} />} */}

        <Pagination page={page} setPage={setPage} />
      </div>

      {data?.length > 0 ? (
        <>
          {/* Many items display here */}
          {/* <div className="flex flex-row flex-wrap justify-start space-y-4 first:space-y-0 mt-4 w-full"> */}
          <div className="grid grid-cols-5 place-content-stretch gap-2 mt-3 w-full">
            {data?.map((product) => (
              <CardItem key={product._id} product={product} />
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <Pagination page={page} setPage={setPage} />
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
