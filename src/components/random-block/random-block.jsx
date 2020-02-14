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
        <Jumbotron bg='dark' className='d-flex flex-column justify-content-center my-3 '>
            <h2 className='text-center mb-4'>Welcome to Star DB App</h2>
            <PlanetDetail itemId={itemId} />
        </Jumbotron>
    )
}
RandomBlock.propTypes = {
    onClose: PropTypes.func.isRequired
}