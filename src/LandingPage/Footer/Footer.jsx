import React, { memo } from "react";
import "./Footer.css";
import Image from "next/image";
import Gpay from "../../Local/Gpay.png";
import Visa from "../../Local/mastercard.png";
import Paypal from "../../Local/paypal.png";
import Amex from "../../Local/Amex.png";
import Applepay from "../../Local/Applepay.png";
import Upay from "../../Local/upay.png";

const paymentIcons = [
  { src: Gpay, alt: "Google Pay logo" },
  { src: Visa, alt: "Visa logo" },
  { src: Paypal, alt: "Paypal logo" },
  { src: Amex, alt: "Amex logo" },
  { src: Applepay, alt: "Apple Pay logo" },
  { src: Upay, alt: "U Pay logo" },
];

const Footer = memo(() => (
  <footer className="footer">
    <div className="footer-top">
      <NewsletterSection />
      <ContactInfo />
    </div>
    <hr />
    <div className="footer-bottom">
      <div className="metta-muse">
        <h4>mettā muse</h4>

        <ul>
          <li>About Us</li>
          <li>Stories</li>
          <li>Artisans</li>
          <li>Boutiques</li>
          <li>Contact Us</li>
          <li>EU Compliances Docs</li>
        </ul>
      </div>
      <QuickLinks />
      <div>
        <FollowUs />
        <PaymentIcons />
      </div>
    </div>
    <p className="copyright">
      Copyright © 2023 mettamuse. All rights reserved.
    </p>
  </footer>
));
Footer.displayName = "Footer";

const NewsletterSection = memo(() => (
  <div className="newsletter">
    <h4>BE THE FIRST TO KNOW</h4>
    <p>Sign up for updates from mettā muse.</p>
    <div className="newsletter-input">
      <input
        type="email"
        placeholder="Enter your e-mail..."
        aria-label="Email"
      />
      <button>SUBSCRIBE</button>
    </div>
  </div>
));
NewsletterSection.displayName = "NewsletterSection";

const ContactInfo = memo(() => (
  <div className="contact-info">
    <h4>CONTACT US</h4>
    <p>+44 221 133 5360</p>
    <p>customercare@mettamuse.com</p>
    <h4>CURRENCY</h4>
    <p>
      <span role="img" aria-label="US Flag">
        🇺🇸
      </span>{" "}
      USD
    </p>
    <p>
      Transactions will be completed in Euros and a currency reference is
      available on hover.
    </p>
  </div>
));
ContactInfo.displayName = "ContactInfo";

const QuickLinks = memo(() => (
  <div className="quick-links">
    <h4>QUICK LINKS</h4>
    <ul>
      <li>Orders & Shipping</li>
      <li>Join/Login as a Seller</li>
      <li>Payment & Pricing</li>
      <li>Return & Refunds</li>
      <li>FAQs</li>
      <li>Privacy Policy</li>
      <li>Terms & Conditions</li>
    </ul>
  </div>
));
QuickLinks.displayName = "QuickLinks";

const PaymentIcons = memo(() => (
  <div className="payment-icons">
    {paymentIcons.map((icon, index) => (
      <Image
        key={index}
        src={icon.src}
        alt={icon.alt}
        width={20}
        height={20}
        className="payment-icon"
        loading="lazy"
      />
    ))}
  </div>
));
PaymentIcons.displayName = "PaymentIcons";

const FollowUs = memo(() => (
  <div className="follow-us">
    <h4>FOLLOW US</h4>
    <div className="social-icons">
      <span>Instagram Icon</span>
      <span>LinkedIn Icon</span>
    </div>
  </div>
));
FollowUs.displayName = "FollowUs";

export default Footer;
