import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Service from "./Service/Service";
import Products from "./Products/Products";
import TeamMeet from "./TeamMeet/TeamMeet";
import ChooseUs from "./ChooseUs/ChooseUs";
import CustomerSays from "./CustomerSays/CustomerSays";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Products></Products>
      <TeamMeet></TeamMeet>
      <ChooseUs></ChooseUs>
      <CustomerSays></CustomerSays>
    </div>
  );
};

export default Home;
