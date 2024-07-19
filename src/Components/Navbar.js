import { Component } from "react";
import "./Navbar.css";
import { Menu } from "./Menu";
import { Link } from "react-router-dom";
// import ReactWhatsapp from "react-whatsapp";
import nav_logo from "../assets/kerala-diet-logo.png";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <img src={nav_logo} alt="/" className="logo" />

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {Menu.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}

          <a
            href="https://wa.me/917025040484?text= Hi! I was browsing the website blog and wanted to know more about kerala dietition"
            target="_blank"
          >
            <button className="navbarbtn">Join Us</button>
          </a>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
