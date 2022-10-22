import "./Footer.css";

export default function Footer() {
  return (
    <div className="container footer1 bg-light">
      <div className="row ">
        <div>
          <p>Contact</p>
          <div>
            <i className="fa fa-home me-4"></i>
            <span>Singapore 5566</span>
          </div>
          <i className="fa fa-envelope me-4"></i>
          <span>travelant@dream.net</span>
          <div>
            <i className="fa fa-phone me-4"></i>
            <span>+65 1234567</span>
          </div>
        </div>
        <div className="d-flex flex-row-reverse">
          <i className="fa fa-facebook-official me-4"></i>
          <i className="fa fa-linkedin-square me-4"></i>
          <i className="fa fa-youtube-square me-4"></i>
          <i className="fa fa-wechat me-4"></i>
          <i className="fa fa-instagram me-4"></i>
          <p className="me-4">Connect With Us</p>
        </div>
      </div>
      <div className="row footer2">
        <p className="col-sm text-center p-4">
          &copy;{new Date().getFullYear()} Copyright TraveAnt
        </p>
      </div>
    </div>
  );
}
