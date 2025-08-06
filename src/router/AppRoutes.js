import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";
import ProtectedRoute from "./ProtectedRoute";
import AuthPage from "../pages/authPages/AuthPages";
import LandingPageLayout from "../layouts/landingPageLayout/LandingPageLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import AddAndEditVehicle from "../pages/addAndEditVehicle/AddAndEditVehicle";
import TableData from "../pages/TableDataOfVehicleManagement/TableData";
import DriverManagement from "../pages/driverManagement/DriverManagement";

import AddAndEditDriver from "../pages/addAndEditDriver/AddAndEditDriver";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/"
          element={
            <ProtectedRoute>
              < LandingPageLayout/>
            </ProtectedRoute>
          }
        /> */}
        <Route path="/" element={<LandingPageLayout />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route
              path=""
              element={
                <TableData heading={"Vehicle Management"} description={"Manage your fleet. Stay road-ready."} />
              }
            />
            <Route path="addNew" element={<AddAndEditVehicle  />} />
          </Route>
          <Route path="driver" element={<DriverManagement />} >
            <Route
              path=""
              element={
                <TableData isTabs={true} heading={"Driver Management"} description={"Manage your drivers, assign them to vehicles, and track license status."} />
              }
            />
            <Route path="addNew" element={<AddAndEditDriver />} />
          </Route>
        </Route>
        <Route path="/login" element={<AuthPage />} />
        <Route path="*" element={<p>404 Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}
