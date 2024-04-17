import React from "react";
import "../css/MainContent.css"; // Import the CSS file for styles
import emblem from "../images/emblem.png";
import police from "../images/police.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowDownAZ,faArrowDownZA} from '@fortawesome/free-solid-svg-icons';
function MainContent() {
  return (
    <div className="main-content mt-8 mb-8 ml-6">
      <div className="content-wrapper">
        <div className="logo-section">
          <img src={emblem} alt="" className="logo"/>
          <img src={police} alt="" className="police-image ml-2" />
          <h1 className="police-title text-2xl w-80 font-semibold">Rajasthan police</h1>
        </div>

        <div className="action-section">
          <div className="buttons-section flex items-center ">
            {/* buttons */}
            <FontAwesomeIcon icon={faArrowDownAZ} className="mr-3 bg p-3 rounded-lg" />
            <FontAwesomeIcon icon={faArrowDownAZ} className="mr-3 bg p-3 rounded-lg" />
          </div>

          <div className="chief-minister-section">
            <img src="bhajan_lal.webp" alt="" className="cm-image" />
            <h2 className="cm-info font-semibold">
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
