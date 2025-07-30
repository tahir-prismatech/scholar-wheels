import Padding from "../../utlis/Padding";
import Width from "../../utlis/Width";
import "./Header.css";
import chat from "./../../assets/icons/chat_green.png";
import noti from "./../../assets/icons/notification_green.png";
import prf from "./../../assets/icons/profile.png";

export default function Header({ title, description }) {
  return (
    <header className="header">
      <div className="d-flex justify-content-between align-items-center">
        <div className="heading-with-description">
          <h5 className="font-semibold">{title}</h5>
          <h6 className="text-sm font-normal">{description}</h6>
        </div>
        <div className="d-flex align-items-center">
          <div className="icon-with-bg">
                <img className="obj-contain" src={chat} alt="" />
          </div>
          <Width width={"10px"} />
          <div className="icon-with-bg">
            <img className="obj-contain" src={noti} alt="" />
          </div>
          <Width width={"30px"} />
          <div>
            <h5 className="text-base primary">Tahir Ul Islam</h5>
          </div>
          <Width width={"10px"} />
          <div >
            <img className="height40" src={prf} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
