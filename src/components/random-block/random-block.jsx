import React from "react";
import {Jumbotron} from "react-bootstrap";
import Spinner from "../spinner";
import PlanetDetail from "../planet-detail";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import './random-block.css';

export default class RandomBlock extends React.Component {
    swapi = new SwapiService();
    
    state = {
        planet:{},
        isLoading:true,
        error:false
    }
    componentDidMount() {
        this.interval = setInterval(this.updateBlock,6000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            isLoading:false
        });
    }
    onError = (err) => {
        this.setState({
            error:true
        });
    }
    updateBlock=()=> {
        let id = Math.ceil(Math.random()*100%61);     
        this.swapi.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
        console.log('update');
    }

    render() {
        let {planet, isLoading, error} = this.state,
            {onClose} = this.props,
            spinner = isLoading && !error?<Spinner />:null,
            errorIndicator = error?<ErrorIndicator />:null,
            planetContent = !isLoading && !error?<PlanetDetail {...planet}/>:null;
        return (
            <Jumbotron bg='dark' className='d-flex my-3 justify-content-between'>
               {spinner}
               {errorIndicator}
               {planetContent}
                <button type="button" className="close align-self-start" 
                    onClick={onClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </Jumbotron>
        )
    }
}