import { useState } from "react";
import Button from "../../components/button/Button";
import FormWrapper from "../../components/formWrapper/FormWrapper";
import Height from "../../components/height";
import InputField from "../../components/my_input/My_Input_Field";
import logo from "./../../assets/images/logo.png";

export default function LoginPage({ func, dataSetter }) {


  const [passwordIsHidden, setStatus] = useState(true)
  const [confirmPasswordIsHidden, setStatusOfCon] = useState(true)
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      func();
      dataSetter(formData)
    }
  };

  return (
    <div className="auth-page">
      <Height height={"50px"} />
      <img src={logo} alt="Logo" />
      <Height height={"50px"} />
      <h3 className="font-semibold">Join SchoolWheels</h3>
      <h6 className="text-base font-light">
        Manage routes, drivers & rides — all in one place.
      </h6>
      <Height height={"10px"} />
      <FormWrapper>
        <InputField
          error={errors.email}
          name="email"
          placeholder="Email here"
          label="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {/* {errors.email && <p className="error-text">{errors.email}</p>} */}

        <InputField
          error={errors.phone}
          name="phone"
          placeholder="Enter Your Phone Number"
          label="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        {/* {errors.phone && <p className="error-text">{errors.phone}</p>} */}

        <InputField
          error={errors.password}
          name="password"
          type={passwordIsHidden ? "password" : ""}
          placeholder="Password here..."
          label="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {/* {errors.password && <p className="error-text">{errors.password}</p>} */}

        <InputField
          error={errors.confirmPassword}
          name="confirmPassword"
          type={passwordIsHidden ? "password" : ""}
          placeholder="Confirm Password"
          label="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {/* {errors.confirmPassword && (
          <p className="error-text">{errors.confirmPassword}</p>
        )} */}

        <Height height={"10px"} />
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
