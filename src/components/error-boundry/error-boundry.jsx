import React from "react";
import PropTypes from "prop-types";

import ErrorIndicator from "../error-indicator";
import { Jumbotron } from "react-bootstrap";

export default class ErrorBoundry extends React.Component {
    state={
        hasError: false
    }
    componentDidCatch() {
        this.setState({
            hasError:true
        });
    }
    static propTypes = {
        children: PropTypes.node
    }
    render (){
        if (this.state.hasError){
            return (
                <Jumbotron className='bg-dark mt-3 rounded d-flex' >
                    <ErrorIndicator />
                </Jumbotron>
            )
        }
        return this.props.children
    }
    
}
