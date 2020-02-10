import React from "react";
import Content from "../content";
import {
    StarshipDetail,
    StarshipsList
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
                list={<StarshipsList onSelectItem={this.handlerOnSelectItem}/>} 
                detail={<StarshipDetail itemId={itemId} /> }
            />
        )
    }
}