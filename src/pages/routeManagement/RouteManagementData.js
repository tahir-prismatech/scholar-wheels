import { useEffect, useState } from "react";
import { routeData } from "../../api/DummyData";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import TableData from "../TableData/TableData";

export default function RouteManagementData() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <TableData
        isTabs={false}
        heading="Route Management"
        description={"Plan and manage routes to keep your school transport "}
        tableData={routeData}
        buttonText="Add"
      />
      )}
    </div>
  );  
}