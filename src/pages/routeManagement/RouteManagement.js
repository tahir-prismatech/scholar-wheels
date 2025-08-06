import { Outlet } from "react-router-dom";
export default function RouteManagement() {
  return (
    <div className="column">
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}
