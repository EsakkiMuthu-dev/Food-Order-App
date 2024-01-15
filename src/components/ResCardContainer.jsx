import { useState, useEffect } from "react";
import ResCard from "./ResCard";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const ResCardContainer = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const filterRes = () => {
    const filteredRes = listOfRes.filter((res) => res?.info.avgRating >= 4.4);
    setListOfRes(filteredRes);
  };

  const fetchData = async () => {
    try {
      const data = await fetch(API_URL);
      const json = await data.json();
      console.log(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setListOfRes(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };

  const reset = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);
  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <button
        className="filter"
        type="button"
        style={{ padding: 5 }}
        onClick={filterRes}>
        Top Rated Restaurants🍽️
      </button>
      <button type="button" onClick={reset} style={{ padding: 5, margin: 10 }}>
        {" "}
        Reset{" "}
      </button>
      <div className="resContainer">
        {listOfRes.map((restaurant) => (
          <ResCard resObj={restaurant} key={restaurant?.info.id} />
        ))}
      </div>
    </>
  );
};

export default ResCardContainer;
