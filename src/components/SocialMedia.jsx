import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF, FaFilePdf } from "react-icons/fa";
import pdfFile from "../assets/Boris_Tasevski_CV.pdf";
const SocialMedia = () => (
  <div className="app__social">
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
      <FaFilePdf />{" "}
    </a>
  </div>
);

export default SocialMedia;
