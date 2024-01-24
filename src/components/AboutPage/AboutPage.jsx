import React from 'react';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container" >
      <div className="about-headline">
        <h1>About Page</h1>
        <h3>Where to find me</h3>
        <h4>LinkedIn: <a href="https://www.linkedin.com/in/brocknelson/">/brocknelson</a></h4>
        <h4>GitHub: <a href="https://github.com/IFarmYouEat">/IFarmYouEat</a></h4>
      </div>
      <div>
        <h3>Technologies used:</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React.js</li>
          <li>Redux.js</li>
          <li>Redux-Saga</li>
          <li>Node.js</li>
          <li>PostgresSQL</li>
          <li>Git</li>
          <li>Github</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
