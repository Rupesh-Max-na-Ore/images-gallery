import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Control placeholder="Search for new image..." />

                            </Col>
                            <Col>
                                <Button variant="primary">
                                    Search
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Search;