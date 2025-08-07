import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "../pages/authPages/AuthPages";
import LandingPageLayout from "../layouts/landingPageLayout/LandingPageLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import AddAndEditVehicle from "../pages/addAndEditVehicle/AddAndEditVehicle";
import TableData from "../pages/TableData/TableData";
import DriverManagement from "../pages/driverManagement/DriverManagement";

import AddAndEditDriver from "../pages/addAndEditDriver/AddAndEditDriver";
import AddNewDriver from "../pages/addNewDriver/AddNewDriver";
import DriverDetails from "../pages/driverDetails/DriverDetails";
import RouteManagement from "../pages/routeManagement/RouteManagement";
import AddAndEditRoute from "../pages/addAndEditRoute/AddAndEditRoute";
import ProtectedRoute from "./ProtectedRoute";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import VehicleManagement from "../pages/vehicleManagement/VehicleManagement";
import DriverManagementData from "../pages/driverManagement/DriverManagementData";
import RouteManagementData from "../pages/routeManagement/RouteManagementData";

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
        <Route
          path="/"
          element={
            // <ProtectedRoute>
              <LandingPageLayout />
            // </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />}>
            <Route
              path=""
              element={
                <VehicleManagement/>
                // <TableData
                //   heading={"Vehicle Management"}
                //   description={"Manage your fleet. Stay road-ready."}
                // />
              }
            />
            <Route path="addNew" element={<AddAndEditVehicle />} />
          </Route>
          <Route path="driver" element={<DriverManagement />}>
            <Route
              path=""
              element={
                <DriverManagementData/>
                
              }
            />
            <Route path="addNew" element={<AddNewDriver />}>
              <Route path="" element={<AddAndEditDriver />} />
              <Route path="driverInfo" element={<DriverDetails />} />
            </Route>
          </Route>
          <Route path="routeManagement" element={<RouteManagement />}>
            <Route
              path=""
              element={
                <RouteManagementData />

              }
            />
            <Route path="addNew" element={<AddAndEditRoute />} />
          </Route>
        </Route>
        <Route path="/login" element={<AuthPage />} />
        <Route path="*" element={<p>404 Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}
