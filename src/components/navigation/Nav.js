import React from "react";
import Logo from "../../assets/images/logo2.png";
import { Link } from "react-router-dom";
import '../../App.css'

const Nav = () => {
  return (
    <div id="hero">
      <div className="navbar" style={{paddingTop:'0px'}} role="navigation" fixed-navbar="true">
        <div className="container d-flex align-items-start p-0">  
            <Link to="/">
                <div id="logo-holder" style={{clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)'}}>
                    <div id="logo">
                        <img src={Logo} alt="Finbet logo" title="Finbet logo" style={{padding:'10px'}} />
                    </div>
                {/* <div class="mask-droping"></div> */}
                </div>
            </Link>

            {/* <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div> */}

          <div id="nav-main"
            className="collapse show d-flex"
            collapse="isCollapsed">
                <ul className="nav navbar-nav navbar-right d-flex flex-row">
                <li>
                    <Link
                     style={{clipPath:' polygon(9% 0%, 100% 0%, 91% 100%, 0% 100%)',padding:'7px 18px'}}
                    to="/services"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    >
                    <span className="ng-binding">Services</span>
                    </Link>
                </li>
                <li>
                    <Link
                   style={{clipPath:' polygon(11% 0%, 100% 0%, 91% 100%, 0% 100%)',padding:'7px 18px'}}
                    to="/about"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    >
                    <span className="ng-binding">About</span>
                    </Link>
                </li>
                <li>
                    <Link
                     style={{clipPath:' polygon(9% 0%, 100% 0%, 91% 100%, 0% 100%)',padding:'7px 18px'}}
                    to="/joinus"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    >
                    <span className="ng-binding">Join Us</span>
                    </Link>
                </li>
                <li>
                    <Link 
                    style={{clipPath:' polygon(8% 0%, 100% 0%, 91% 100%, 0% 100%)',padding:'7px 18px'}}
                    to="/contact"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    >
                    <span className="ng-binding">Contact</span>
                    </Link>
                </li>
                </ul>

            {/* <div className="pos-f-t">
            <div className="collapse" id="navbarToggleExternalContent">
              <div className="bg-dark p-4">
                <h4 className="text-white">Collapsed content</h4>
                <span className="text-muted">
                  Toggleable via the navbar brand.
                </span>
              </div>
            </div>
            <nav className="navbar navbar-light ">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </nav>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
