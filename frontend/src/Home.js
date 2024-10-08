import React from 'react';
import background from './assets/background.jpg';  // Import home background image

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <h1>Welcome to the Home Page!</h1>
    </div>
  );
};

export default Home;
