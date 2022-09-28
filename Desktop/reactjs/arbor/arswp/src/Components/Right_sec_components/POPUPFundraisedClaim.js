import React from "react";

export default function POPUPFundraisedClaim(props) {
  return (
    <>
      <div className="app10_contain2 fl-right">
        {/* section1 */}

        <div className="contain2_section1 clear">
          <div className="contain2_section1_sub1 fl-left ">{props.cap}</div>
        </div>
        {/* section 2 */}
        <div className="fundmartpbt">
          <div className="contain2_section2_sub1 mgtp4_fair fl-left">
            <img src="/img/fairpopup.png" alt="" srcset="" />
          </div>
          <div className="contain2_section2_sub2 mgtp2 fundclaimed fl-left">
            {props.amt} <span>{props.subamt}</span>{" "}
          </div>
        </div>

        <div className="clear"></div>
        <br />
        <div className="contain3_section clear">
          <div className="contain3_section_middle_fund_popup">
            <button>View Details</button>
          </div>
        </div>
      </div>
    </>
  );
}
