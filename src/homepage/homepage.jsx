import React from 'react';
import Routes from '../routes';
import './homepage.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class Homepage extends React.Component {
  render() {
    return (
      <>
        this is Homepage
        <Link to='/playlist'><Button>Generate</Button></Link>
        <Routes />
      </>
    );
  }
}
