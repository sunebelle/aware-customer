import React, { useState } from "react";

const Category = () => {
  const [clickItem, setClickItem] = useState({ category: "All dresses" });
  const listCategories = [
    { category: "All dresses" },
    { category: "Rompers / Jumpsuits" },
    { category: "Casual dresses" },
    { category: "Going out dresses" },
    { category: "Party / Ocassion dresses" },
    { category: "Mini dresses" },
    { category: "Maxi / Midi dresses" },
    { category: "Sets" },
  ];
  //   #ff6900
  return (
    <div className="mt-2">
      <h1 className="Montserrat-b mb-6 text-[#202124]">Category</h1>
      <ul>
        {listCategories.map((item, i) => {
          const active = clickItem.category === item.category;
          return (
            <div key={i}>
              <li
                onClick={() => setClickItem(item)}
                className={`${
                  active ? "text-[#ff6900]" : "text-[#4d4d4d]"
                } Montserrat-m font-normal  py-2`}
              >
                {item.category}
              </li>
              <hr
                className={`${
                  active ? "opacity-100" : "opacity-0"
                } text-[#979797] w-5`}
              />
              {/* border-b border-[#979797] w-4 */}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
