import React from "react";
import {Col, Row} from "react-bootstrap";
import ResourceList from '../resource-list';
import ResourceDetail from '../resource-detail'

export default class Content extends React.Component {
    render() {
        return (
           <Row bg={'dark'}>
               <Col md={4}>
                    <ResourceList />
               </Col>
               <Col md={8}>
                    <ResourceDetail />
               </Col>
           </Row>
        )
    }
}