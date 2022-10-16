import logo from "./antlogo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="container-fluid footer">
      <hr></hr>
      <div className="row justify-content-around">
        <div className="col-4">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="col-4">&#169; copyright TravelANT</div>
      </div>
    </div>
  );
}
