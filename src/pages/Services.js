import React from "react";
import Carousel from "./Carousel";
import {Link} from 'react-router-dom'
import {FaBug, FaCogs, FaDesktop, FaServer} from 'react-icons/fa'

const Services = () => {
  return (
    <div>
      <Carousel />
      <div className="main-content ng-scope" autoscroll="true">
        <div className="container services ng-scope">
          <div className="row">
            <h1 className="col-lg-12 col-md-12 col-sm-8 col-xs-12 links ng-binding">
              Services/Overview
            </h1>

            <div className="col-lg-10 col-md-9 col-sm-12 col-xs-12">
              <p
                className="highlight ng-scope"
                data-animation="fadeInLeft"
                axnimate-scroll="true"
              >
                We are a first className IT services provider for online gaming
                and sports betting industry. One of the most experienced teams
                in gaming industry
              </p>
              <p
                data-animation="fadeInLeft"
                animate-scroll="true"
                className="ng-scope"
                style={{ visibility: "visible" }}
              >
                Finbet is a near-shore provider to the global gaming industry of
                a wide range of IT related services, in the domain of technology
                as well as business operations. Located in Belgrade, Serbia, the
                company is well positioned to efficiently meet the needs of
                European clients, while utilizing the constantly growing pool of
                local talent.
              </p>
              <p
                data-animation="fadeInLeft"
                animate-scroll="true"
                className="ng-scope"
                style={{ visibility: "visible" }}
              >
                Finbet has an established base of multi-disciplinary teams
                consisting of Analysts, Architects, Programmers, Testers,
                Support and Service Engineers. Equipped with broad experience
                and a proven track record, the team offers a comprehensive array
                of services, including:
              </p>

              <div className="row overview ng-scope">
                <div
                  className="col-lg-3 col-sm-5 apply-mask col-xs-12"
                  data-animation="pulse"
                  animate-scroll="true"
                  data-delay="250"
                  style={{ visibility: "visible" }}
                >
                  <div
                    className="service-box"
                    style={{ fontSize: "80%", padding: "10px 0",clipPath: 'polygon(0 35%, 0 3%, 100% 0, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%)' }}
                  >
                    <Link to='/'>
                      <div style={{ padding: "25px 25px 0px 0px" }}>
                        <span className="fa fa-cogs fa-2x"><FaCogs size={45}/></span>
                        <h2>Maintenance &amp; Support</h2>
                      </div>
                      <ul style={{ color: "#fff" }}>
                        <li>
                          <p>End-to-end service</p>
                        </li>
                        <li>
                          <p>Technology agnostic</p>
                        </li>
                        <li>
                          <p>Quality governed by robust SLAs</p>
                        </li>
                      </ul>
                    </Link>
                  </div>
                </div>

                <div
                  className="col-lg-3 col-lg-offset-0 col-sm-5 col-sm-offset-1 col-xs-12 apply-mask"
                  data-animation="pulse"
                  animate-scroll="true"
                  data-delay="500"
                  style={{ visibility: "visible" }}
                >
                  <div
                    className="service-box"
                    style={{ fontSize: "80%", padding: "10px 0",clipPath: 'polygon(0 35%, 0 3%, 100% 0, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%)'}}
                  >
                    <Link to='/'>
                      <div style={{ padding: "25px 25px 0px 0px" }}>
                        <span className="fa fa-desktop fa-2x"><FaDesktop size={40} /></span>
                        <h2>Monitoring 24/7</h2>
                      </div>
                      <ul style={{ color: "#fff" }}>
                        <li>
                          <p>Eyeballs on monitors</p>
                        </li>
                        <li>
                          <p>Rich pool of skills</p>
                        </li>
                        <li>
                          <p>Strong processes</p>
                        </li>
                        <li>
                          <p>Custom tools, dashboards and reports</p>
                        </li>
                      </ul>
                    </Link>
                  </div>
                </div>

                <div
                  className="col-lg-3 col-sm-5 col-xs-12 apply-mask"
                  data-animation="pulse"
                  animate-scroll=""
                  data-delay="750"
                  style={{ visibility: "visible" }}
                >
                  <div
                    className="service-box"
                    style={{ fontSize: "80%", padding: "10px 0",clipPath: 'polygon(0 35%, 0 3%, 100% 0, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%)' }}
                  >
                    <Link to='/'>
                      <div style={{ padding: "25px 25px 0px 0px" }}>
                        <span className="fa fa-server fa-2x"><FaServer size={40} /></span>
                        <h2>Infrastructure &amp; Hosting</h2>
                      </div>
                      <ul style={{ color: "#fff" }}>
                        <li>
                          <p>Seasoned experts</p>
                        </li>
                        <li>
                          <p>360 degrees service</p>
                        </li>
                        <li>
                          <p>
                            Experience with all major jurisdictions and
                            providers
                          </p>
                        </li>
                      </ul>
                    </Link>
                  </div>
                </div>

                <div
                  className="col-lg-3 col-lg-offset-0 col-sm-5 col-sm-offset-1 col-xs-12 apply-mask"
                  data-animation="pulse"
                  animate-scroll="true"
                  data-delay="1000"
                  style={{ visibility: "visible" }}
                >
                  <div
                    className="service-box"
                    style={{ fontSize: "80%", padding: "10px 0",clipPath: 'polygon(0 35%, 0 3%, 100% 0, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%)' }}
                  >
                    <Link to='/'>
                      <div style={{ padding: "25px 25px 0px 0px" }}>
                        <span className="fa fa-bug fa-2x"><FaBug size={40} /></span>
                        <h2>
                          Testing
                          <br />
                          <br />
                        </h2>
                      </div>
                      <ul style={{ color: "#fff" }}>
                        <li>
                          <p>System, Component, Integration and Unit testing</p>
                        </li>
                        <li>
                          <p>Agile or Waterfall process</p>
                        </li>
                        <li>
                          <p>Various types of testing</p>
                        </li>
                      </ul>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-2 col-md-3 col-sm-3 col-xs-12 pull-right link-holder animated fadeInRight"
              data-animation="fadeInRight"
              animate-scroll="true"
              style={{visibility:'visible'}}
            >
              <Link to="/overview">
                <div className="services-links">Overview</div>
              </Link>
              <Link to="/benefits">
                <div className="services-links">Benefits</div>
              </Link>
              <Link to="/casestudy">
                <div className="services-links">Case study</div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
