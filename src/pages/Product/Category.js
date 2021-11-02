import React from "react";
import { useSelector } from "react-redux";

const Category = ({
  subCategoryName,
  setSubCategoryId,
  setSubCategoryName,
}) => {
  const { subCategories } = useSelector((state) => state.product);

  const handleCategory = (id, name) => {
    setSubCategoryName(name);
    setSubCategoryId(id);
  };

  const handleAllCategory = () => {
    setSubCategoryId("");
    setSubCategoryName("");
  };

  return (
    <div className="mt-2">
      <h1 className="Montserrat-b mb-6 text-[#202124]">Category</h1>
      <ul>
        <div>
          <li
            onClick={handleAllCategory}
            className={`${
              subCategoryName === "" ? "text-[#ff6900]" : "text-[#4d4d4d]"
            } Montserrat-m font-normal  py-2 cursor-pointer`}
          >
            All dresses
          </li>
          <hr className=" text-[#979797] w-5" />
          {/* <hr
            className={`${
              category === "" ? "opacity-100" : "opacity-0"
            } text-[#979797] w-5`}
          /> */}
        </div>

        {subCategories?.map((item) => {
          const active = subCategoryName === item.name;
          return (
            <div key={item._id}>
              <li
                onClick={() => handleCategory(item._id, item.name)}
                // onClick={() => setCategory(item.name)}
                className={`${
                  active ? "text-[#ff6900]" : "text-[#4d4d4d]"
                } Montserrat-m font-normal  py-2 cursor-pointer`}
              >
                {item.name}
              </li>

              {/* border-b border-[#979797] w-4 */}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
