import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

// let listOfRestaurents = [
//     {
//         "data": {
//           "id": "667962",
//           "name": "Paris Panini - Gourmet Sandwiches",
//           "cloudinaryImageId": "33101e2fff3a071cbd8b85e73c0d4f45",
//           "cuisines": [ "Pastas", "Salads", "Snacks", "Desserts","Fast Food","French" ],
//           "costForTwo": 50000,
//           "deliveryTime": 22,
//           "avgRating": "4.5"
//       },
//     },
//     {
//         "data": {
//           "id": "667963",
//           "name": "Halli Donne Biryani",
//           "cloudinaryImageId": "gsc5bv2hehh1mzqxvwb7",
//           "cuisines": [ "South Indian" ],
//           "costForTwo": 20000,
//           "deliveryTime": 36,
//           "avgRating": "3.9"
//       },
//     },
//     {
//         "data": {
//           "id": "667964",
//           "name": "Edesia by Freshmenu",
//           "cloudinaryImageId": "d2e143528aae033ea59d6d0572375d31",
//           "cuisines": [  "Desserts", "Bakery", "Fast Food" ],
//           "costForTwo": 15000,
//           "deliveryTime": 31,
//           "avgRating": "4.2"
//       },
//     }
// ];

const Body = () => {
    // Local State Variable - Super powerful variable
    const [listOfRestaurents, setlistOfRestaurents] = useState(resList);
    
    // const arr = useState(resList);
    // const [listOfRestaurents, setlistOfRestaurents] = arr;
    // const listOfRestaurents = arr[0];
    // const setlistOfRestaurents = arr[1];

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={ () => {
                   const filteredList = listOfRestaurents.filter((res) => 
                    res.data.avgRating > 4
                   );
                   setlistOfRestaurents(filteredList);
                }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {
            listOfRestaurents.map((resturants) => (
            <ResturantCard key={resturants.data.id} resData={resturants} />
            ))}
            </div>
        </div>
    );
};

export default Body;