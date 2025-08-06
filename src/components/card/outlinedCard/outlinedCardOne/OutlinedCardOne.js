import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../OutlinedCard.css";
import Height from "../../../../utlis/height";

const OutlinedCardOne = ({ field = [], title = "Vehicle Assignment", options = [{value: "TX9982 – Ford Transit", label: "Vehicle"}] }) => {
  return (
    <div className="card p-3 borderClass">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title text-dark mb-3 text-base font-medium">
            {title}
          </h5>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#assignVehicleModal"
            >
              Assign to Vehicle
            </button>
          </div>
        </div>
        <Height height={"10px"} />

        <div
          className="modal fade"
          id="assignVehicleModal"
          tabIndex="-1"
          aria-labelledby="assignVehicleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="assignVehicleModalLabel">
                  Assign Vehicle
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Assign a vehicle to this driver:</p>
                <form>
                  <div className="mb-3">
                    <label htmlFor="vehicleSelect" className="form-label">
                      Select Vehicle
                    </label>
                    <select className="form-select" id="vehicleSelect">
                      <option value="">Select a vehicle</option>
                      {
                        options.map((item, index) => (
                          <option key={index} value={item.value}>{item.value}</option>
                        ))
                      }

                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="assignDate" className="form-label">
                      Assign Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="assignDate"
                    />
                  </div>
                  
                  <button type="submit" className="btn btn-success">
                    Assign Vehicle
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {field.length > 0 ? (
          field.map((item, index) => (
            <div className="d-flex justify-content-between" key={index}>
              <p className="text-muted mb-1 textDescription text-sm">
                {item.label}
              </p>
              <p className="text-sm">{item.value}</p>
            </div>
          ))
        ) : (
          <p className="text-dark mb-1 text-sm text-center">
            No vehicle currently assigned.
          </p>
        )}
      </div>
    </div>
  );
};

export default OutlinedCardOne;
