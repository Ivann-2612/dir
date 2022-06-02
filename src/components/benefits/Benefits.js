import React from "react";
import Carousel from "../../pages/Carousel";
import {Link} from 'react-router-dom'

const Benefits = () => {
  return (
    <div>
      <Carousel />
      <div ng-view="" className="main-content ng-scope" autoscroll="true">
        <div className="container services ng-scope">
          <div className="row">
            <h1 className="col-lg-12 col-md-12 col-sm-8 col-xs-12 links ng-binding">
              Services/Benefits
            </h1>

            <div className="col-lg-10 col-md-9 col-sm-12 col-xs-12">
              <p
                className="highlight ng-scope"
                data-animation="fadeInLeft"
                axnimate-scroll="true"
              >
                Finbet’s existing clients can count on:
              </p>
              <p className="ng-scope"></p>
              <ul
                data-animation="fadeInLeft"
                animate-scroll="true"
                className="ng-scope animated fadeInLeft"
                style={{ visibility: "visible" }}
              >
                <li>
                  Maximizing IT investment through the consolidation of
                  maintenance and support activities, which allows for increased
                  business productivity
                </li>
                <li>
                  Minimizing services downtime through constant (24/7)
                  monitoring of systems, leading to improved operational
                  performance and increased revenues.
                </li>
                <li>
                  Optimized platform efficiency, capacity, and availability
                  driven by operational data analytics, as well as proactive
                  detection of service degradation and performance slowdowns
                  prevention with the use of events correlation and trending
                  analytics
                </li>
                <li>
                  Overall reduction in time-to-market, programme risk and cost
                  to the business as well as long-term certainty
                </li>
              </ul>
              <p className="ng-scope"></p>
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

export default Benefits;
