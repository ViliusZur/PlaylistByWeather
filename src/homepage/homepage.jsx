import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './homepage.css';

export default class Homepage extends React.Component {
  render() {
    return (
      <>
        this is Homepage
        <Link to='/playlist'><Button>Generate</Button></Link>
      </>
    );
  }
}
