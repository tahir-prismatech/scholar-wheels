import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import FileUpload from "../../utlis/FileUpload";
import Height from "../../utlis/height";
import VehicleForm from "../../utlis/VehicleForm/VehicleForm";
import "./AddAndEditVehicle.css";

export default function AddAndEditVehicle() {
  const navigate = useNavigate();
  let handleSave = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <>
      <Header
        title="Add New Vehicle"
        description={"Vehicle Management  >  Add New Vehicle"}
      />
      <Height height={"20px"} />
      <div className="d-flex flex-column gap-3 border-class">
        <div className="d-flex align-items-center gap-3">
          <VehicleForm
            fields={[
              {
                type: "text",
                label: "Vehicle Number",
                placeholder: "Enter vehicle number",
              },
              {
                type: "select",
                label: "Vehicle Type",
                options: ["Car", "Truck", "Bus"],
              },
              {
                type: "select",
                label: "Vehicle Make",
                options: ["Toyota", "Honda", "Suzuki"],
              },
            ]}
          />
        </div>
        <div className="d-flex align-items-center gap-3">
          <VehicleForm
            fields={[
              {
                type: "text",
                label: "Model",
                placeholder: "Enter vehicle model",
              },
              {
                type: "text",
                label: "Manufacturing Year",
                placeholder: "Enter your manufacturing year",
              },
              {
                type: "text",
                label: "Registration Expiry",
                placeholder: "2026-01-12",
              },
            ]}
          />
        </div>
        <FileUpload />

        <div className="d-flex justify-content-end gap-3">
          <button type="button" className="btn btn-outline-secondary">
            Cancel
          </button>
          <button
            style={{ height: "40px" }}
            type="button"
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#assignVehicleModal"
          >
            Save Vehicle
          </button>
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
                <div className="modal-body d-flex flex-column gap-3">
                  <VehicleForm
                    className="col-md-12 mb-3"
                    fields={[
                      {
                        type: "select",
                        label: "Vehicle",
                        options: [
                          "TX9982 – Ford Transit",
                          "TX9983 – Ford Transit",
                          "TX9984 – Ford Transit",
                        ],
                      },
                    ]}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      handleSave(e);
                    }}
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Height height={5} />
      </div>
    </>
  );
}
