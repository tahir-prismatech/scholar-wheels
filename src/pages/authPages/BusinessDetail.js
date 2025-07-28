import Button from "../../components/button/Button";
import FormWrapper from "../../components/formWrapper/FormWrapper";
import Height from "../../components/height";
import InputField from "../../components/my_input/My_Input_Field";
import logo from "./../../assets/logo.png";
export default function BusinessDetail({func}){
    return <div className="auth-page">
      <img src={logo} alt="Logo"></img>
      <Height height={"50px"} />
      <h3 className="font-semibold">Add Business Details</h3>
      <h6 className="text-base font-light">
        Add your business details to complete your setup and get started.
      </h6>
      <Height height={"10px"} />
      <FormWrapper>
        <InputField placeholder={"Name here"} label={"Business/Trading Name"} />
        <InputField
          placeholder={"Enter your registration number"}
          label={"Registration Number (optional)"}
        />
        <div className="field-in-row">
            <InputField placeholder={"Enter your first name"} label={"First Name"} />
        <InputField
          placeholder={"Enter your surname"}
          label={"Last Name"}
        />
        </div>
        <InputField placeholder={"Enter your address"} label={"Business Address"} />
        <div className="field-in-row" >
            <InputField
          placeholder={"Enter your phone number"}
          label={"Town/City"}
        />
        <InputField
          placeholder={"Enter your phone number"}
          label={"Postal Code"}
        />
        </div>
        
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
}