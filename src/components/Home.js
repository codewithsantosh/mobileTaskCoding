import React, { useState } from "react";
import "./styles.css";
import MobileCard from "./MobileCard";
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
        <MobileCard
          MobileName="FREE"
          price="$0"
          MobileSpace="5Gb"
          firstColor="#4e42f5"
          middleColor="#7542f5"
          lastColor="#427ef5"
        />
        <MobileCard
          MobileName="BASIC"
          price="$9.90"
          MobileSpace="100Gb"
          firstColor="#435dc4"
          middleColor="#0b258a"
          lastColor="#113ad9"
        />
        <MobileCard
          MobileName="STANDARD"
          price="$24.90"
          MobileSpace="1Tb"
          firstColor="#d99611"
          middleColor="#9e6c09"
          lastColor="#fab01e"
        />
        <MobileCard
          MobileName="ULTIMATE"
          price="$49.90"
          MobileSpace="Ultimated"
          firstColor="#43fa1e"
          middleColor="#2e9e18"
          lastColor="#48b332"
        />
      </div>
    </div>
  );
};
export default Home;
