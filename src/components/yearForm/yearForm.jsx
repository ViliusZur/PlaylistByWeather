import React from "react";
import { Button, Form, Row, Col } from 'react-bootstrap';

export default function YearForm() {
    return(
        <Form>
            <>Optional:</>
            <Row>
                <Col>
                <Form.Group controlId="formBasicYearFrom">
                    <Form.Label>Year from</Form.Label>
                    <Form.Control type="number" placeholder="Enter year" />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formBasicYearTo">
                    <Form.Label>Year to</Form.Label>
                    <Form.Control type="number" placeholder="Enter year" />
                </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" type="submit">
                Generate playlist
            </Button>
        </Form>
    );
}