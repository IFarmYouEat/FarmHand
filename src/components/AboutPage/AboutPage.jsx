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

        <h5>Javascript</h5><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="60" height="60"/>
        <h5>React</h5> <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="react" width="60" height="60"/>
        <h5>Redux</h5> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="60" height="60"/>
        <h5>Passport</h5><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Passportjs.svg/240px-Passportjs.svg.png" alt="PassportJS" width="60" height="60"/>
        <h5>Material UI</h5> <img src="https://v4.mui.com/static/logo.png" alt="Material UI" width="60" height="60" />
        <h5>Node.js</h5> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="50" height="50"/>
        <h5>Express.js</h5> <img src="https://inapp.com/wp-content/uploads/elementor/thumbs/express-js-01-1-q05uw85vt1jqloiy5k82sfy7tgvysgt1uqld8slsbc.png" alt="express" width="90" />
        <h5>Axios</h5> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Axios_logo_%282020%29.svg/150px-Axios_logo_%282020%29.svg.png" alt="axios" width="60"/>
        <h5>PostgreSQL</h5> <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="postgresql" width="60" height="60"/>
        <h5>HTML</h5> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="60" height="60"/>
        <h5>Postman</h5> <img src="https://cdn.worldvectorlogo.com/logos/postman.svg" alt="postman" width="60" height="60"/>
        <h5>CSS</h5> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="60" />
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
