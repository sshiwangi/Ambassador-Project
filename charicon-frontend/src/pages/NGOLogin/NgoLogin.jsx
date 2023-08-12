import React from 'react'
import './ngologin.css'

function NgoLogin() {
  return (

    <section className="outer">
        <form>
        <div className="container-login">
          <div id ="section1">
                    <div className="form-row">
                        <label htmlFor="input1">NGO Name</label>
                        <input type="text" id="input1" border="black"/>
                    </div>
                    <div className="description">
                        <label htmlFor="input2">Description</label>
                        <input type="text" id="input2" placeholder="Tell us something brief about the NGO" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="input2">Country</label>
                        <input type="text" id="input2" placeholder="Which country is the NGO situated?" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="input2">City</label>
                        <input type="text" id="input2" placeholder="Which city is the NGO situated?" />
                    </div>
                     <div className="form-row">
                        <label htmlFor="input2">Password</label>
                        <input type="password" id="input2" />
                    </div>
                    <div className="submit">
                        <button type="submit">Next</button>
                    </div>
                    </div>

                    <div id ="section2">
                    <div className="form-row">
                        <label htmlFor="input2">Username</label>
                        <input type="text" id="input2" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="input2">Email</label>
                        <input type="text" id="input2" />
                    </div>
                     <div className="form-row">
                        <label htmlFor="input2">State</label>
                        <input type="text" id="input2" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="input2">Pin Code</label>
                        <input type="text" id="input2" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="input2">NGO Logo</label>
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
  )
}

export default NgoLogin
