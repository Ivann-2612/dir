
import Carousel from "./Carousel";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleAd } from "../service";

const SingleJoinUs = () => {

    const [cards, setCards] = useState([]);
    const { id } = useParams();
  
    useEffect(() => {
     
        getSingleAd(id).then((res) => {
        setCards(res.data.data);
      });
      window.scrollTo(0,0)
   
    }, [id]);
  return (
    <div>
      <Carousel />
      <div className="container positions ng-scope">
        <h2 className="ng-binding">Automation QA Analyst</h2>

        <div className="wysiwig" dangerouslySetInnerHTML={{__html: cards.content}}>
            </div>

        <div className="row d-flex justify-content-around">
          <h2>Apply now</h2>
          <form
            className="form-horizontal col-sm-6 col-sm-offset-3 ng-pristine ng-invalid ng-invalid-required ng-valid-email"
            name="form"
            noValidate=""
            encType="multipart/form-data"
          >
            <div className="form-group">
              <label htmlFor="name" className="control-label col-sm-2">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your first and last name"
                  className="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required"
                  required=""
                />
                <div className="error-message animated fadeIn ng-hide">
                  <span ng-show="form.clientName.$error.required">
                    Tell us your name
                  </span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="control-label col-sm-2">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control ng-pristine ng-untouched ng-valid-email ng-invalid ng-invalid-required"
                  id="email"
                  placeholder="Enter your email"
                  name="clientEmail"
                  required=""
                />
                <div className="error-message animated fadeIn ng-hide">
                  <span ng-show="form.clientEmail.$error.required">
                    Tell us your email
                  </span>
                  <span
                    ng-show="form.clientEmail.$error.email"
                    className="ng-hide"
                  >
                    This is not a valid email
                  </span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="col-sm-2 control-label">
                CV
              </label>
              <div className="col-sm-10">
                <input
                  type="file"
                  className="form-control ng-pristine ng-untouched ng-valid"
                  id="file"
                  name="clientFile"
                />
                <p className="help-block">File must be smaller than 5MB</p>
              </div>
            </div>

            <div className="form-group">
              <label
                htmlFor="privacynotice"
                className="control-label col-sm-2"
              ></label>
              <div className="col-sm-10">
                <p className="help-block">
                  <input
                    type="checkbox"
                    className="form-control"
                    id="privacynotice"
                    placeholder=""
                    name="clientPrivacyNotice"
                    required=""
                  />
                  &nbsp; I have read and accepted Finbet's{" "}
                  <a href="/#/privacynotice">Privacy Notice</a>
                </p>
                <div
                  className="error-message animated fadeIn ng-hide"
                  ng-show="form.$submitted || form.clientPrivacyNotice.$touched"
                >
                  <span ng-show="form.clientPrivacyNotice.$error.required">
                    Please check the box above to confirm that you've read and
                    accepted our Privacy Notice
                  </span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-8 col-sm-offset-2 col-xs-12 info-message"></div>
            </div>

            <div className="form-group  d-flex justify-content-around">
              <div className="col-sm-4 col-sm-offset-4 col-xs-12">
                <button
                  type="submit"
                  className="btn btn-default blue skewed"
                  value="Apply"
                  ng-disabled="btnFlag"
                >
                  Apply
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleJoinUs;
