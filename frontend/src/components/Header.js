import React from "react";
import { Navbar } from 'react-bootstrap';

const Header = ({ title }) => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Navbar.Brand href="/">{title}</Navbar.Brand>
    </Navbar>
  );
};

export default Header;