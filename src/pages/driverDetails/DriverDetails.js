import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DriverDetails.css";
import Header from "../../components/header/Header";
import Height from "../../utlis/height";
import CardFilled from "../../components/card/filledCard/FilledCard";
import OutlinedCardOne from "../../components/card/outlinedCard/outlinedCardOne/OutlinedCardOne";
import OutlinedCardTwo from "../../components/card/outlinedCard/outlinedCardTwp/OutlinedCardTwo";

const DriverDetails = () => {
  return (
    <div className="container">
      <Header
        title="Driver Details"
        description={
          "Manage your drivers, assign them to vehicles, and track license status."
        }
      />
      <Height height={"20px"} />
      <div className="d-flex justify-content-between">
        <div className="col-md-6">
          <CardFilled
            field={[
              { label: "Full Name", value: "Tahir" },
              { label: "Contact Number", value: "082 555 1234" },
              { label: "License Category", value: "C1" },
              { label: "License Number", value: "DRV123456" },
              { label: "License Expiry Date", value: "2025-04-15" },
              { label: "License Status", value: "Active" },
              { label: "License Document", value: "Active" },
            ]}
            title="Driver Info"
          />
        </div>
        <div className="col-md-6">
         <OutlinedCardOne/>
         <Height height={"20px"}/>
         <OutlinedCardTwo/>
        </div>
      </div>
    </div>
  );
};

export default DriverDetails;
