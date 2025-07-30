import InputField from "../../components/my_input/My_Input_Field";
import Height from "../../utlis/height";

export default function AddAndEditVehicle() {
  return (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex align-items-center gap-3">
        <InputField
          style={{ height: "40px",paddingLeft: "12px" }}
          placeholder="Enter vehicle number"
          label="Vehicle Number"
          name="firstName"
        />
        <InputField
          style={{ height: "40px" }}
          placeholder="Bus"
          label="Vehicle Type"
          name="firstName"
        />
        <InputField
          style={{ height: "40px" }}
          placeholder="Toyota"
          label="Make"
          name="surName"
        />
      </div>
      <div className="d-flex align-items-center gap-3">
        <InputField
          placeholder="Enter vehicle model"
          label="Model"
          name="firstName"
        />
        <InputField
          placeholder="Enter your manufacturing year"
          label="Manufacturing Year"
          name="surName"
        />
        <InputField
          placeholder="2026-01-12"
          label="Registration Expiry"
          name="surName"
        />
      </div>
      <div className="d-flex align-items-center gap-3">
        <InputField
          placeholder="Enter your first name"
          label="First Name"
          name="firstName"
        />
      </div>
    </div>
  );
}
