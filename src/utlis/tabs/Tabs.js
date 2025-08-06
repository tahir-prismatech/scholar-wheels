import { useState } from "react";
import "./Tabs.css"

const Tabs = () => {

  const [activeTab, setActiveTab] = useState("default");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <ul className="nav nav-tabs border-0 border-bottom border-1">
      <li className="nav-item">
        <a className={`nav-link ${activeTab === "default" ? "active fw-semibold fs-6 text-success border-0 border-bottom border-3 border-success" : " fs-6 fw-semibold font-medium text-dark"}`} href="#" onClick={() => handleTabClick("default")}>Default</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link ${activeTab === "active" ? "active fw-semibold fs-6 text-success border-0 border-bottom border-3 border-success" : " fs-6 fw-semibold font-medium text-dark"}`} href="#" onClick={() => handleTabClick("active")}>Active</a>

      </li>
      <li className="nav-item">
        <a className={`nav-link ${activeTab === "archived" ? "active fw-semibold fs-6 text-success border-0 border-bottom border-3 border-success" : " fs-6 fw-semibold font-medium text-dark"}`} href="#" onClick={() => handleTabClick("archived")}>Archived</a>

      </li>
    </ul>
  );
};

export default Tabs;
