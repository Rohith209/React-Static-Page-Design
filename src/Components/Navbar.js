import { Component } from "react";
import {NavLinks} from './NavLinks';
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    return(
      <>
        <div className="navbar-container">
          <div className="navbar-brand">
            <a href="/" className="brand-logo">
              Netlify
            </a>
          </div>
          <div className="nav-links">
            <ul>
               {NavLinks.map((item, index) => {
                return <li key= {index}>
                  <a href={item.url} className={item.class}>
                    {item.title}
                  </a>
                </li>
              })}
            </ul>
          </div>
      </div>
      </>
    )
  }
}

export default Navbar;