/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable max-len */
import React from 'react';
import './about.scss';
import Flow from '../../images/flow.jpg';

const About: React.FC = () => (
  <div className="new-post-container">
    <h1>About</h1>
    <div className="content">
      <img src={Flow} alt="The reaver flow" />
      <p>Welcome to &rdquo;Inside the flow&rdquo;. My name is Pavlo. I&apos;m the author of this blog.</p>
      <p>An idea to create the blog came to me one day when I had a walk to my job. I&apos;m always walk to work for about one hour. And some times in my head born thoughts. Every time it happens I want to write it down.</p>
      <p>I&apos;m a web developer and to become a professional I need to constantly improve my programming skills and I decided to create this project. Simultaneously, I will practice writing code and will have the opportunity to save my thoughts.</p>
      <p>The second reason for the creation of this project was English. English is not my native language. I&apos;m from Ukraine. And I want to practice my English skills. I think that writing is a good choice. I hope you will forgive my grammatical errors 😇.</p>
      <p>
The title &rdquo;Inside the flow&rdquo; means for me next. When people start to think about something they fall into the whirlpool of different thoughts and sometimes I catch myself on the thought that I&apos;m in a state of something like a meditation. Psychologist Mihaly Csikszentmihalyi&apos;s called thi state as a flow. And in my blog I&apos;ll share my thoughts that appearing from inside this state. I hope you will enjoy it.
      </p>
    </div>
  </div>
);

export default About;
