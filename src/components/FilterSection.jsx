import React from "react";

const FilterSection = () => {
  return (
    <div className=" border-2 border-black w-80 ml-5 mt-28 h-full">
      <h1 className=" text-center text-3xl font-semibold">Filter Products</h1>

      <div className=" flex flex-col gap-6 items-center mt-4">
        <div>
          <input
            type="radio"
            id="descending"
            name="filter"
            value="DESCENDING"
          />
          <label htmlFor="descending">High To Low</label>
        </div>
        <div>
          <input type="radio" id="ascending" name="filter" value="ASCENDING" />
          <label htmlFor="ascending">Low To High</label>
        </div>

        <button className=" border px-2 py-1 bg-orange-500 text-white text-lg font-semibold rounded-md w-max">
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
