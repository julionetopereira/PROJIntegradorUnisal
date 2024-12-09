import React from 'react';
import Navbar from '../../components/header/header';
import Footer from '../../components/footer/footer';
import UserProfile from '../../components/userProfile/userProfile';

function App() {
  return (
    <div>
      <Navbar />
      <UserProfile />
      <Footer />
    </div>
  );
}

export default App;
