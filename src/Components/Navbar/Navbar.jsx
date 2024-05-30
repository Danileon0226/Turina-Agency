import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Recursos/Recurso 62-8.png";

function Navbar() {
  return (
    <>
      <div className="bottom-nav">
        <div className="menu-list">
          <div className="menu">
            <img src={logo} alt="logo" style={{ width: "70px" }} />
          </div>
          <div className="menu">
            <NavLink to="/" className="frame">
              <i className="ri-home-3-line"></i>
              <p className="li-mobile-p">Inicio</p>
            </NavLink>
          </div>
          <div className="menu">
            <NavLink to="/Services" className="frame">
              <i className="ri-user-smile-line"></i>
              <p className="li-mobile-p">Servicios</p>
            </NavLink>
          </div>
          <div className="menu">
            <NavLink to="/Contact" className="frame">
              <i className="ri-stack-line"></i>
              <p className="li-mobile-p">Contacto</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
