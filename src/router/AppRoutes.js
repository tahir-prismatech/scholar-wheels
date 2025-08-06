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
                <TableData
                  heading={"Vehicle Management"}
                  description={"Manage your fleet. Stay road-ready."}
                />
              }
            />
            <Route path="addNew" element={<AddAndEditVehicle />} />
          </Route>
          <Route path="driver" element={<DriverManagement />}>
            <Route
              path=""
              element={
                <TableData
                  isTabs={true}
                  heading={"Driver Management"}
                  description={
                    "Manage your drivers, assign them to vehicles, and track license status."
                  }
                />
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
                <TableData
                  heading={"Route Management"}
                  description={
                    "Plan and manage routes to keep your school transport efficient and on schedule."
                  }
                />
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
