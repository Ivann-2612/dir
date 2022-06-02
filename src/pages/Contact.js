import React from "react";


const Contact = () => {
  return (
    <div>
      <div id="map" className="apply-mask">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1415.5728315265426!2d20.4704703!3d44.79822!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a700b53605531%3A0x70669276de521e34!2sFinbet!5e0!3m2!1sen!2srs!4v1514115501232"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: "0" }}
          title="Maps"
          allowFullScreen
        ></iframe>{" "}
        <div className="mask-rising mask-bottom">{/* mask */}</div>
      </div>
      <div className="container contact ng-scope">
        <h1 className="title">Contact us</h1>

        <div className="row">

          <form
            className="form-horizontal col-sm-8 col-sm-pull-4"
            name="form"
            noValidate
            ng-submit="form.$valid && submitForm(client)"
            data-animation="fadeInLeft"
            animate-scroll="true"
            encType="multipart/form-data"
          >
            <div className="form-group">
              <label htmlFor="name" className="col-sm-4 control-label">
                Name
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your first and last name"
                  name="clientName"
                  required
                />
                <div className="error-message animated fadeIn">
                  <span>Tell us your name</span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="col-sm-4 control-label">
                Email
              </label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  name="clientEmail"
                  required
                />
                <div className="error-message animated fadeIn">
                  <span>Tell us your email</span>
                  <span>This is not a valid email</span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="col-sm-4 control-label">
                Subject
              </label>
              <div className="col-sm-8">
                <select
                  className="form-control"
                  id="subject"
                  name="emailSubject"
                  placeholder="Choose the subject"
                  required
                >
                  <option>Job application</option>
                  <option>Suggestion</option>
                  <option>Cooperation proposal</option>
                  <option>Other</option>
                </select>
                <div className="error-message animated fadeIn">
                  <span>Please select the subject of your email</span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="mail-content" className="col-sm-4 control-label">
                Enter your text here
              </label>
              <div className="col-sm-8">
                <textarea
                  className="form-control"
                  rows="15"
                  name="emailContent"
                  id="mail-content"
                  required
                ></textarea>
                <div className="error-message animated fadeIn">
                  <span>Please enter the email body</span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label
                htmlFor="privacynotice"
                className="control-label col-sm-2 d-flex justify-content-center"
              ></label>
              <div className="col-sm-8 col-sm-offset-2">
                <p className="help-block">
                  <input
                    type="checkbox"
                    cxlass="form-control"
                    id="privacynotice"
                    placeholder=""
                    name="clientPrivacyNotice"
                    required
                  />
                  &nbsp; I have read and accepted Finbet's{" "}
                  <a href="/#/privacynotice">Privacy Notice</a>
                </p>
                <div className="error-message animated fadeIn">
                  <span>
                    Please check the box above to confirm that you've read and
                    accepted our Privacy Notice
                  </span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-8 col-sm-offset-4 col-xs-12 info-message"></div>
            </div>

            <div className="form-group">
              <div className="col-sm-8 col-sm-offset-4 col-xs-12">
                <input
                  type="submit"
                  className="btn btn-default blue skewed"
                  value="Send us a message"
                />
                {/* <br /> */}
                {/* <br />
		                     <button className="btn btn-default blue skewed" ng-disabled="btnFlag" ng-click="form.$valid && submitForm(client)">batn</button> */}
              </div>
            </div>
          </form>

              <div
                id="address"
                className="col-sm-3 col-sm-offset-1 col-sm-push-8"
                data-animation="fadeInRight"
                animate-scroll="true"
              >
                <blockquote>
                  <address>
                    <strong>Finbet d.o.o.</strong>
                    <br /> Mutapova 7
                    <br /> 11000 Belgrade, Serbia
                    <br /> Phone: +381 11 41 19 936
                    <br /> Fax: +381 11 71 50 141
                    <br /> Vat: 108022708
                    {/* <br /> <a>office finbet.rs</a> */}
                  </address>
                </blockquote>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
