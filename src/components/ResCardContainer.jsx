import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useRestarants from "../customHooks/useRestarants";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

const ResCardContainer = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [displayRes, setDisplayRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const filterRes = () => {
    const filteredRes = listOfRes.filter((res) => res?.info.avgRating >= 4.4);
    setDisplayRes(filteredRes);
  };

  // const fetchData = async () => {
  //   try {
  //     const data = await fetch(API_URL);
  //     const json = await data.json();
  //     console.log(
  //       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants
  //     );
  //     setListOfRes(
  //       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants
  //     );
  //     setDisplayRes(
  //       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const reset = () => {};

  useEffect(() => {
    const data = useRestarants();
    console.log("from use effect");
    console.log(data);
    setDisplayRes(data);
    setListOfRes(data);
  }, []);

  const searchRes = (text) => {
    if (text.trim().length === 0) {
      setDisplayRes(listOfRes);
      return;
    }
    const filteredRes = listOfRes.filter((res) => {
      console.log(res.info.name);
      return res?.info?.name.toLowerCase().includes(text.toLowerCase());
    });
    console.log(filteredRes);
    setDisplayRes(filteredRes);
  };

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="searchBar">
        <input
          type="text"
          value={searchText}
          style={{ margin: "5px" }}
          onChange={(e) => {
            setSearchText(e.target.value);
            searchRes(e.target.value);
          }}
        />
        <button type="button" onClick={searchRes}>
          {" "}
          Search{" "}
        </button>
      </div>

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
        {displayRes.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={`/restaurant/${restaurant?.info.id}`}>
            <ResCard resObj={restaurant} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ResCardContainer;
