import React from 'react';

export default () => {
  return (
    <div className="about-page">
      <div className="wrapper">
        <div className="photo-wrapper">
          <img src="/images/alan.jpeg" alt="Alan Espinet" />
        </div>
        <div className="content">
          <p className="development-note">Application (Urls D-Base) created by Alan Espinet - Developer - <a href="http://alanespinet.com/" target="_blank">alanespinet.com/</a></p>
          <p><span className="bold">Policy note from the author (Alan Espinet):</span> This applicaction is a case of study; a practice project I created  ONLY with the objectives of practicing, learning and studing React JS.</p>
          <p>It is NOT the application’s goal to provide an Online Service on any kind. If a user (or users) find it and want to use it, I am ok with the situation, but I will NOT be responsable of which use those users give to the  application. I will NOT check any user’s recorded URLs unless someone explicitly contacts me through my website and makes me know that something could be wrong.</p>
        </div>
      </div>
    </div>
  );
};
