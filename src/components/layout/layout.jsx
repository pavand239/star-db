import React from "react";
import PropTypes from "prop-types";

export const Layout = (props) => (
    <div className='container-md'>
        {props.children}
    </div>
)

Layout.propTypes = {
    children: PropTypes.node
}