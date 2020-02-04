import React from "react";
import { Card, ListGroup } from "react-bootstrap";

export default class ResourceList extends React.Component {
    render(){
        return (
            <Card className='bg-dark rounded mb-3'>
                <ListGroup>
                    <ListGroup.Item><a href='#'>Luke Skywalker</a></ListGroup.Item>
                    <ListGroup.Item><a href='#'>Darth Vader</a></ListGroup.Item>
                    <ListGroup.Item><a href='#'>R2-D2</a></ListGroup.Item>
                </ListGroup>
            </Card>
        )
    }
}