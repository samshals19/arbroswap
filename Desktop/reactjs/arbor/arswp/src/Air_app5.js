import React from "react";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import Aside from "./Components/Aside";
import Air_arbor from "./Components/Topnavbar_section/Air_arbor";
import Airdrop_arbor2 from "./Components/Middle_contain_sec/Airdrop_arbor2";
import Airdrops_arbor_right_notime from "./Components/Right_sec_components/Airdrops_arbor_right_notime";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Aside />
        {/* content1 */}

        {/*  */}
        <div className="form-block">
          <Air_arbor />

          <Topnavicon2 />

          <div className="clear mar-22"></div>
          {/* content1  */}
          {/* <Locker_coin_sec /> */}
          <Airdrop_arbor2 />
          {/* content2 */}
          <Airdrops_arbor_right_notime />
        </div>

        <div className="clear"></div>
      </div>
    );
  }
}

export default Home;