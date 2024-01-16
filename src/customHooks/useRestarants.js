import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";

const useRestarants = () => {
  const [info, setInfo] = useState(null);
  const fetchData = async () => {
    let res = {};
    try {
      const d = await fetch(API_URL);
      res = await d.json();
      console.log(
        res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setInfo(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return info;
};

export default useRestarants;
