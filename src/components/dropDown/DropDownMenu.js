import { useState } from "react";

export default function DropdownButton({
  height,
  name,
  options,
  border = "1px solid #E7E7E7",
}) {
  const [show, setShow] = useState(false);

  const toggleDropdown = () => setShow((prev) => !prev);

  const hasBorder = border !== "none";

  return (
    <div className="dropdown" style={{ position: "relative" }}>
      <button
        className="dropdown-toggle custom-btn"
        type="button"
        onClick={toggleDropdown}
        style={{
          height: height,
          border: border,
          borderRadius: "8px",
          padding: hasBorder ? "6px 12px" : "4px 10px",
          lineHeight: "1",
          backgroundColor: "transparent",
          color: "black",
        }}
      >
        {name}
      </button>

      {show && (
        <ul
          className="dropdown-menu show"
          style={{ display: "block", position: "absolute", zIndex: 1000 }}
        >
          {options.map((item, i) => (
            <li key={i}>
              <a className="dropdown-item" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
