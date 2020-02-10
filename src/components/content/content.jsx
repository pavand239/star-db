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
    render() {
        let {resource} = this.props,
            {itemId} = this.state;
            // {getData, selectListItemValue}=this.resourceFunctions[resource];
            
        return (
            <div>
                <Row bg={'dark'} className="mt-3">
                        <Col md={4}>
                            <PlanetsList onSelectItem = {this.handlerOnSelectItem}/>
                        </Col>
                        <Col md={8}>
                            <Jumbotron className='bg-dark rounded d-flex '>  
                                {itemId===null?<h4>Select item from list</h4>:
                                <PlanetDetail id={itemId} />}
                            </Jumbotron>
                    </Col>
                </Row>
                <Row bg={'dark'} className="mt-3">
                    <Col md={4}>
                        <PeopleList onSelectItem = {this.handlerOnSelectItem}/>
                    </Col>
                    <Col md={8}>
                        <Jumbotron className='bg-dark rounded d-flex '>  
                            {itemId===null?<h4>Select item from list</h4>:
                            <PersonDetail id={itemId} />}
                        </Jumbotron>
                    </Col>
                </Row>
                <Row bg={'dark'} className="mt-3">
                    <Col md={4}>
                        <StarshipsList onSelectItem = {this.handlerOnSelectItem}/>
                    </Col>
                    <Col md={8}>
                        <Jumbotron className='bg-dark rounded d-flex '>  
                            {itemId===null?<h4>Select item from list</h4>:
                            <StarshipDetail id={itemId} />}
                        </Jumbotron>
                    </Col>
                </Row>
            </div>
        )
    }
}