import ResCard from "./ResCard";
import restaurants from "../utils/mockData";
const ResCardContainer = () => {
  return (
    <div className="resContainer">
      {restaurants.map((restaurant) => (
        <ResCard resObj={restaurant} />
      ))}
    </div>
  );
};

export default ResCardContainer;
