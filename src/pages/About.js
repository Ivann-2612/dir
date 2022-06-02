import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import Dragan from "../assets/images/marke.jpg";
import Vera from "../assets/images/vera.jpg";
import Danijela from "../assets/images/danijela.jpg";
import Zeljko from "../assets/images/zeljko.jpg";
import Katarina from "../assets/images/katarina.jpg";
import Nemanja from "../assets/images/nemanjaS.jpg";
import Nebojsa from "../assets/images/nebojsast1.jpg";
import Dusan from "../assets/images/dule.jpg";

const About = () => {
  return (
    <div>
      <Carousel />
      <div className="container">
        <h1 className="title">About us</h1>

        <div className="row about">
          <div className="col-sm-12 col-md-5">
            <p
              className="highlight"
              data-animation="fadeInLeft"
              animate-scroll="true"
            >
              We are a first class IT services provider for online gaming and
              sports betting industry
            </p>
            <p
              className="highlight"
              data-animation="fadeInLeft"
              animate-scroll="true"
            >
              One of the most experienced teams in gaming industry
            </p>
          </div>
          <div
            className="col-sm-12 col-md-7"
            data-animation="fadeInRight"
            animate-scroll="true"
          >
            <p>
              We are proud to have one of the most experienced teams in gaming
              industry to ensure the highest standard of service and return on
              investment through outsourcing of a range of processes of a modern
              gaming operator.
            </p>
            <p>
              Our dedicated team of specialists brings a unique service
              capability that streamlines platform performance and management,
              making operations efficient and stable. Founded in 2013 and built
              around a core team of internationally proven gaming systems
              experts, Finbet has grown to over 90 staff members became a
              first-class IT service provider to the sports betting industry.
            </p>
          </div>
        </div>

        <div className="row about">
          <div
            className="col-sm-12 col-md-5"
            data-animation="fadeInLeft"
            animate-scroll="true"
          >
            <p className="highlight">
              Our roots date back to 1998 and BEG Finsoft, a Belgrade branch of
              the UK-based Finsoft Ltd., world-wide leaders in real-time
              transaction and information management systems for the investment
              banking and sports
            </p>
          </div>
          <div
            className="col-sm-12 col-md-7"
            data-animation="fadeInRight"
            animate-scroll="true"
          >
            <p>
              A number of Finbet’s staff started out at BEG Finsoft and made key
              contribution to their unique MarginMaker<sup>TM</sup> platform,
              now an industry standard for fixed odds betting, used widely
              across the globe. In 2007, the gaming division of Finsoft was sold
              to the US lottery giant GTECH, upon which the non-gaming part of
              Finsoft was divested into Fincore Ltd., the London-based
              specialist in cloud based enterprise applications, serving some of
              the biggest and best known brands in investment banking, central
              government, defence and more.
            </p>
            <p>
              After Fincore Ltd. re-entered gaming market in 2012, they
              appointed the newly-founded Finbet as their strategic supplier and
              collaborator.
            </p>
          </div>
        </div>
      </div>
      {/* ABOUT kraj */}

      {/* MANAGEMENT */}
      <div className="paralelogram apply-mask">
        <div className="mask-droping">{/* mask */}</div>

        <div className="container">
          <div className="row drop-in-title-row" style={{  display:'flex',
                  justifyContent:'center'}}>
            <div className="col-sm-12 col-md-8 col-md-offset-2 apply-mask">
              <h1
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 88%, 0 100%',
                  position: "relative",
                  zIndex: "10",
                  paddingBottom:'50px',
                  margin: "auto",
                  width: "100%"
                }}
              >
                Management team
              </h1>
            </div>

            <div className="row" style={{paddingTop:'40px'}}>
              <div
                className="col-xs-6 col-md-3 management-team ng-scope animated pulse"
                data-animation="pulse"
                animate-scroll="true"
                data-delay="0"
                style={{ visibility: "hidden" }}
              >
                <Link
                  to="/management"
                  ng-click="setProfileActive(manager.id)"
                  className="profile-mini-block"
                >
                  <img
                    style={{ width: "270px", height: "270px" }}
                    className="img-responsive"
                    src={Dragan} alt=""
                  />
                  <span className="ng-binding">Dragan Marković</span>
                  <i className="ng-binding">CTO</i>
                </Link>
              </div>
              <div
                className="col-xs-6 col-md-3 management-team ng-scope animated pulse"
                data-animation="pulse"
                animate-scroll="true"
                data-delay="250"
                style={{ visibility: "hidden" }}
              >
                <Link to="/management" className="profile-mini-block">
                  <img
                    style={{ width: "270px", height: "270px" }}
                    className="img-responsive"
                    src={Vera} alt=""
                  />
                  <span className="ng-binding">Vera Žanetić</span>
                  <i className="ng-binding">Development Lead</i>
                </Link>
              </div>
              <div
                className="col-xs-6 col-md-3 management-team ng-scope animated pulse"
                data-animation="pulse"
                animate-scroll="true"
                data-delay="500"
                style={{ visibility: "hidden" }}
              >
                <Link to="/management" className="profile-mini-block">
                  <img
                    style={{ width: "270px", height: "270px" }}
                    className="img-responsive"
                    src={Danijela} alt=""
                  />
                  <span className="ng-binding">Danijela Arsić</span>
                  <i className="ng-binding">Database Team Lead</i>
                </Link>
              </div>
              <div
                className="col-xs-6 col-md-3 management-team ng-scope animated pulse"
                data-animation="pulse"
                animate-scroll="true"
                data-delay="750"
                style={{ visibility: "hidden" }}
              >
                <Link to="/management" className="profile-mini-block">
                  <img
                    style={{ width: "270px", height: "270px" }}
                    className="img-responsive"
                    src={Zeljko} alt=""
                  />
                  <span className="ng-binding">Željko Nenadić</span>
                  <i className="ng-binding">DevOps Team Lead</i>
                </Link>
              </div>
              <div
                className="col-xs-6 col-md-3 management-team ng-scope animated pulse"
                data-animation="pulse"
                animate-scroll="true"
                data-delay="1000"
                style={{ visibility: "hidden" }}
              >
                <Link to="/management" className="profile-mini-block">
                  <img
                    style={{ width: "270px", height: "270px" }}
                    className="img-responsive"
                    src={Katarina} alt=""
                  />
                  <span className="ng-binding">Katarina Ćurčić</span>
                  <i className="ng-binding">Payments Team Lead</i>
                </Link>
              </div>
              <div
                className="col-xs-6 col-md-3 management-team ng-scope animated pulse"
                data-animation="pulse"
                animate-scroll="true"
                data-delay="1250"
                style={{ visibility: "hidden" }}
              >
                <Link to="/management" className="profile-mini-block">
                  <img
                    style={{ width: "270px", height: "270px" }}
                    className="img-responsive"
                    src={Nemanja} alt=""
                  />
                  <span className="ng-binding">Nemanja Stošić</span>
                  <i className="ng-binding">Infrastructure Team Lead</i>
                </Link>
              </div>
              <div
                className="col-xs-6 col-md-3 management-team ng-scope animated pulse"
                data-animation="pulse"
                animate-scroll="true"
                data-delay="1500"
                style={{ visibility: "hidden" }}
              >
                <Link to="/management" className="profile-mini-block">
                  <img
                    style={{ width: "270px", height: "270px" }}
                    className="img-responsive"
                    src={Nebojsa} alt=""
                  />
                  <span className="ng-binding">Nebojša Stanković</span>
                  <i className="ng-binding">MM2 Team Lead</i>
                </Link>
              </div>
              <div
                className="col-xs-6 col-md-3 management-team ng-scope animated pulse"
                data-animation="pulse"
                animate-scroll="true"
                data-delay="1750"
                style={{ visibility: "hidden" }}
              >
                <Link to="/management" className="profile-mini-block">
                  <img
                    style={{ width: "270px", height: "270px" }}
                    className="img-responsive"
                    src={Dusan} alt=""
                  />
                  <span className="ng-binding">Dušan Bulajić</span>
                  <i className="ng-binding">QA Team Lead</i>
                </Link>
              </div>
            </div>
          </div>
          <div className="mask-rising">{/* mask  */}</div>
        </div>
      </div>

      {/* <script>
  $(window).load(function(){
		console.log('ready');
		applyMask();
	});
</script> */}
      {/* MANAGEMENT */}
    </div>
  );
};

export default About;
