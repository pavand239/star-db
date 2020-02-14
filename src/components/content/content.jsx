import React from "react";
import PropTypes from "prop-types";
import {Col, Row, Jumbotron} from "react-bootstrap";

export const Content = ({list, detail}) => {
    return(
        <Row bg={'dark'} className="mt-3">
            <Col md={4}>
                {list}
            </Col>
            <Col md={8}>
                <Jumbotron className='bg-dark rounded d-flex '> 
                    {detail}
                </Jumbotron>
            </Col>
        </Row>
    )
}

Content.propType = {
    list: PropTypes.node.isRequired,
    detail: PropTypes.node
}