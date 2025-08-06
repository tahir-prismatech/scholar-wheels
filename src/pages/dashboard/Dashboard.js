import { Outlet, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import DropdownButton from "../../components/dropDown/DropDownMenu";
import Header from "../../components/header/Header";
import InputField from "../../components/my_input/My_Input_Field";
import { ReusableTable } from "../../components/reusableTable/ReusableTable";
// import { ReusableTable } from "../../components/reusableTable/ReusableTable";
import Height from "../../utlis/height";
import Width from "../../utlis/Width";
import "./Dashboard.css";

export default function Dashboard() {

  const navigate = useNavigate();
  const vehicleData = [
    {
      vehicleNo: "TX1234",
      makeModel: "Toyota Hiace 2021",
      type: "Van",
      year: 2021,
      regExpiry: "2026-01-12",
      status: "Active",
      assignedTo: "Route 12",
    },
    {
      vehicleNo: "TX1234",
      makeModel: "Toyota Hiace 2021",
      type: "Van",
      year: 2021,
      regExpiry: "2026-01-12",
      status: "Active",
      assignedTo: "Route 12",
    },
    {
      vehicleNo: "TX1234",
      makeModel: "Toyota Hiace 2021",
      type: "Van",
      year: 2021,
      regExpiry: "2026-01-12",
      status: "Active",
      assignedTo: "Route 12",
    },
    {
      vehicleNo: "TX1234",
      makeModel: "Toyota Hiace 2021",
      type: "Van",
      year: 2021,
      regExpiry: "2026-01-12",
      status: "Active",
      assignedTo: "Route 12",
    },
    {
      vehicleNo: "TX1234",
      makeModel: "Toyota Hiace 2021",
      type: "Van",
      year: 2021,
      regExpiry: "2026-01-12",
      status: "Active",
      assignedTo: "Route 12",
    },
    {
      vehicleNo: "TX1234",
      makeModel: "Toyota Hiace 2021",
      type: "Van",
      year: 2021,
      regExpiry: "2026-01-12",
      status: "Active",
      assignedTo: "Route 12",
    },
    {
      vehicleNo: "TX1234",
      makeModel: "Toyota Hiace 2021",
      type: "Van",
      year: 2021,
      regExpiry: "2026-01-12",
      status: "Active",
      assignedTo: "Route 12",
    },
    {
      vehicleNo: "TX1234",
      makeModel: "Toyota Hiace 2021",
      type: "Van",
      year: 2021,
      regExpiry: "2026-01-12",
      status: "Active",
      assignedTo: "Route 12",
    },
  ];


  let headToEdit = () => {
    navigate("addNew")
  }

  return (
    <div className="column">
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}
