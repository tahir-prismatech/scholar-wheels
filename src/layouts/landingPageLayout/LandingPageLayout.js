import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./LandingPageLayout.css";
import logo from "./../../assets/images/logo.png";
import { useEffect, useState } from "react";
import graph from "./../../assets/icons/graph.png";
import schoolBus from "./../../assets/icons/SchoolBus.png";
import car from "./../../assets/icons/driving.png";
import arrow from "./../../assets/icons/arrow.png";
import calender_plus from "./../../assets/icons/calendar-add.png";
import calender_tick from "./../../assets/icons/calendar-tick.png";
import monitoring from "./../../assets/icons/monitor-mobbile.png";
import reqAndCon from "./../../assets/icons/document.png";
import chat from "./../../assets/icons/messages.png";
import logBook from "./../../assets/icons/book.png";
import accountibility from "./../../assets/icons/receipt.png";
import profile from "./../../assets/icons/setting.png";
import notification from "./../../assets/icons/notification.png";
import Padding from "../../utlis/Padding";
import Height from "../../utlis/height";

export default function LandingPageLayout() {
  const location = useLocation();
  console.log(location.pathname.slice(1,10));
  const [currentItem, setItem] = useState("");
  useEffect(() => {
  const current = location.pathname.split("/")[1];
  setItem(current);
}, [location]);

  return (
    <div className="row landingPage">
      <div className="col-12 col-md-3 col-lg-2 sideBarMenu">
        <img className="logo" src={logo} alt="logo"></img>
        <Padding padding={"0px 20px"}>
          <Height height={"30px"} />
          <div className="heading">
            <h6 className="text-xs font-medium colored">OPERATIONS</h6>
          </div>
          <NavLink
            className="nav-link"
            // onClick={() => setItem("dashboard")}
            to={"dashboard"}
          >
            <div
              className={
                currentItem === "dashboard"
                  ? "sideBarMenuItem-active"
                  : "sideBarMenuItem"
              }
            >
              <img className="icon" src={graph} alt="Dashboard" />
              <h6
                className={`${
                  currentItem === "Dashboard" ? "font-medium" : "font-normal"
                } text-xs colorBlack`}
              >
                Dashboard
              </h6>
            </div>
          </NavLink>
          <NavLink
            className="nav-link"
            // onClick={() => setItem("Vehicle-Management")}
            to={"vehicleManagement"}
          >
            <div className={
                currentItem === "Vehicle-Management" 
                  ? "sideBarMenuItem-active"
                  : "sideBarMenuItem"
              }>
              <img className="icon" src={schoolBus} alt="Vehicle-Management" />
              <h6
                className={`${
                  currentItem === "Vehicle-Management"
                    ? "font-medium"
                    : "font-normal"
                } text-xs colorBlack`}
              >
                Vehicle Management
              </h6>
            </div>
          </NavLink>
          <NavLink
            className="nav-link"
            // onClick={() => setItem("driver")}
            to={"driver"}
          >
            <div className={
                currentItem === "driver" 
                  ? "sideBarMenuItem-active"
                  : "sideBarMenuItem"
              }>
              <img className="icon" src={car} alt="Driver" />
              <h6
                className={`${
                  currentItem === "Driver" ? "font-medium" : "font-normal"
                } text-xs colorBlack`}
              >
                Driver Management
              </h6>
            </div>
          </NavLink>
          <NavLink
            className="nav-link"
            onClick={() => setItem("routeManagement")}
            to={"routeManagement"}
          >
            <div className={
                currentItem === "routeManagement" 
                  ? "sideBarMenuItem-active"
                  : "sideBarMenuItem"
              }>
              <img className="icon" src={arrow} alt="route" />
              <h6
                className={`${
                  currentItem === "routeManagement" ? "font-medium" : "font-normal"
                } text-xs colorBlack`}
              >
                Route Management
              </h6>
            </div>
          </NavLink>
          <NavLink
            className="nav-link"
            // onClick={() => setItem("schedule-rides")}
            to={"/scheduleRides"}
          >
            <div className="sideBarMenuItem">
              <img className="icon" src={calender_plus} alt="schedule-rides" />
              <h6
                className={`${
                  currentItem === "schedule-rides"
                    ? "font-medium"
                    : "font-normal"
                } text-xs colorBlack`}
              >
                Schedule Rides
              </h6>
            </div>
          </NavLink>
          <NavLink
            className="nav-link"
            onClick={() => setItem("active-rides")}
            to={"/activeRides"}
          >
            <div className="sideBarMenuItem">
              <img className="icon" src={calender_tick} alt="active-rides" />
              <h6
                className={`${
                  currentItem === "active-rides" ? "font-medium" : "font-normal"
                } text-xs colorBlack`}
              >
                Active Rides
              </h6>
            </div>
          </NavLink>
          <div className="heading">
            <h6 className="text-xs font-medium">Operations</h6>
          </div>
          <NavLink
            className="nav-link"
            onClick={() => setItem("monitoring")}
            to={"/monitoring"}
          >
            <div className="sideBarMenuItem">
              <img className="icon" src={monitoring} alt="monitoring" />
              <h6
                className={`${
                  currentItem === "monitoring" ? "font-medium" : "font-normal"
                } text-xs colorBlack`}
              >
                Live Monitoring
              </h6>
            </div>
          </NavLink>
          <NavLink
            className="nav-link"
            onClick={() => setItem("request")}
            to={"/request"}
          >
            <div className="sideBarMenuItem">
              <img className="icon" src={reqAndCon} alt="request" />
              <h6
                className={`${
                  currentItem === "request" ? "font-medium" : "font-normal"
                } text-xs colorBlack`}
              >
                Requests & Contracts
              </h6>
            </div>
          </NavLink>
          <NavLink
            className="nav-link"
            onClick={() => setItem("chat")}
            to={"/chat"}
          >
            <div className="sideBarMenuItem">
              <img className="icon" src={chat} alt="chat" />
              <h6
                className={`${
                  currentItem === "chat" ? "font-medium" : "font-normal"
                } text-xs colorBlack`}
              >
                Chat
              </h6>
            </div>
          </NavLink>
          <div className="heading">
            <h6 className="text-xs font-medium">Operations</h6>
          </div>
          <NavLink
            className="nav-link"
            onClick={() => setItem("logbook")}
            to={"/logbook"}
          >
            <div className="sideBarMenuItem">
              <img className="icon" src={logBook} alt="logbook" />
              <h6
                className={`${
                  currentItem === "logbook" ? "font-medium" : "font-normal"
                } text-xs colorBlack`}
              >
                Logbook
              </h6>
            </div>
          </NavLink>
          <NavLink
            className="nav-link"
            onClick={() => setItem("accountibility")}
            to={"/accountibility"}
          >
            <div className="sideBarMenuItem">
              <img className="icon" src={accountibility} alt="accountibility" />
              <h6
                className={`${
                  currentItem === "accountibility"
                    ? "font-medium"
                    : "font-normal"
                } text-xs colorBlack`}
              >
                Accounting & Billing
              </h6>
            </div>
          </NavLink>

          <NavLink
            className="nav-link"
            onClick={() => setItem("profile")}
            to={"/profile"}
          >
            <div className="sideBarMenuItem">
              <img className="icon" src={profile} alt="profile" />
              <h6
                className={`${
                  currentItem === "profile" ? "font-medium" : "font-normal"
                } text-xs colorBlack`}
              >
                Profile Setting{" "}
              </h6>
            </div>
          </NavLink>
          <NavLink
            className="nav-link"
            onClick={() => setItem("notification")}
            to={"/notification"}
          >
            <div className="sideBarMenuItem">
              <img className="icon" src={notification} alt="notification" />
              <h6
                className={`${
                  currentItem === "notification" ? "font-medium" : "font-normal"
                } text-xs colorBlack`}
              >
                Notifications
              </h6>
            </div>
          </NavLink>
        </Padding>
      </div>
      <div className="col-12 col-md-9 col-lg-10 mainPage">
        <Outlet />
      </div>
    </div>
  );
}
