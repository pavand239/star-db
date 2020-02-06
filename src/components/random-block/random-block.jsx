import React from "react";
import {Jumbotron} from "react-bootstrap";
import Spinner from "../spinner";
import ResourceDetail from "../resource-detail";
import ErrorIndicator from "../error-indicator";
import './random-block.css';

export default class RandomBlock extends React.Component {
    
    state = {
        item:{},
        isLoading:true,
        error:false
    }
    componentDidCatch(){
        this.onError();
    }
    componentDidMount() {
        this.interval = setInterval(this.updateBlock,6000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    onItemLoaded = (item) => {  //handler for update state after loading item
        this.setState({
            item:item,
            isLoading:false
        });
    }
    onError = (err) => { //handler for Fetch error
        this.setState({
            error:true
        });
    }
    updateBlock=()=> {
        let id = Math.ceil(Math.random()*100%61),
            {getData} = this.props;     
        getData(id).then(this.onItemLoaded).catch(this.onError);
    }


    render() {
        let {item, isLoading, error} = this.state,
            {onClose} = this.props,
            spinner = isLoading && !error?<Spinner />:null,
            errorIndicator = error?<ErrorIndicator />:null,
            planetContent = !isLoading && !error?<ResourceDetail item={item}/>:null;
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