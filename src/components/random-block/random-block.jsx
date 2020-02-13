import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {Jumbotron} from "react-bootstrap";
import {PlanetDetail} from "../sw-components";
import './random-block.css';

export const RandomBlock = (props) => {
    const [itemId, setItemId] = useState(Math.ceil(Math.random()*100%61));

    useEffect(() => {
        let interval = setInterval(updateId,5000);
        return () => {clearInterval(interval)};
    },[]);
    const updateId = () => {
        setItemId(Math.ceil(Math.random()*100%61));
    }

    return (
        <Jumbotron bg='dark' className='d-flex my-3 justify-content-between'>
            <PlanetDetail itemId={itemId} />
            <button type="button" className="close align-self-start" 
                onClick={props.onClose}>
                <span aria-hidden="true">&times;</span>
            </button>
        </Jumbotron>
    )
}
RandomBlock.propTypes = {
    onClose: PropTypes.func.isRequired
}