// src/components/Main.tsx
import React from 'react';


const Main = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src="/videos/videoBg.mp4" autoPlay loop muted />
      <div className="content">
        <h1>Welcome</h1>
        <p>To my site.</p>
      </div>
    </div>
  );
};

export default Main;
