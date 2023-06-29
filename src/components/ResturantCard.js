import { LOGO_URL } from "../utils/constant";

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
  return (
    <div className="res-card" style={{ backgroundColor: "#fff" }}>
      <div>
        <img className="res-logo" src={LOGO_URL + cloudinaryImageId} />
      </div>
      <div style={{ marginTop: "14px" }}>
        <div className="RestaurantName">{name}</div>
        <div className="RestaurantCuisine">{cuisines.join(", ")}</div>
      </div>
      <div className="RestaurantRating">
        <div className="RestaurantIcon">
          <span className="icon-star">☆</span>
          <span>{avgRating}</span>
        </div>
        <div>•</div>
        <div>{deliveryTime} MINS</div>
        <div>•</div>
        <div className="RestaurantCost">₹{costForTwo / 100} FOR TWO</div>
      </div>

      {/* <h3>{name}</h3>
           <p>{cuisines.join(", ")}</p>
           <p>{avgRating} Stars</p>
           <p>₹{costForTwo /100} FOR TWO</p>
           <p>{deliveryTime} MINS</p> */}
    </div>
  );
};

export default ResturantCard;
