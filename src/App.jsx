import React from 'react'
import Header from './component/Header';
import RandomUsers from './component/RandomUsers';
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <RandomUsers />
    </div>
  );
};

export default App;