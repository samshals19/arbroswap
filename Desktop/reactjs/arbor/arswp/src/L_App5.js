import React from "react";
import Aside from "./Components/Aside";
import Launchpad_create_sale from "./Components/Topnavbar_section/Launchpad_create_sale";
import Locker_token from "./Components/Topnavbar_section/Locker_token";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Aside />
        {/* content1 */}

        {/*  */}
        <div className="form-block">
          <Locker_token />

          <Topnavicon2 />

          <div className="clear mar-22"></div>
          {/* content1  */}

          <div className="form_section_radio">
            <div className="inner_form_seting">
              <form>
                <p>Choose Presale Type</p>
                <div class="label fl-left clear">
                  <input
                    type="radio"
                    className="fl-right"
                    id="Standard"
                    name="Presale"
                    value="Standard"
                  />
                   {" "}
                  <label for="html" className="fl-left">
                    Standard
                  </label>
                  <br />
                </div>
                <div class="label fl-right ">
                  <input
                    type="radio"
                    className="fl-right"
                    id="html"
                    name="Presale"
                    value="HTML"
                  />
                   {" "}
                  <label for="html" className="fl-left">
                    Fairlaunch
                  </label>
                  <br />
                </div>
                {/* <div class="label fl-left">
                  <input
                    type="radio"
                    className="fl-right"
                    id="html"
                    name="HTMl"
                    value="HTML"
                  />
                   {" "}
                  <label for="html" className="fl-left">
                    Private
                  </label>
                  <br />
                </div> */}
              </form>
              <div className="clear"></div>
              <div className="L_app5_section_points">
                <ul>
                  <li>Best for tokens with rewards.</li>
                  <li>Withdraw rewards anytime.</li>
                </ul>
              </div>
              <div className="clear"></div>
              <div className="app6_form_section_button fl-right">
                <button>Next</button>
              </div>
            </div>
          </div>
        </div>

        <div className="clear"></div>
      </div>
    );
  }
}

export default Home;