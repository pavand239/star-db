import React from "react";
import {Col, Row, Jumbotron} from "react-bootstrap";
import {
    PersonDetail,
    PlanetDetail, 
    StarshipDetail,
    PeopleList,
    PlanetsList,
    StarshipsList
    } from '../sw-components'
import "./content.css";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";

export default class Content extends React.Component {
    swapi = new SwapiService();
    // resourceFunctions={                         
    //     // object contain functions to get data from api
    //     // and render-function for list for each resource
    //     'people':{getData:this.swapi.getAllPeople,
    //               selectListItemValue:({name,params:[birthYear,gender]})=>(
    //                   `${name.value} (${gender.value}, ${birthYear.value})`
    //                 )},
    //     'planets':{getData:this.swapi.getAllPlanets,
    //                selectListItemValue:({name,params:[population]})=>(
    //                     `${name.value} (Population: ${population.value})`
    //                 )},
    //     'starships':{getData:this.swapi.getAllStarships,
    //                  selectListItemValue:({name,params:[manufacturer]})=>(
    //                     `${name.value} ( ${manufacturer.value})`
    //                 )},
    // }
    state = {
        getData:null,
        itemId:null,
        error:false
    }
    handlerOnSelectItem=(id)=>{
        this.setState({
            itemId:id
        });
        console.log(id);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.resource !== this.props.resource) {
            this.setState({
                selectedItem:null
            })
        }
    }
    componentDidCatch(){
        this.setState({
            error:true
        });
    }
    render() {
        let {resource} = this.props,
            {itemId, error} = this.state;
            // {getData, selectListItemValue}=this.resourceFunctions[resource];
            
        if (error) {
            return (
                <Jumbotron className='bg-dark mt-3 rounded d-flex' >
                    <ErrorIndicator />
                </Jumbotron>
            )
        }
        
        return (
            <Row bg={'dark'} className="mt-3">
                    <Col md={4}>
                        <PlanetsList 
                                    onSelectItem = {this.handlerOnSelectItem}
                                    selectListItemValue={(item)=>`${item.name}`} />
                    </Col>
                    <Col md={8}>
                        <Jumbotron className='bg-dark rounded d-flex '>  
                            {itemId===null?<h4>Select item from list</h4>:
                            <PlanetDetail id={itemId} />}
                        </Jumbotron>
                </Col>
            </Row>
        )
    }
}