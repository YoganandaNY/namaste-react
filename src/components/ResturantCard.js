import { LOGO_URL } from "../utils/constant";

const ResturantCard = (props) => {
    const { resData } = props;
   const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.data;
   return(
       <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
           <img className="res-logo" src={LOGO_URL + cloudinaryImageId } />
           <h3>{name}</h3>
           <h3>{cuisines.join(", ")}</h3>
           <h3>{avgRating} Stars</h3>
           <h3>₹{costForTwo /100} FOR TWO</h3>
           <h3>{deliveryTime} MINS</h3>
       </div>
   );
};

export default ResturantCard;