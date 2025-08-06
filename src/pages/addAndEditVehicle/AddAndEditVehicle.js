import Header from "../../components/header/Header";
import FileUpload from "../../utlis/FileUpload";
import Height from "../../utlis/height";
import VehicleForm from "../../utlis/VehicleForm/VehicleForm";
import "./AddAndEditVehicle.css"

export default function AddAndEditVehicle() {
  return (
    <>
    <Header title="Add New Vehicle"  description={"Vehicle Management  >  Add New Vehicle"}/>
    <Height height={"20px"}/>
    <div className="d-flex flex-column gap-3 border-class">
      <div className="d-flex align-items-center gap-3">
        <VehicleForm
        fields={
          [
            { type: 'text', label: 'Vehicle Number', placeholder: 'Enter vehicle number' },
            {
              type: 'select',
              label: "Vehicle Type",              
              options: ['Car', 'Truck', 'Bus'],
            },
            {
              type: 'select',
              label: "Vehicle Make",
              options: ['Toyota', 'Honda', 'Suzuki'],
            },
          ]
        }
          
        />
      </div>
      <div className="d-flex align-items-center gap-3">
        <VehicleForm
        fields={
          [
            { type: 'text', label: 'Model', placeholder: 'Enter vehicle model' },
            { type: 'text', label: 'Manufacturing Year', placeholder: 'Enter your manufacturing year' },
            { type: 'text', label: 'Registration Expiry', placeholder: '2026-01-12' },
          ]
        }

        />
      </div>
      <FileUpload />
      
      <div className="d-flex justify-content-end gap-3">
        <button type="button" className="btn btn-outline-secondary">Cancel</button>
        <button type="submit" className="btn btn-success">Save Vehicle</button>
      </div>
      <Height height={5} />
    </div></>
    
  );
}
