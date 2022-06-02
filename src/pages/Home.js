import React from "react";
import Zgrada from "../assets/images/zgrada-mutapova.jpg";
import { Link } from "react-router-dom";
import {FaBug, FaCogs, FaDesktop, FaServer} from 'react-icons/fa'
import "../App.css";

const Home = () => {
  return (
    <>
      <div className="ng-scope">
        <img className="zgrada" src={Zgrada} style={{width:'100%',clipPath:'polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 100% 0, 100% 85%, 100% 100%, 100% 96%, 0 100%, 0 64%, 0 85%)'}} alt="" />
        {/* <div className="mask-rising mask-bottom"></div> */}
      </div>
      <div className="main-content ng-scope" autoscroll="true">
        <div className="container ng-scope">
          <div className="row overview">
            <div className="col-lg-3 col-sm-5 apply-mask col-xs-12">
             
              <div className="service-box" style={{clipPath: 'polygon(0 35%, 0 3%, 100% 0, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%)'}}>
                <Link to="/">
                  <span className="fa fa-cogs fa-2x"><FaCogs size={45}/></span>
                  <h2>Maintenance &amp; Support</h2>
                  <ul style={{ color: " #fff " }}>
                    <li>
                      <p style={{ textAlign: "left" }}>End-to-end service</p>
                    </li>
                    <li>
                      <p style={{ textAlign: "left" }}>Technology agnostic</p>
                    </li>
                    <li>
                      <p style={{ textAlign: "left" }}>
                        Quality governed by robust SLAs
                      </p>
                    </li>
                  </ul>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-lg-offset-0 col-sm-5 col-sm-offset-1 col-xs-12 apply-mask"
              data-animation="pulse"
              animate-scroll=""
              data-delay="500"
            >
             
             <div className="service-box" style={{clipPath: 'polygon(0 35%, 0 3%, 100% 0, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%)'}}>
                <Link to="/">
                  <span className="fa fa-desktop fa-2x"><FaDesktop size={40} /></span>
                  <h2>
                    Monitoring 24/7
                    <br />
                    <br />
                  </h2>
                  <ul style={{ color: " #fff " }}>
                    <li>
                      <p style={{ textAlign: "left" }}>Eyeballs on monitors</p>
                    </li>
                    <li>
                      <p style={{ textAlign: "left" }}>Rich pool of skills</p>
                    </li>
                    <li>
                      <p style={{ textAlign: "left" }}>Strong processes</p>
                    </li>
                    <li>
                      <p style={{ textAlign: "left" }}>
                        Custom tools, dashboards and reports
                      </p>
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
            >
             
             <div className="service-box" style={{clipPath: 'polygon(0 35%, 0 3%, 100% 0, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%)'}}>
                <Link to="/">
                  <span className="fa fa-server fa-2x"><FaServer size={40} /></span>
                  <h2>Infrastructure &amp; Hosting</h2>
                  <ul style={{ color: " #fff " }}>
                    <li>
                      <p style={{ textAlign: "left" }}>Seasoned experts</p>
                    </li>
                    <li>
                      <p style={{ textAlign: "left" }}>360 degrees service</p>
                    </li>
                    <li>
                      <p style={{ textAlign: "left" }}>
                        Experience with all major jurisdictions and providers
                      </p>
                    </li>
                  </ul>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-lg-offset-0 col-sm-5 col-sm-offset-1 col-xs-12 apply-mask"
              data-animation="pulse"
              animate-scroll=""
              data-delay="1000"
            >
             
             <div className="service-box" style={{clipPath: 'polygon(0 35%, 0 3%, 100% 0, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%)'}}>
                <Link to="#">
                  <span className="fa fa-bug fa-2x"><FaBug size={40} /></span>
                  <h2>
                    Testing
                    <br />
                    <br />
                  </h2>
                  <ul style={{ color: "#fff" }}>
                    <li>
                      <p style={{ textAlign: "left" }}>
                      System, Component, Integration and Unit testing
                      </p>
                    </li>
                    <li>
                      <p style={{ textAlign: "left" }}>Agile or Waterfall process</p>
                    </li>
                    <li>
                      <p style={{ textAlign: "left" }}>Various types of testing</p>
                    </li>
                    
                  </ul>
                </Link>
              </div>
            </div>
          </div>

          <h1>Who are we</h1>
          <div className="row">
            <div
              className="col-sm-12 col-md-5 animated fadeInLeft"
              data-animation="fadeInLeft"
              animate-scroll=""
              style={{ visibility: "hidden" }}
            >
              <p className="highlight">
                We are a first class IT services provider for online gaming and
                sports betting industry.
              </p>
              <p className="highlight">
                One of the most experienced teams in gaming industry
              </p>
            </div>
            <div
              className="col-sm-12 col-md-7 description animated fadeInRight"
              data-animation="fadeInRight"
              animate-scroll=""
              style={{ visibility: "hidden" }}
            >
              <p>
                We are proud to have one of the most experienced teams in gaming
                industry to ensure the highest standard of service and return on
                investment through outsourcing of a range of processes of a
                modern gaming operator.
              </p>
              <p>
                Our dedicated team of specialists brings a unique service
                capability that streamlines platform performance and management,
                making operations efficient and stable. Founded in 2013 and
                built around a core team of internationally proven gaming
                systems experts, Finbet has grown to over 60 staff members
                becamea first-class IT service provider to the sports betting
                industry.
              </p>
            </div>
          </div>
        </div>

        <div className="paralelogram join-us ng-scope"  style={{clipPath:'polygon(0 13%, 100% 0, 100% 90%, 0 100%)'}}>
          
          <div className="container">
            <div className="row">
              <div className="col-xs-12" style={{paddingTop:'30px'}}>
                <h1>Join us</h1>
              </div>
            </div>

            <div className="row" style={{ paddingBottom: "100px",textAlign:'center',justifyContent:'center' }}>
              <div
                className="col-xs-12 col-md-6 col-md-offset-3 animated fadeInDown mini"
                data-animation="fadeInDown"
                animate-scroll=""
                style={{ visibility: "hidden" }}
              >
                <p className="highlight">
                  Interested in long term opportunities with one of the
                  industry’s best practitioners ?
                </p>
              </div>
            </div>

          </div>
          {/* <div
            className="mask-rising"
            style={{ borderRightWidth: "1055px", borderTopWidth: "43.9583px" }}
          ></div> */}
        </div>

        <div
          className="drop-up apply-mask ng-scope animated fadeIn"
          data-animation="fadeIn"
          animate-scroll=""
          style={{ visibility: "hidden" }}
        >
          {/* <div
            className="join-us-mask mask-rising"
            style={{ borderRightWidth: "528px", borderTopWidth: "22px" }}
          ></div> */}
          <div style={{clipPath: 'polygon(0 6%, 100% 0, 100% 100%, 0 100%)'}}>
              <p>
            As a forward thinking company we’re always looking to add new
            talents to our accomplished multi-disciplinary teams of Analysts,
            Support Specialists, Programmers, Testers, Support and Service
          </p>
          </div>
        
          <Link to="/joinus" className="skewed blue">
            <span>Get informed</span>
          </Link>
          <div
            className="join-us-mask mask-droping"
            style={{ borderRightWidth: "528px", borderTopWidth: "22px" }}
          ></div>
        </div>

        {/* <script className="ng-scope">
	applyMaskBox();
</script> */}
      </div>
    </>
  );
};

export default Home;
