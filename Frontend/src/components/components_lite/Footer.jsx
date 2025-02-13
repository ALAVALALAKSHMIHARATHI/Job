import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* Footer for the current page */}
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#72Bcd4",
        }}
      >
        <p>© 2024 Lakshmi Harathi. All rights reserved.</p>
        <p>
          Powered by <a href="https://github.com/ALAVALALAKSHMIHARATHI">Lakshmi Harathi</a>
        </p>
        <p>
          <Link to={"/PrivacyPolicy"}>Privacy Policy </Link> |
          <Link to={"/TermsofService"}> Terms of Service</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
