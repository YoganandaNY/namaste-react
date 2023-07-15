import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { LIST_API } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

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
  //const [listOfRestaurents, setlistOfRestaurents] = useState(resList);

  const [listOfRestaurents, setlistOfRestaurents] = useState([]);

  const [filteredRestuarant, setFilteredRestuarant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const ResturantCardPromoted = withPromotedLabel(ResturantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  //console.log("Body Rendered");

  // const arr = useState(resList);
  // const [listOfRestaurents, setlistOfRestaurents] = arr;
  // const listOfRestaurents = arr[0];
  // const setlistOfRestaurents = arr[1];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(LIST_API);

    const json = await data.json();

    console.log(json);
    //Optional Chaining
    setlistOfRestaurents(json?.data?.cards[2]?.data?.data?.cards);

    setFilteredRestuarant(json?.data?.cards[2]?.data?.data?.cards);
  };

  // Conditional Rendering
  // if(listOfRestaurents.length === 0) {
  //     return <Shimmer />;
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internent connection
      </h1>
    );

  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="px-4">
          <input
            type="text"
            className="m-4 px-4 border-solid border-2 hover:border-blue-500 rounded-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-400 m-1 px-3 rounded-md"
            onClick={() => {
              // Filter the resturant cards and upadate the UI
              // SearchText
              //console.log(searchText);

              const filteredResList = listOfRestaurents.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestuarant(filteredResList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="m-4 px-4 bg-gray-300 rounded-md"
          onClick={() => {
            const filteredList = listOfRestaurents.filter(
              (res) => res.data.avgRating > 4.0
            );
            setlistOfRestaurents(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div>
          <label>UserName : </label>
          <input
            className="px-4 m-4 border border-black rounded-md"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestuarant.map((resturants) => (
          <Link
            key={resturants.data.id}
            to={"/restaurants/" + resturants.data.id}
          >
            {resturants.data.promoted ? (
              <ResturantCardPromoted resData={resturants} />
            ) : (
              <ResturantCard resData={resturants} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
