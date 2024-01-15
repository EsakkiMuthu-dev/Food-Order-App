import { useState } from "react";
import ResCard from "./ResCard";
import restaurants from "../utils/mockData";

const ResCardContainer = () => {
  const [listOfRes, setListOfRes] = useState(restaurants);
  const filterRes = () => {
    const filteredRes = listOfRes.filter((res) => {
      console.log(res?.info.avgRating);
      return res?.info.avgRating > 4;
    });
    console.log(filteredRes);
    setListOfRes(filteredRes);
  };
  console.log(listOfRes);

  return (
    <>
      <button className="filter" type="button" onClick={filterRes}>
        Top Rated Restaurants🍽️
      </button>
      <div className="resContainer">
        {restaurants.map((restaurant) => (
          <ResCard resObj={restaurant} key={restaurant?.info.id} />
        ))}
      </div>
    </>
  );
};

export default ResCardContainer;
