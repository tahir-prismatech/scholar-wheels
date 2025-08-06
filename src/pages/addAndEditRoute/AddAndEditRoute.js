import Header from "../../components/header/Header";
import SelfLocationMap from "../../components/mapComponent/SelfLocationMap";
import Height from "../../utlis/height";
import Width from "../../utlis/Width";
import { useNavigate } from "react-router-dom";

export default function AddAndEditRoute() {
  let handleCancel = () => {
    navigate("/routeManagement");
  };
  let navigate = useNavigate();
  let handleSave = () => {
    navigate("/routeManagement");
  };
  return (
    <>
      <Header
        title={"Add New Route"}
        description={"Route Management    >  Add New Route"}
      />
      <Height height={"30px"} />
      <div className="col border rounded border-muted m-2">
        <div style={{ margin: "0px" }} className="row align-items-end">
          <div className="col-md-6 mt-3 mb-3 ml-3">
            <SelfLocationMap />
          </div>
          <div className="col-md-6 mt-3 mb-3 mr-3">
            <label className="form-label">Route Name</label>
            <input
              type="text"
              className="form-control"
              placeholder={"Enter route name"}
            />
            <Height height={"20px"} />

            <label className="form-label">Start Point</label>

            <select className="form-select">
              <option value="select">Select start point</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
            <Height height={"20px"} />
            <label className="form-label">End Point</label>
            <select className="form-select">
              <option value="select">Select end point</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <Height height={"20px"} />
            <label className="form-label">Assign Vehicle (Optional)</label>
            <select className="form-select">
              <option value="select">Select vehicle</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <Height height={"20px"} />
            <label className="form-label">Assign Driver (Optional)</label>
            <select className="form-select">
              <option value="select">Select driver</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        <Height height={"20px"} />

        <div className="d-flex justify-content-end p-3">
          <button onClick={handleCancel} className="btn btn-outline-secondary">
            Cancel
          </button>
          <Width width={"10px"} />

          <button
            onClick={handleSave}
            style={{ height: "40px" }}
            className="btn btn-success"
          >
            Save Route
          </button>
        </div>
      </div>
    </>
  );
}
