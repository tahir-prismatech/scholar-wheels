import Height from "../height";
import "./My_Input_Field.css";

export default function InputField({ label, id, type = "text", placeholder, value, onChange }) {
  return (
    <div  className="input-field">
      {label && <label htmlFor={id}>{label}</label>}
      <Height height={"5px"}/>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
