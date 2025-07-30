import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import DropdownButton from "../../components/dropDown/DropDownMenu";
import InputField from "../../components/my_input/My_Input_Field";
import { ReusableTable } from "../../components/reusableTable/ReusableTable";
import Width from "../../utlis/Width";

export default function TableData() {
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
    navigate("addNew");
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <InputField
          style={{ height: "40px", width: "33%" }}
          name="search"
          placeholder={"Search"}
          icon={true}
        />
        <div className="d-flex align-items-center">
          <DropdownButton name={"Type"} options={["Van", "Bus"]} />
          <Width width={"10px"} />
          <DropdownButton name={"Status"} options={["Active", "In active"]} />
          <Width width={"10px"} />
          <Button
            onClick={headToEdit}
            style={{ height: "30px", padding: "1px 15px", width: "100px" }}
          >
            + Tahir
          </Button>
        </div>
      </div>
      <div>
        <ReusableTable
          heading={[
            "Vehicle No",
            "Make & Model",
            "Type",
            "Year",
            "Reg Expiry",
            "Status",
            "Assigned To",
            "Actions",
          ]}
          data={vehicleData}
        />
      </div>
    </>
  );
}
