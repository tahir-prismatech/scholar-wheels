import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FilledCard.css";

const CardFilled = ({
  field = [
    { label: "Full Name", value: "Tahir" },
    { label: "Contact Number", value: "082 555 1234" },
  ],
  title = "Driver Info",
}) => {
  return (
    <div className="card p-3 border-class1">

      <div className="card-body">
        <h5 className="card-title text-dark mb-3 text-base font-medium">
          {title}
        </h5>
        {field.map((item, index) => (
          <div className="d-flex justify-content-between" key={index}>
            <p className="text-muted mb-1 textDescription text-sm">
              {item.label}
            </p>
            <p className="text-sm">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardFilled;
