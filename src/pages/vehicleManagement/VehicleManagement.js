import { useState, useEffect } from "react";
import TableData from "../TableData/TableData";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import { vehicleData } from "../../api/DummyData";

export default function VehicleManagement() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <TableData
          isTabs={false}
          heading="Vehicle Management"
          description={"Manage your fleet. Stay road-ready."}
          tableData={vehicleData}
          buttonText="Add"
        />
      )}
    </div>
  );
}
