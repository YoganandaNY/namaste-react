import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { TIME_URL, CURRENCY_URL, LOGO_URL } from "../utils/constant";
import { Switch } from "@headlessui/react";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const [enabled, setEnabled] = useState(false);

  // Custom Hooks
  const resInfo = useRestaurantMenu(resId);

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

  console.log(itemCards);

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

        <h2 className="m-5 font-bold">Menu</h2>
        <div className="flex items-center m-5">
          <span className="pr-3 text-sm font-medium">Veg Only</span>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? "bg-green-800" : "bg-gray-400"}
          relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span
              aria-hidden="true"
              className={`${enabled ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-5 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </div>
        <div className="mx-5 border-b"></div>
        <div className="my-4 px-5 ">
          <div className="">
            <p className="font-bold">Recommended(18)</p>
            <ul className="">
              {itemCards.map((item) => (
                <li key={item.card.info.id} className="">
                  <div className="flex justify-between items-center">
                    <div className="">
                      <p className="font-medium">{item.card.info.name}</p>
                      <p className="flex">
                        <span>
                          <img className="w-8" src={CURRENCY_URL} />
                        </span>
                        {item.card.info.price / 100 ||
                          item.card.info.defaultPrice / 100}
                      </p>
                    </div>
                    <div>
                      <span className="">
                        <img
                          className="w-[160px] m-4 p-4"
                          src={LOGO_URL + item.card.info.imageId}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="border-b"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <ul className="mx-5">
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
      </div>
    </>
  );
};

export default RestaurantMenu;
