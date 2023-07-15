import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { TIME_URL, CURRENCY_URL } from "../utils/constant";
import ResturantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  // Custom Hooks
  const resInfo = useRestaurantMenu(resId);

  const dummy = "Dummy Data";

  // useEffect(() => {
  //     fetchMenuData();
  // }, []);

  // const fetchMenuData = async () => {

  //     const data = await fetch( MENU_API + resId);

  //     const json = await data.json();

  //     setResInfo(json.data);

  //     console.log(json);
  // };

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    areaName,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { lastMileTravelString, slaString } =
    resInfo?.cards[0]?.card?.card?.info?.sla;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const Category =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (val) =>
        val?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(Category);

  return (
    <>
      <div className="max-w-3xl mt-5 mx-auto mb-0">
        <div className="flex mx-3 p-3 justify-between items-center">
          <div className="">
            <p className="font-medium">{name}</p>
            <p className="text-[12px]">{cuisines.join(", ")}</p>
            <p className="text-[12px]">
              {areaName} {","} {lastMileTravelString}
            </p>
          </div>
          <div className="p-1 m-1 border border-b-2">
            <p className="pl-5 border-b text-[14px] font-medium text-green-600">
              {avgRating}
            </p>
            <p className="text-xs pb-1">{totalRatingsString}</p>
          </div>
        </div>
        <div className="mx-5 border-b"></div>
        <div className="mx-4 p-2 flex">
          <span className="flex items-center">
            <img src={TIME_URL} className="w-5" />
            <span className="mx-4 font-bold">{slaString}</span>
            <span>
              <img className="w-8" src={CURRENCY_URL} />
            </span>
            <span className="mx-2 font-bold">{costForTwoMessage}</span>
          </span>
        </div>
        <div>
          {/* Categories Accordian */}
          {Category.map((item, index) => (
            // Controlled Component
            <ResturantCategory
              key={item?.card?.card?.title}
              data={item?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowItems={() => setShowIndex(index)}
              dummy={dummy}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
