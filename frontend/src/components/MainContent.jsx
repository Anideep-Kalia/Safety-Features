import React from "react";
import "../css/MainContent.css"; // Import the CSS file for styles

function MainContent() {
  return (
    <div className="main-content">
      <div className="content-wrapper">
        <div className="logo-section">
          <img src="emblem.png" alt="" className="logo"/>
          <img src="police.png" alt="" className="police-image" />
          <h1 className="police-title">Rajasthan police</h1>
        </div>

        <div className="action-section">
          <div className="buttons-section">
            {/* buttons */}
          </div>

          <div className="chief-minister-section">
            <img src="bhajan_lal.webp" alt="" className="cm-image" />
            <h2 className="cm-info">
              Shri Bhajan Lal Sharma <br />
              Hon'ble Chief Minister of Rajasthan
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
