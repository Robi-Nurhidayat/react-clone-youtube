import React from "react";
import { categories } from "../../utils/utility";

const Sidebar = ({ selectcategory, setSelectCategory, setVideos }) => {
  return (
    <>
      {categories.map((category) => {
        return (
          <button
            onClick={() => {
              setSelectCategory(category.name);
              setVideos([]);
            }}
            key={category.name}
            className="flex items-center flex-row p-2 gap-0.5 sm:justify-start sm:px-4 "
            style={{
              backgroundColor:
                selectcategory === category.name ? "red" : "white",
              color: selectcategory === category.name ? "white" : "black",
            }}
          >
            <span>{category.name}</span>
            <span>{category.icon}</span>
          </button>
        );
      })}
    </>
  );
};

export default Sidebar;
