import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import ResCardContainer from "./components/ResCardContainer";
import Footer from "./components/Footer";

const AppLayout = () => (
  <div>
    <Header />
    <ResCardContainer />
    <Footer />
  </div>
);

// Render our app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
