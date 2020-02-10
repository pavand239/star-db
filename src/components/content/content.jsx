import React from "react";
import {Col, Row, Jumbotron} from "react-bootstrap";

export const Content = (props) => (
    <Row bg={'dark'} className="mt-3">
        <Col md={4}>
            {props.list}
        </Col>
        <Col md={8}>
            <Jumbotron className='bg-dark rounded d-flex '>  
                {props.detail}
            </Jumbotron>
        </Col>
    </Row>
)