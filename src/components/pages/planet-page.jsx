import React from "react";
import Content from "../content";
import {
    PlanetDetail,
    PlanetsList
    } from '../sw-components';

export default class PeoplePage extends React.Component {
    state = {
        itemId:null
    }
    handlerOnSelectItem=(id)=>{
        this.setState({
            itemId:id
        });
    }
    render() {
        let {itemId} = this.state;
        return (
            <Content 
                list={<PlanetsList onSelectItem={this.handlerOnSelectItem}/>} 
                detail={<PlanetDetail itemId={itemId} /> }
            />
        )
    }
}