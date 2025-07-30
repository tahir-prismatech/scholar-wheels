import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";
import ProtectedRoute from "./ProtectedRoute";
import AuthPage from "../pages/authPages/AuthPages";
import LandingPageLayout from "../layouts/landingPageLayout/LandingPageLayout";
import Dashboard from "../pages/dashboard/Dashboard";

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
          <Route path="dashboard" element = {<Dashboard/>}/>
        </Route>
        <Route path="/login" element={<AuthPage />} />

        <Route path="*" element={<p>404 Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}
