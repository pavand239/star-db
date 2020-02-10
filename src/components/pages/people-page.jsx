import React from "react";
import Content from "../content";
import {
    PersonDetail,
    PeopleList
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
                list={<PeopleList onSelectItem={this.handlerOnSelectItem}/>} 
                detail={<PersonDetail itemId={itemId} /> }
            />
        )
    }
}