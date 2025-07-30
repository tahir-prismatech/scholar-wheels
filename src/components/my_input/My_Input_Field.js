import { useState } from "react";
import Height from "../height";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./My_Input_Field.css";

export default function InputField({
  icon,
  name,
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="input-field">
      {label && <label htmlFor={id}>{label}</label>}
      <Height height={"5px"} />

      <div className="eye-icon-wrapper">
        <input
          name={name}
          id={id}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`custom-input ${error ? "input-with-error" : ""}`}
        />
        {isPassword && (
          <span
            className="eye-icon-btn"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        )}
      </div>

      {error && <div className="error-text">{error}</div>}
    </div>
  );
}
