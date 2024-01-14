import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import ResCardContainer from "./components/ResCardContainer";
import Footer from "./components/Footer";
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Search />
      <ResCardContainer />
      <Footer />
    </div>
  );
};

//Render our app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
