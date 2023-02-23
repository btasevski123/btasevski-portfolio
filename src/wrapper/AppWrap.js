import React from "react";
import { NavigationDots, SocialMedia } from "../components";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF, FaRegFilePdf } from "react-icons/fa";
import pdfFile from "../assets/Boris_Tasevski_CV.pdf";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2023 Boris</p>
            <p className="p-text">All rights reserved</p>

            <div className="app__social-footer app__flex">
              <a href="https://github.com/btasevski123?tab=repositories">
                <BsGithub />{" "}
              </a>

              <a href="https://www.linkedin.com/in/boris-tasevski-3a4a38163/">
                <FaLinkedinIn />{" "}
              </a>

              <a href="https://www.facebook.com/boris.tasevski/">
                <FaFacebookF />{" "}
              </a>

              <a href={pdfFile} download="Boris_Tasevski_CV.pdf">
                <FaRegFilePdf />{" "}
              </a>
            </div>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
