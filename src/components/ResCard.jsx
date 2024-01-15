import { CDN_URL } from "../utils/constants";
const ResCard = ({ resObj }) => {
  const { name, costForTwo, cloudinaryImageId, avgRating } = resObj?.info;
  return (
    <div className="card">
      <img
        className="resLogo"
        alt="Briyani"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name} </h3>
      <h4>{costForTwo}</h4>
      {/* <h4 className="cardContent">{resObj.info.cuisines.join(",")}</h4> */}
      <h4>{avgRating + " stars "}</h4>
    </div>
  );
};

export default ResCard;
