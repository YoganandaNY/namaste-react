import { useState } from "react";
import ItemLists from "./ItemLists";

const ResturantCategory = ({ data, showItems, setShowItems, dummy }) => {
  const handleClick = () => {
    setShowItems();
  };
  return (
    <div className=" w-full m-3 p-2 bg-white " onClick={handleClick}>
      <div className="font-bold flex justify-between cursor-pointer">
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {/* Uncotrolled Component */}
      {showItems && <ItemLists items={data.itemCards} dummy={dummy} />}
    </div>
  );
};

export default ResturantCategory;
