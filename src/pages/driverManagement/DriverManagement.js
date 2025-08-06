import { Outlet } from "react-router-dom";

export default function DriverManagement() {
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
