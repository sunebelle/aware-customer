import React from "react";
import { useSelector } from "react-redux";

const Category = ({ setCategory, category }) => {
  // const [category, setCategory] = useState("");
  const { categories } = useSelector((state) => state.product);

  // const listCategories = [
  //   { category: "All dresses" },
  //   { category: "Rompers / Jumpsuits" },
  //   { category: "Casual dresses" },
  //   { category: "Going out dresses" },
  //   { category: "Party / Ocassion dresses" },
  //   { category: "Mini dresses" },
  //   { category: "Maxi / Midi dresses" },
  //   { category: "Sets" },
  // ];

  return (
    <div className="mt-2">
      <h1 className="Montserrat-b mb-6 text-[#202124]">Category</h1>
      <ul>
        <div>
          <li
            onClick={() => setCategory("")}
            className={`${
              category === "" ? "text-[#ff6900]" : "text-[#4d4d4d]"
            } Montserrat-m font-normal  py-2 cursor-pointer`}
          >
            All dresses
          </li>
          <hr
            className={`${
              category === "" ? "opacity-100" : "opacity-0"
            } text-[#979797] w-5`}
          />
        </div>

        {categories?.data?.map((item) => {
          const active = category === item.name;
          return (
            <div key={item._id}>
              <li
                onClick={() => setCategory(item.name)}
                className={`${
                  active ? "text-[#ff6900]" : "text-[#4d4d4d]"
                } Montserrat-m font-normal  py-2 cursor-pointer`}
              >
                {item.name}
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
