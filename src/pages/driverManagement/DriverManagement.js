import { Outlet, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import DropdownButton from "../../components/dropDown/DropDownMenu";
import Header from "../../components/header/Header";
import InputField from "../../components/my_input/My_Input_Field";
import { ReusableTable } from "../../components/reusableTable/ReusableTable";
import Height from "../../utlis/height";
import Width from "../../utlis/Width";
import Tabs from "../../utlis/tabs/Tabs";

export default function DriverManagement() {
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

        <div className="column">
            <div className="main">
                <Outlet />
            </div>
        </div>
        // <div>
        //     <Header title="Driver Management" description={"Vehicle Management  >  Driver Management"} />
        //     <Height height={"20px"} />

        //     <div className="col border-class ">
        //         <Tabs />
        //         <Height height={"15px"} />
        //         <div className="d-flex align-items-center justify-content-between">
        //             <InputField
        //                 style={{ height: "40px", width: "33%" }}
        //                 name="search"
        //                 placeholder={"Search"}
        //                 icon={true}
        //             />
        //             <div className="d-flex align-items-center">
        //                 <DropdownButton name={"Assigned to"} options={["TX1234", "TX1235", "NA"]} />
        //                 <Width width={"10px"} />
        //                 <DropdownButton name={"Status"} options={["Active", "In active"]} />
        //                 <Width width={"10px"} />
        //                 <Button
        //                     onClick={headToEdit}
        //                     style={{ height: "30px", padding: "1px 15px", width: "130px" }}
        //                 >
        //                     + Add Driver
        //                 </Button>
        //             </div>
        //         </div>
        //         <div>
        //             <ReusableTable
        //                 heading={[
        //                     "Driver Name",
        //                     "License Category",
        //                     "Contact",
        //                     "License No",
        //                     "Expiry Date",
        //                     "Status",
        //                     "Assigned To",
        //                     "Actions",
        //                 ]}
        //                 data={vehicleData}
        //             />
        //         </div>
        //     </div>

        // </div>

    );
}