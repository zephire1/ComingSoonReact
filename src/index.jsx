import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import Particles from '../node_modules/particlesjs/dist/particles'
import './styles/global.sass';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <canvas className="background" />
  </React.StrictMode>,
  document.getElementById('root')
);

window.onload = function () {
  Particles.init ({
    selector: '.background',
    maxParticles: 250,
    color: '#ffffff'
  });
};

reportWebVitals();