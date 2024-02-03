import React from "react";
import { Card, Flex } from "antd";
const MobileCard = ({
  MobileName,
  price,
  MobileSpace,
  firstColor,
  middleColor,
  lastColor,
}) => {
  return (
    <div>
      <Card
        style={{
          width: 250,
          height: 500,
          borderRadius: 30,
        }}
      >
        <div className="freecontainer">
          <div className="freeText">{MobileName}</div>
        </div>
        <div
          //   className="middleCard"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 80,
            boxShadow: "5px 5px 10px  rgba(0, 0, 0, 0.5)",
            borderRadius: 15,
            background: `linear-gradient(to bottom right,${firstColor} , ${middleColor}, ${lastColor})`,
          }}
        >
          <p className="dollarText">{price}</p>
        </div>
        <div className="middleCardText">
          <div className="diamond"></div>
          <div>
            <div className="Text">this is real me 12 pro max mobile</div>
          </div>
        </div>
        <div className="bottomContainer">
          <div className="freecontainer">
            <div className="freeText">{MobileSpace}</div>
          </div>
          <div className="buyButtonContainer">
            <div className="buyButton">
              <div className="buyText">buy</div>
              {/* <div></div> */}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default MobileCard;
