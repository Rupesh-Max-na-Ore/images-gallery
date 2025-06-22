import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Welcome = () => (
  <Container className="py-5 my-5 bg-light rounded text-center shadow">
    <h1 className="display-4">Images Gallery</h1>
    <p className="lead">
      This is a simple application that retrieves photos using the Unsplash API.
      To get started, enter any search term in the input field.
    </p>
    <p>
      <Button
        variant="primary"
        href="https://unsplash.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn more
      </Button>
    </p>
  </Container>
);

export default Welcome;
