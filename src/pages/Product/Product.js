import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getAllProducts, getAllSubCategories } from "../../actions/product";
import Category from "./Category";
import Filter from "./Filter";
import Items from "./Items";

const Product = () => {
  const [category, setCategory] = useState(""); //all
  const [subCategoryId, setSubCategoryId] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState(""); //Zara
  const [price, setPrice] = useState(""); //[0, 300]
  const [available, setAvailable] = useState(""); //In-store
  const [page, setPage] = useState(""); //1
  const [sort, setSort] = useState(""); //popularity
  const dispatch = useDispatch();
  const history = useHistory();
  // const location = useLocation();
  // console.log(location?.state.categoryId);
  const {
    categoryLocation: { categoryId, pathname, title },
  } = useSelector((state) => state.product);

  useEffect(() => {
    setCategory("");
    setSubCategoryId("");
    setSize("");
    setColor("");
    setBrand("");
    setPrice("");
    setAvailable("");
    setSort("");
    setPage("");
  }, [pathname]);

  useEffect(() => {
    dispatch(getAllSubCategories(categoryId));
  }, [categoryId, dispatch]);

  useEffect(() => {
    const url = `${pathname}/products?${
      // Object.entries(category).length > 0 && `category=${category.name}&`
      category && `category=${category}&`
    }${brand && `brand=${brand}&`}${size && `size=${size}&`}${
      color && `color=${color}&`
    }${price && `price=${price[0]}-${price[1]}&`}${
      available && `available=${available}&`
    }${page && `page=${page}&`}${sort && `sort=${sort}`} `;

    history.push(url);
    dispatch(
      getAllProducts(
        categoryId,
        subCategoryId,
        size,
        color,
        brand,
        price,
        available,
        page,
        sort
      )
    );
  }, [
    dispatch,
    pathname,
    subCategoryId,
    categoryId,
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
        {`${title} ${category && `/ ${category}`}`}
      </h2>
      <div className="grid grid-cols-6 gap-4">
        <div className="flex flex-col space-y-11">
          <Category
            category={category}
            setCategory={setCategory}
            setSubCategoryId={setSubCategoryId}
          />
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
          <Items
            setSort={setSort}
            page={page}
            setPage={setPage}
            category={category}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
