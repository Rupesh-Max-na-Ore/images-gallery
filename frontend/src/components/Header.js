import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';
const navbarStyle = {
  backgroundColor: '#eeeeee',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} data-bs-theme="light">
      <Container>
        <Logo alt={title} style={{ maxWidth: '12rem', maxHeight: '2rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
