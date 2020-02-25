import React from 'react';

import Navbar from '../navbar';

const listNav = ['about', 'products'];

const About = () => (
  <div>
    <Navbar listNav={listNav} />
    <h1>About</h1>
  </div>
);

export default About;
