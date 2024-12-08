import React from "react";

function NewsLetterSection() {
  return (
    <div className="footer-top">
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
      <div className="contact-info">
        <h4>CONTACT US</h4>
        <p>+44 221 133 5360</p>
        <p>customercare@mettamuse.com</p>
        <h4>CURRENCY</h4>
        <p>
          <span role="img" aria-label="US Flag">
            🇺🇸
          </span>
          USD
        </p>
        <p>
          Transactions will be completed in Euros and a currency reference is
          available on hover.
        </p>
      </div>
    </div>
  );
}

export default NewsLetterSection;
