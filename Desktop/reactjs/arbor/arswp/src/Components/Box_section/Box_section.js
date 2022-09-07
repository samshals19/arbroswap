import React from "react";

export default function Box_section() {
  return (
    <>
      <div className="L_app2_In_box">
        <div>
          <div class="box_section_img1 fl-left">
            <img src="/img/GUSD.png" alt="" />
          </div>
          <div class="box_section_name1 fl-left">
            <span className="box_section_name_1">GUSD</span>
            <br />
            <span className="box_section_name_2">Gnosis-USD</span>
          </div>
          <div class="box_section_name2 fl-left">
            <span className="box_section_amount_1">
              Amount
              <img src="/img/Ques.png" alt="" />
            </span>
            <br />
            <span className="box_section_amount_2">1,000,454</span>
          </div>
          <div class="box_section_img2 fl-right">
            <img src="/img/arrow-left.png" alt="" />
          </div>
          <div class="box_section_name3 fl-right">
            <span className="box_section_unlocks_1">
              Unlocks on <img src="/img/Ques.png" alt="" />
            </span>
            <br />
            <span className="box_section_unlocks_2">2022-09-08</span>
          </div>
        </div>
      </div>
    </>
  );
}