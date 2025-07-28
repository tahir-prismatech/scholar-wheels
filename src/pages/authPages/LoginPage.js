import Button from "../../components/button/Button";
import FormWrapper from "../../components/formWrapper/FormWrapper";
import Height from "../../components/height";
import InputField from "../../components/my_input/My_Input_Field";
import logo from "./../../assets/logo.png";
export default function LoginPage({func}) {
  return (
    <div className="auth-page">
      <img src={logo} alt="Logo"></img>
      <Height height={"50px"} />
      <h3 className="font-semibold">Join SchoolWheels</h3>
      <h6 className="text-base font-light">
        Manage routes, drivers & rides — all in one place.
      </h6>
      <Height height={"10px"} />
      <FormWrapper>
        <InputField placeholder={"Name here"} label={"Email"} />
        <InputField
          placeholder={"Enter Your Phone Number"}
          label={"Phone Number"}
        />
        <InputField placeholder={"Password here..."} label={"Password"} />
        <InputField
          placeholder={"Confirm Password"}
          label={"Confirm Password"}
        />
        <Height height={"10px"} />
        <Button onClick={func}>Sign Up</Button>
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
