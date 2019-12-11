//Home.jsx
import React from 'react';
import '../css/Home.css';
import Carouse from './Carouse';
import Products from './Products';

const Home = () => {
  return (
    <>
      <Carouse />
      <div>
        <Products />
      </div>
    </>
  );
};

export default Home;
