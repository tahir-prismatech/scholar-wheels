import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import DropdownButton from "../../components/dropDown/DropDownMenu";
import InputField from "../../components/my_input/My_Input_Field";
import { ReusableTable } from "../../components/reusableTable/ReusableTable";
import Width from "../../utlis/Width";
import Header from "../../components/header/Header";
import "./TableData.css";
import Height from "../../utlis/height";
import Tabs from "../../utlis/tabs/Tabs";
import { useState } from "react";

export default function TableData({
  isTabs = false,
  heading,
  description,
  buttonText = "Add New",
  tableData = [
    {
      Heading1: "Data Missing",
      Heading2: "Data Missing",
      Heading3: "Data Missing",
      Heading4: "Data Missing",
      Heading5: "Data Missing",
      Heading6: "Data Missing",
      Heading7: "Data Missing",
    },
  ],
}) {
  const navigate = useNavigate();

  let headToEdit = () => {
    navigate("addNew");
  };

  const [activeTab, setActiveTab] = useState("default");
  return (
    <>
      <Header title={heading} description={description} />
      <Height height={20} />
      <div className="col border-class ">
        {isTabs && <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />}

        {isTabs && <Height height={20} />}
        <div className="d-flex align-items-center justify-content-between">
          <div className="col-md-3">
            <InputField
              style={{ height: "40px" }}
              name="search"
              placeholder={"Search"}
              icon={true}
            />
          </div>

          <div className="d-flex align-items-center col-md-3">
            <DropdownButton name={"Type"} options={["Van", "Bus"]} />
            <Width width={"10px"} />
            <DropdownButton name={"Status"} options={["Active", "In active"]} />
            <Width width={"10px"} />
            <Button
              onClick={headToEdit}
              style={{ height: "30px", padding: "1px 15px", width: "120px" }}
            >
              + {buttonText}
            </Button>
          </div>
        </div>
        <div>
          <ReusableTable data={tableData} />
        </div>
      </div>
    </>
  );
}
