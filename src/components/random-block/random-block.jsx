import React from "react";
import {Jumbotron} from "react-bootstrap";
import {PlanetDetail} from "../sw-components";
import './random-block.css';

export default class RandomBlock extends React.Component {
    state = {
        itemId: Math.ceil(Math.random()*100%61)
    }
    componentDidMount() {
        this.interval = setInterval(this.updateId,6000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    updateId = () => {
        this.setState({
            itemId:Math.ceil(Math.random()*100%61)
        })
    }


    render() {
        return (
            <Jumbotron bg='dark' className='d-flex my-3 justify-content-between'>
                <PlanetDetail itemId={this.state.itemId} />
                <button type="button" className="close align-self-start" 
                    onClick={this.props.onClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </Jumbotron>
        )
    }
}