import React from "react";
import PropTypes from "prop-types";
import { Card, ListGroup } from "react-bootstrap";
import {Link} from "react-router-dom";

import ErrorBoundry from "../error-boundry";

import "./resource-list.css"


export const ResourceList = ({data, children, url, itemId}) => {
    let list = null,
        listItems = data.map((item) => {
            return (
                
                    <Link to={`${url}/${item.id}`}
                          className='text-white'>
                        <ListGroup.Item className={itemId===item.id?'active':''} 
                                        key={item.id} >
                            {children(item)}
                        </ListGroup.Item>
                    </Link>
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
