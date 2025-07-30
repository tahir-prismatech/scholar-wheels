import { useState } from "react";
import Button from "../../components/button/Button";
import FormWrapper from "../../components/formWrapper/FormWrapper";
import Height from "../../components/height";
import InputField from "../../components/my_input/My_Input_Field";
import logo from "./../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";


export default function BusinessDetail({ func, dataSetter }) {
  const [formData, setFormData] = useState({
    tradingsName: "",
    registrationNumber: "",
    firstName: "",
    surName: "",
    businessAddress: "",
    city: "",
    postalCode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // remove error on change
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.tradingsName) newErrors.businessName = "Please enter business name";
    if (!formData.firstName) newErrors.firstName = "Please type your first name";
    if (!formData.surName) newErrors.lastName = "Please type your last name";
    if (!formData.businessAddress) newErrors.address = "Please type your address";
    if (!formData.city) newErrors.town = "Please type your town";
    if (!formData.postalCode) newErrors.postalCode = "Enter your postal code";
    return newErrors;
  };

  const handleSubmit = (e) => {
     e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      dataSetter(formData)
      func();
    }
  };

  return (
    <div className="auth-page">
      <Height height={"50px"} />
      <img src={logo} alt="Logo" />
      <Height height={"30px"} />
      <h3 className="font-semibold">Add Business Details</h3>
      <h6 className="text-base font-light">
        Add your business details to complete your setup and get started.
      </h6>
      <Height height={"10px"} />
      <FormWrapper>
        <InputField
          placeholder="Name here"
          label="Business/Trading Name"
          name="tradingsName"
          value={formData.businessName}
          onChange={handleChange}
          error={errors.businessName}
        />
        <InputField
          placeholder="Enter your registration number"
          label="Registration Number (optional)"
          name="registrationNumber"
          value={formData.registrationNumber}
          onChange={handleChange}
        />
        <div className="field-in-row">
          <InputField
            placeholder="Enter your first name"
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
          <InputField
            placeholder="Enter your surname"
            label="Last Name"
            name="surName"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
        </div>
        <InputField
          placeholder="Enter your address"
          label="Business Address"
          name="businessAddress"
          value={formData.address}
          onChange={handleChange}
          error={errors.address}
        />
        <div className="field-in-row">
          <InputField
            placeholder="Enter your town"
            label="Town/City"
            name="city"
            value={formData.town}
            onChange={handleChange}
            error={errors.town}
          />
          <InputField
            placeholder="Enter your postal code"
            label="Postal Code"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            error={errors.postalCode}
          />
        </div>

        <Button onClick={handleSubmit}>Sign Up</Button>

        <div
          style={{
            alignItems: "center",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <h6 className="text-base font-light">Already have an account? </h6>
          <div style={{ width: "5px" }}></div>
          <h6 className="text-base font-normal"> SignIn</h6>
        </div>
      </FormWrapper>
    </div>
  );
}
