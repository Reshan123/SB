import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./main.css"

export const About = () => {
  return (
    <div>
      <div className="main_about">
        <div className="hero_about"></div>
        <div className="content_about">
          <h1 className="h_about">About Us</h1>
          <div className="main_content">
            <div className="main_c1">
              <div className="image_1"></div>
              <p>
                IEEE is the world’s largest professional association dedicated
                to advancing technological innovation and excellence for the
                benefit of humanity. IEEE and its members inspire a global
                community through IEEE’s highly cited publications, conferences,
                technology standards, and professional and educational
                activities.
              </p>
          
              <hr />
              <div className="about_icons"></div>
            </div>
            <div className="main_c2">
              <div className="sub_1">
                
                <p>
                  OUR VISION is to be essential for the global technical
                  community and to technical professionals everywhere, and be
                  universally recognized for the contributions of technology and
                  of technical professionals in improving global conditions.
                </p>
              </div>
              <div className="sub_1">
                <p>
                  MISSION of IEEE - IEEE’s core purpose is to foster
                  technological innovation and excellence for the benefit of
                  humanity.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
