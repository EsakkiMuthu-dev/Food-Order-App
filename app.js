import React from "react";
import ReactDOM from "react-dom";

/*
    Food Order App Low Level Design
    -Header
        -logo
        -nav
    -Body
        -Res Card Container
            -Res Cards
                -Logo
                -HotelName
                -Cusine
                -Price
                -Star
    -Footer
        -Copyright
        -Address
        -Other Links
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          alt="Foody Logo "
          src="https://ideally-global.com/wp-content/uploads/2021/06/Img_IdeallyGlobal_Foody_Free_logo_feher.png"
        />
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>Offers</li>
          <li>Help</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <div className="searchBar">
      <input type="text" style={{ margin: "5px" }} />
      <button> Search </button>
    </div>
  );
};

const ResCard = () => {
  return (
    <div className="card">
      <img
        className="resLogo"
        alt="Briyani"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xgmiuoi8ispl0xgggddm"
      />
      <h3>Jam Jam Briyani </h3>
      <h5>Available At 150 rs!!</h5>
      <h5> 4.3 Stars</h5>
    </div>
  );
};

const ResCardContainer = () => {
  return (
    <div className="resContainer">
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Search />
      <ResCardContainer />
    </div>
  );
};

//Render our app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
