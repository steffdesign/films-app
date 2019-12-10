import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/index';
import Nav from '../../components/Nav/index';

const NotFound = () => (
  <div>
     <Nav/>>   
      <div className="col-12 text-center m-8">
          <h1> Sorry </h1>
          <p> We did not find this page. </p>
          <Link to = "/"> Here you can go back to the Home. </Link>
      </div>
      <Footer />
  </div>
);

export default NotFound;