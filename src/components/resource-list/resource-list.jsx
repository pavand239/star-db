import React from "react";
import PropTypes from "prop-types";

import { Card, ListGroup } from "react-bootstrap";
import ErrorBoundry from "../error-boundry";


export const ResourceList = ({data, children, onSelectItem}) => {
    let list = null,
        listItems = data.map((item) => {
            return (
                <ListGroup.Item 
                    key = {item.id}
                    onClick = {()=>{onSelectItem(item.id)}}>
                    {children(item)}
                </ListGroup.Item>
            )});
    list = <ListGroup>{listItems}</ListGroup>;
    return (
        <Card className='bg-dark rounded mb-3'>
            <ErrorBoundry>
                {list}
            </ErrorBoundry>
        </Card>
        )
}

ResourceList.defaultProps = {
    onSelectItem: () => {}
}

ResourceList.propTypes = {
    children: PropTypes.func.isRequired,
    onSelectItem: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
}
