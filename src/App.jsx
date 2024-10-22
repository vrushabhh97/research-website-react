import React from 'react';
import './App.css';
import github from './assets/github.svg';
import pdf from './assets/pdf.svg';
import EgoVideo from './assets/AI_Team_Compiled_Video.mp4'
import { ABSTRACT, OVERVIEW } from './constants';

const App = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#abstract">Abstract</a></li>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#results">Results</a></li>
            <li><a href="#acknowledgement">Acknowledgement</a></li>
            <li><a href="#citations">Citations</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
      <section id="about" className="section">
  <h2 className="title">Fish2Mesh Transformer:</h2>
  <h2 className="title">3D Human Mesh Reconstruction from Egocentric Vision</h2>

  
  {/* Institution */}
  <p>Santa Clara University</p>

  {/* Logo and Links */}
  <div className="icon-links">
            <a href="/path/to/pdf" target="_blank" rel="noopener noreferrer" className="icon-link">
              <img src={pdf} alt="PDF Icon" className="icon" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="icon-link">
              <img src={github} alt="GitHub Icon" className="icon" />
            </a>
          </div>
          <div className="video-container">
          <iframe
            width="1130" // You can adjust the width
            height="600" // You can adjust the height
            src={EgoVideo}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
</section>


        <section id="abstract" className="section">
          <h2 className="title">Abstract</h2>
          <p className="abstract-content">{ABSTRACT}</p>
        </section>

        <section id="overview" className="section">
          <h2 className="title">Overview</h2>
          <div className="overview_img" >
          <img
          src="Fish2Mesh.png" 
          alt="Overview Illustration" 
          style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
          />
          <img
          src="patch.png" 
          alt="Patch" 
          style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
          />
          </div>
          <p>{OVERVIEW}</p>
        </section>

        <section id="results" className="section">
          <h2 className="title">Results</h2>
          <div className="overview_img" >
          <img
          src="visual.jpg" 
          alt="Visual" 
          style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
          />
          <p className="image-desc">The all models' visual results of four examples from the four datasets. FishVIT is the pose estimation model, thus we shift the joints to obviously observe the visual results. The red is the ground truth and the blue is the results of related models. The third-person view is not used as input for the model; it is provided only to help us better understand the environment and human pose to compare the results.</p>
          </div>
        </section>

        <section id="acknowledgement" className="section">
          <h2 className="title">Acknowledgement</h2>
          <p>Acknowledging contributions and collaborators</p>
        </section>

        <section id="citations" className="section">
          <h2 className="title">Citation</h2>
          <div className="code-block">
            <pre>
              <code>
                {`Test Citations`}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;