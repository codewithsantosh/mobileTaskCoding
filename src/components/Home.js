import React, { useState } from "react";
import "./styles.css";
import MobileCard from "./MobileCard";
import { data } from "../constants/constant";
const Home = () => {
  return (
    <div className="container">
      <div
        style={{
          backgroundColor: "#D3D3D3",
          width: 1200,
          height: 600,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {data.map((item, index) => (
          <MobileCard
            MobileName={item.MobileName}
            price={item.price}
            MobileSpace={item.MobileSpace}
            firstColor={item.firstColor}
            middleColor={item.middleColor}
            lastColor={item.lastColor}
            describe={item.describe}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
