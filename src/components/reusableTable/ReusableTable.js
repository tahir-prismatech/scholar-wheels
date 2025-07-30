import { useState } from "react";
import { paginationDetails } from "../../utlis/helpers";
import "./ReusableTable.css";
import Height from "../../utlis/height";
import pencil from "../../assets/icons/edit_pencil.png";
import del from "../../assets/icons/trash.png";
import divider from "../../assets/icons/divider.png";
import Width from "../../utlis/Width";
import DropdownButton from "../dropDown/DropDownMenu";

export function ReusableTable({ heading, data }) {
  // Sorting and filtering state
  const [currentPage, setPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [filterText, setFilterText] = useState("");

  // Filtering
  const filteredData = data.filter((item) => {
    if (!filterText) return true;
    // Check if any value contains the filterText
    return Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(filterText.toLowerCase());
  });

  // Sorting
  const sortedData = [...filteredData];
  if (sortConfig.key) {
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key])
        return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key])
        return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  // Pagination
  let numOfPages = paginationDetails.paginationDetailGetter({
    dataPerPage: 3,
    totalDataLength: sortedData.length,
  });

  let increment = () => {
    if (currentPage < numOfPages) {
      setPage((prev) => prev + 1);
    }
  };

  let decrement = () => {
    if (currentPage !== 1) {
      setPage((prev) => prev - 1);
    }
  };

  let slicedData = sortedData.slice((currentPage - 1) * 3, currentPage * 3);

  // Sorting handler
  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        // Toggle direction
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
    setPage(1); // Reset to first page on sort
  };

  // Filtering handler
  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
    setPage(1); // Reset to first page on filter
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* Filtering input */}
      {/* <div style={{ marginBottom: 12 }}>
        <input
          className="field"
          type="text"
          placeholder="Filter..."
          value={filterText}
          onChange={handleFilterChange}
        />
      </div> */}

      <Height height={"15px"} />
      <table className="table">
        <thead className="table-header">
          <tr className="table-heading-cell-row">
            {heading.map((item, idx) => (
              <th
                key={item}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  handleSort(Object.keys(slicedData[0] || data[0] || {})[idx])
                }
              >
                {item}
                {sortConfig.key ===
                  Object.keys(slicedData[0] || data[0] || {})[idx] && (
                  <span>{sortConfig.direction === "asc" ? " ▲" : " ▼"}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {slicedData.map((item) => (
            <tr className="table-body-row" key={item.id}>
              <td className="table-data">{item.vehicleNo}</td>
              <td className="table-data">{item.makeModel}</td>
              <td className="table-data">{item.type}</td>
              <td className="table-data">{item.year}</td>
              <td className="table-data">{item.regExpiry}</td>
              <td className="table-data">
                <div
                  style={{
                    backgroundColor: "#EDFFF1",
                    borderRadius: "22px",
                    width: "auto",
                    height: "auto",
                    padding: "4px 0px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  {item.status}
                </div>
              </td>
              <td className="table-data">{item.assignedTo}</td>
              <td className="table-data">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img className="height20" src={pencil} alt="pencil" />
                  <Width width={"5px"} />
                  <img className="height20" src={divider} alt="divider" />
                  <Width width={"5px"} />
                  <img className="height20" src={del} alt="trash" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex align-items-center justify-content-end">
        <div>
          <Height height={"10px"}/>
          <h6 style={{color:"#4A4A4A"}} className="text-sm font-normal">Results per page</h6>
        </div>

        <DropdownButton height={"0px"} name={"3"} options={["3", "6", "9"]} border="none"/>
        <Width width={"40px"}/>
         <div>
          <Height height={"10px"}/>
          <h6 style={{color:"#4A4A4A"}} className="text-sm font-normal">1-50 of 1,250</h6>
        </div>
        <Width width={"40px"}/>
        <div>
          <Height height={"10px"}/>
          <h6 style={{color:"#4A4A4A",cursor: "pointer"}} className="text-sm font-normal">{"<<"}</h6>
        </div>
        <Width width={"20px"}/>
        <div>
          <Height height={"10px"}/>
          <h6 onClick={decrement} style={{color:"#4A4A4A",cursor: "pointer"}} className="text-sm font-normal">{"<"}</h6>
        </div>
        <Width width={"20px"}/>
        <div>
          <Height height={"10px"}/>
          <h6 onClick={increment} style={{color:"#4A4A4A",cursor: "pointer"}} className="text-sm font-normal">{">"}</h6>
        </div>
        <Width width={"20px"}/>
        <div >
          <Height height={"10px"}/>
          <h6  style={{color:"#4A4A4A", cursor: "pointer"}} className="text-sm font-normal">{">>"}</h6>
        </div>
        <Width width={"20px"}/>
      </div>
      <Height height={"10px"} />

      {/* <section style={{ marginBottom: 32 }}>
        <h3>15. Add pagination to your table component.</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <button
            className="button"
            onClick={decrement}
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <div style={{ width: "25px" }}></div>
          <span>{currentPage}</span>
          <div style={{ width: "25px" }}></div>
          <button
            className="button"
            onClick={increment}
            disabled={currentPage === numOfPages}
          >
            Next
          </button>
        </div>
      </section> */}
    </div>
  );
}
