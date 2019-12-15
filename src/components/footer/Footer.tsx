import React, { useState, useEffect } from "react";
import "./footer.scss";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";

const Footer = () => {
  const [quote, setQuote] = useState({
    text: "",
    author: ""
  });

  const date = new Date();
  const year = date.getFullYear();

  const getQuoteOfTheDay = async () => {
    try {
      const data = await fetch("http://quotes.rest/qod.json");
      const quotData = await data.json();
      console.log(quotData.contents.quotes[0]);
      setQuote({
        text: quotData.contents.quotes[0].quote,
        author: quotData.contents.quotes[0].author
      });
      return quotData;
    } catch (err) {
      // void block
    }
  };

  useEffect(() => {
    getQuoteOfTheDay();
  }, []);

  console.log(quote);

  return (
    <footer className="footer">
      {quote.text.length > 0 && (
        <div className="quote-container">
          <div className="quote">
            “{quote.text}”{" "}
            {quote.author && <span className="author">{quote.author}</span>}
          </div>
        </div>
      )}
      <div className="social-container">
        Follow Me
        <a className="social-links" href="https://twitter.com/PVasylkivskyi">
          <img className="social" src={twitter} alt="twitter icon" />
        </a>
        <a
          className="social-links"
          href="https://www.facebook.com/pasha.vasylkivskiy"
        >
          <img className="social" src={facebook} alt="facebook icon" />
        </a>
      </div>
      <div className="date">{year}</div>
    </footer>
  );
};

export default Footer;
