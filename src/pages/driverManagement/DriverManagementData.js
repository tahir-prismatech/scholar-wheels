import { useEffect, useState } from "react";
import { driverLicenseData } from "../../api/DummyData";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import TableData from "../TableData/TableData";

export default function DriverManagementData() {
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
          buttonText="Add Driver"
          isTabs={true}
          heading="Driver Management"
          description={
            "Manage your drivers, assign them to vehicles, and track license status."
          }
          tableData={driverLicenseData}
        />
      )}
    </div>
  );
}
