import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router";
import { getAllProducts } from "../../actions/product";
import Category from "./Category";
import Filter from "./Filter";
import Items from "./Items";

const Product = () => {
  const [category, setCategory] = useState(""); //all
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState([0, 300]);
  const [available, setAvailable] = useState("");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("popularity");
  const history = useHistory();

  // console.log(products);

  const dispatch = useDispatch();
  const location = useLocation();
  const searchTitle = location?.search.replace("?", "");
  //   console.log(searchTitle);

  useEffect(() => {
    const url = `/products?for=Ladies&type=Dresses${
      category && `&category=${category}`
    }${brand && `&brand=${brand}`}${size && `&size=${size}`}${
      color && `&color=${color}`
    }${price && `&price=${price[0]}-${price[1]}`}${
      available && `&available=${available}`
    }${page && `&page=${page}`}${sort && `&sort=${sort}`} `;

    history.push(url);
    dispatch(
      getAllProducts(category, size, color, brand, price, available, page, sort)
    );
  }, [
    dispatch,
    history,
    category,
    size,
    color,
    brand,
    price,
    available,
    page,
    sort,
  ]);

  return (
    <div className="">
      <h2 className=" pb-8 text-center Montserrat-m font-normal text-[#202124]">
        {/* {searchTitle} */}
        Ladies / Dresses
      </h2>
      <div className="grid grid-cols-6 gap-4">
        <div className="flex flex-col space-y-11">
          <Category category={category} setCategory={setCategory} />
          <hr className="text-[#979797] w-1/2" />
          <Filter
            setColor={setColor}
            setBrand={setBrand}
            setSize={setSize}
            setPrice={setPrice}
            setAvailable={setAvailable}
            price={price}
          />
        </div>
        <div className="col-span-5">
          <Items setSort={setSort} page={page} setPage={setPage} />
        </div>
      </div>
    </div>
  );
};

export default Product;
