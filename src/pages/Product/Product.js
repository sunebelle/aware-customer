import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getAllProducts } from "../../actions/product";
import Category from "./Category";
import Filter from "./Filter";
import Items from "./Items";

const Product = () => {
  const [category, setCategory] = useState(""); //all
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("Zara");
  const [price, setPrice] = useState([0, 300]);
  const [available, setAvailable] = useState("In-store");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("popularity");
  const dispatch = useDispatch();
  const history = useHistory();
  // const location = useLocation();

  // useEffect(() => {
  //   const searchURL = location?.search?.replace("?", "");
  //   const searchArray = searchURL.split("&");
  //   const search = searchArray.map((query) => {
  //     const strLength = query.length;
  //     const index = query.indexOf("=");
  //     const searchKey = query.substr(0, index);
  //     const searchValue = query.substr(index + 1, strLength);

  //     // console.log(searchKey, searchValue);

  //     switch (searchKey) {
  //       case "brand":
  //         setBrand(searchValue);
  //         break;
  //       case "size":
  //         setSize(searchValue);
  //         break;
  //       case "color":
  //         setColor(searchValue);
  //         break;
  //       case "category":
  //         setCategory(searchValue);
  //         break;
  //       case "available":
  //         setAvailable(searchValue);
  //         break;
  //       case "sort":
  //         setSort(searchValue);
  //         break;
  //       case "page":
  //         setPage(searchValue);
  //         break;
  //       case "price":
  //         setPrice(searchValue);
  //         break;
  //       default:
  //         break;
  //     }

  //     return { searchKey: searchValue };
  //   });
  //   console.log(search);
  // }, [location]);

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
        Ladies / Dresses
      </h2>
      <div className="grid grid-cols-6 gap-4">
        <div className="flex flex-col space-y-11">
          <Category category={category} setCategory={setCategory} />
          <hr className="text-[#979797] w-1/2" />
          <Filter
            setColor={setColor}
            setBrand={setBrand}
            brand={brand}
            setSize={setSize}
            setPrice={setPrice}
            available={available}
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
