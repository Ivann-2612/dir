import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Footer = () => {
  return (
    <div>
      <div id="footer" className="apply-mask">
        <div className="mask-droping"></div>

        <div className="container">
          <div className="row-space">
            <div className="col-sm-6 pull-left" style={{ marginTop: "20px" }}>
              <div className="footer copypriv">
                © 2022 Finbet d.o.o. —
                <Link to="/privacynotice"> Privacy Notice</Link>
              </div>
            </div>

            <div className="col-sm-2 pull-right ng-scope one">
              <ul className="footer p-0">
                <li className="footer-title">
                  <Link to="/" className="ng-binding">
                    Services
                  </Link>
                </li>
                <li className="ng-scope">
                  <Link to="/overview" className="ng-binding">
                    Overview
                  </Link>
                </li>
                <li className="ng-scope">
                  <Link to="/benefits" className="ng-binding">
                    Benefits
                  </Link>
                </li>
                <li className="ng-scope">
                  <Link to="/casestudy" className="ng-binding">
                    Case Study
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-sm-2 pull-right ng-scope two">
              <ul className="footer p-0">
                <li className="footer-title p-0">
                  <Link to="/" className="ng-binding">
                    Finbet
                  </Link>
                </li>
                <li className="ng-scope">
                  <Link to="/about" className="ng-binding">
                    About
                  </Link>
                </li>
                <li className="ng-scope">
                  <Link to="/management" className="ng-binding">
                    Meet our team
                  </Link>
                </li>
                <li className="ng-scope">
                  <Link to="/joinus" className="ng-binding">
                    Join us
                  </Link>
                </li>
                <li className="ng-scope">
                  <Link to="/contact" className="ng-binding">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
