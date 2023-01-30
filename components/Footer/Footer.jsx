import React from "react";
import { GmailIcon } from "../Icons";
import { FooterStyles } from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer-items">
        <div className="copyrigth">
          <p className="text-copy">2023 © Dixcode - Themesbrand</p>
        </div>
        <div className="social-media">
          <>
            <div
              onClick={() => window.open("mailto:contacto@dixcode.com.mx", "_newtab")}
              className="social-items"
            >
              <GmailIcon />
            </div>
          </>
        </div>
      </div>
    </FooterStyles>
  );
};
