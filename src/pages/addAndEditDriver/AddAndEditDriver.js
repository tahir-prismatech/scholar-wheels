import DriverInfoCard from "../../components/card/filledCard/FilledCard";
import Header from "../../components/header/Header";
import FileUpload from "../../utlis/FileUpload";
import Height from "../../utlis/height";
import VehicleForm from "../../utlis/VehicleForm/VehicleForm";
import "./AddAndEditDriver.css";
import { useNavigate } from "react-router-dom";

export default function AddAndEditDriver() {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/driver");
  };

  const handleSave = () => {
    navigate("driverInfo");
  };

  return (
    <>
      <Header
        title="Add New Driver"
        description={"Driver Management   >  Add New Driver"}
      />
      <Height height={"20px"} />
      <div className="d-flex flex-column gap-3 border-class">
        <div className="d-flex align-items-center gap-3">
          <VehicleForm
            fields={[
              {
                type: "text",
                label: "Full Name",
                placeholder: "Enter Full Name",
              },
              {
                type: "select",
                label: "License Category",
                options: ["cat 1", "cat 2", "cat 3"],
              },
              { type: "phone", label: "Contact Number" },
            ]}
          />
        </div>
        <div className="d-flex align-items-center gap-3">
          <VehicleForm
            fields={[
              {
                type: "text",
                label: "License Number",
                placeholder: "Enter license number",
              },
              {
                type: "date",
                label: "License Expiry Date",
                options: ["Car", "Bus"],
              },
            ]}
          />
        </div>
        <FileUpload />

        <div className="d-flex justify-content-end gap-3 p-3">
          <button
            onClick={handleCancel}
            type="button"
            className="btn btn-outline-secondary"
          >
            Cancel
          </button>
          <button
          style={{height:"40px"}}

            onClick={handleSave}
            type="button"
            className="btn btn-success"
          >
            Save Driver
          </button>
        </div>
        <Height height={5} />
      </div>
    </>
  );
}
