import React, { useState, useEffect } from 'react';
import './footer.scss';
import { FaTwitter, FaFacebook } from 'react-icons/fa';


const Footer = () => {
  const [quote, setQuote] = useState({
    text: '',
    author: '',
  });

  const date = new Date();
  const year = date.getFullYear();

  const getQuoteOfTheDay = async () => {
    try {
      // eslint-disable-next-line no-undef
      const data = await fetch('http://quotes.rest/qod.json');
      const quotData = await data.json();
      setQuote({
        text: quotData.contents.quotes[0].quote,
        author: quotData.contents.quotes[0].author,
      });
      return quotData;
    } catch (err) {
      // void block
    }
  };

  useEffect(() => {
    getQuoteOfTheDay();
  }, []);

  return (
    <footer className="footer">
      {quote.text.length > 0 && (
        <div className="quote-container">
          <div className="quote">
            “
            {quote.text}
”
            {' '}
            {quote.author && <span className="author">{quote.author}</span>}
          </div>
        </div>
      )}
      <div className="social-container">
        Follow Me
        <a className="social-links" href="https://twitter.com/PVasylkivskyi">
          <FaTwitter className="social" />
        </a>
        <a
          className="social-links"
          href="https://www.facebook.com/pasha.vasylkivskiy"
        >
          <FaFacebook className="social" />
        </a>
      </div>
      <div className="date">{year}</div>
    </footer>
  );
};

export default Footer;
