/* eslint-disable */
import { colors } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { getAllProducts, getAllSubCategories } from "../../actions/product";
import Category from "./Category";
import Filter from "./Filter";
import Items from "./Items";

const Product = () => {
  const [categoryId, setCategoryId] = useState("");
  // const [title, setTitle] = useState("");
  // const [pathname, setPathname] = useState("");
  const [subCategoryName, setSubCategoryName] = useState(""); //all
  const [subCategoryId, setSubCategoryId] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState(""); //Zara
  const [price, setPrice] = useState(""); //[0, 300]
  const [available, setAvailable] = useState(""); //In-store
  const [page, setPage] = useState(""); //1
  const [sort, setSort] = useState(""); //popularity
  const { categories, subCategories } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  // const {
  //   categoryLocation: { categoryId, pathname, title },
  // } = useSelector((state) => state.product);

  const pathname = location?.pathname;
  const search = location?.search;
  const titleURL = pathname.replace("/products", "");
  const titleString = titleURL.replace("/", "");
  const titleArray = titleString.split("/");
  const title = titleArray.join(" / ");
  const category = categories.find((item) => item.name === titleArray[0]); //Level 1

  useEffect(() => {
    if (search) {
      const searchURL = search.replace("?", "");
      const searchArray = searchURL.split("&");
      searchArray.forEach((query) => {
        const strLength = query.length;
        const index = query.indexOf("=");
        const searchKey = query.substr(0, index);
        const searchValue = query.substr(index + 1, strLength);
        // console.log(searchKey, searchValue);
        if (searchKey && searchValue) {
          if (searchKey === "category") {
            setSubCategoryName(searchValue);
            const subCategory = subCategories?.find(
              (item) => item.name === searchValue
            );
            if (subCategory) {
              setSubCategoryId(subCategory._id);
            }
          } else if (searchKey === "brand") {
            setBrand(searchValue);
          } else if (searchKey === "size") {
            setSize(searchValue);
          } else if (searchKey === "color") {
            setColor(searchValue);
          } else if (searchKey === "price") {
            setPrice(searchValue);
          } else if (searchKey === "sort") {
            setSort(searchValue);
          } else if (searchKey === "page") {
            setPage(searchKey);
          } else if (searchKey === "available") {
            setAvailable(searchKey);
          }
          // }
        } else {
          setSubCategoryName("");
          setSubCategoryId("");
          setSize("");
          setColor("");
          setBrand("");
          setPrice("");
          setAvailable("");
          setSort("");
          setPage("");
        }
      });
    }
  }, []);

  useEffect(() => {
    if (category) {
      const subCategory = category?.categories.find(
        (item) => item.name === titleArray[1]
      );
      setCategoryId(subCategory._id);
      dispatch(getAllSubCategories(subCategory._id));
    }
  }, [dispatch, category]);

  console.log(categoryId);

  useEffect(() => {
    const url = `${pathname}?${
      subCategoryName && `category=${subCategoryName}&`
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
    subCategoryName,
    subCategoryId,
    categoryId,
    history,
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
        {`${title} ${subCategoryName && `/ ${subCategoryName}`}`}
      </h2>
      <div className="grid grid-cols-6 gap-4">
        <div className="flex flex-col space-y-11">
          <Category
            setSubCategoryName={setSubCategoryName}
            subCategoryName={subCategoryName}
            setSubCategoryId={setSubCategoryId}
          />
          <hr className="text-[#979797] w-1/2" />
          <Filter
            setColor={setColor}
            color={color}
            setBrand={setBrand}
            brand={brand}
            size={size}
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
            subCategoryName={subCategoryName}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
