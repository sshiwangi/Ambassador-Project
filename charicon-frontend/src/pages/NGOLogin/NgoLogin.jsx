import React from "react";
import "./ngologin.css";

function NgoLogin() {
  return (
    <section className="outer">
      <form>
        <div className="container-login">
          <div id="section1">
            <div className="text">
              <h2>Fill your details</h2>
            </div>
            <div className="form-row">
              <label htmlFor="ngoname" className="required">NGO Name</label>
              <input type="text" id="input1" border="black" />
            </div>
            <div className="form-row">
              <label htmlFor="username">Username</label>
              <input type="text" required id="username" />
            </div>
            <div className="description">
              <label htmlFor="description" className="required">Description</label>
              <input
                type="text"
                id="input2"
                placeholder="Tell us something brief about the NGO (Max 200 characters)"
                maxLength={200}
        required
              />
            </div>
            <div className="form-row">
              <label htmlFor="country" className="required">Country</label>
              <input
                type="text"
                id="input2"
                placeholder="Which country is the NGO situated?"
              />
            </div>
            <div className="form-row">
              <label htmlFor="city" className="required">City</label>
              <input
                type="text"
                id="input2"
                placeholder="Which city is the NGO situated?"
              />
            </div>
            <div className="form-row">
              <label htmlFor="required" className="required">Password</label>
              <input type="password" id="input2" />
            </div>
            <div className="submit">
              <button type="submit">Next</button>
            </div>
          </div>

          <div id="section2">
            <div className="email">
              <label htmlFor="required">Email</label>
              <input type="text" id="email" />
            </div>
            <div className="state">
              <label htmlFor="required">State</label>
              <input type="text" id="state" />
            </div>
            <div className="pincode">
              <label htmlFor="required">Pin Code</label>
              <input type="text" id="input2" />
            </div>
            <div className="form-row">
              <label htmlFor="required">NGO Logo</label>
              <input type="text" id="input2" />
            </div>
            <div className="form-row">
              <label htmlFor="input2">Website Link</label>
              <input type="text" id="input2" />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default NgoLogin;
