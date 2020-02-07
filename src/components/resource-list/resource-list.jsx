import React from "react";
import { Card, ListGroup } from "react-bootstrap";

export const ResourceList = ({data, selectListItemValue, onSelectItem}) => {
    let list = null,
        listItems = data.map((item) => {
            let value=selectListItemValue(item);
            return (
                <ListGroup.Item 
                    key = {item.id}
                    onClick = {()=>{onSelectItem(item.id)}}>
                    {value}
                </ListGroup.Item>
            )});
    list = <ListGroup>{listItems}</ListGroup>;
    return (
        <Card className='bg-dark rounded mb-3'>
            {list}
        </Card>
        )
}
