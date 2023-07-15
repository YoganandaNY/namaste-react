import { useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const ResturantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div
      className="m-4 p-4 w-[270px] hover:border border-inherit"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="py-4">
        <img src={LOGO_URL + cloudinaryImageId} />
      </div>
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-[13px] pb-4">{cuisines.join(", ")}</div>
      </div>
      <div className="flex items-center text-[12px]">
        <div className="m-1 px-1 bg-green-300">
          <span className="icon-star px-1">☆</span>
          <span>{avgRating}</span>
        </div>
        <div className="m-1 px-1">
          •<span className="m-1 px-1">{deliveryTime} MINS</span>
        </div>
        <div>
          •<span className="m-1 px-1">₹{costForTwo / 100} FOR TWO</span>
        </div>
      </div>
      <div className="m-1 px-1 text-[12px] font-bold">
        User : {loggedInUser}
      </div>

      {/* <h3>{name}</h3>
           <p>{cuisines.join(", ")}</p>
           <p>{avgRating} Stars</p>
           <p>₹{costForTwo /100} FOR TWO</p>
           <p>{deliveryTime} MINS</p> */}
    </div>
  );
};

// Higher Order Components

// input - RestaurantCard => RestaurantCarPromoted

export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-black text-white text-xs my-12 p-1 ml-8 rounded">
          PROMOTED
        </label>
        <ResturantCard {...props} />
      </>
    );
  };
};

export default ResturantCard;
