import { useParams } from "react-router-dom";

const ResMenu = () => {
  const { resId } = useParams();

  return (
    <div className="resMenu">
      <h1> ID of the Hotel - {resId} </h1>
      <p> Some highlights</p>
      <h2>Menu </h2>
      <ul>
        <li>Briyani</li>
        <li>Dosa</li>
        <li>Idly</li>
        <li>Chapathi</li>
      </ul>
    </div>
  );
};
export default ResMenu;
