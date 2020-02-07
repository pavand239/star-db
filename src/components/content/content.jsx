import React from "react";
import {Col, Row, Jumbotron} from "react-bootstrap";
import ResourceList from '../resource-list';
import ResourceDetail from "../resource-detail";
import "./content.css";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";

export default class Content extends React.Component {
    swapi = new SwapiService();
    resourceFunctions={                         
        // object contain functions to get data from api
        // and render-function for list for each resource
        'people':{getData:this.swapi.getAllPeople,
                  selectListItemValue:({name,params:[birthYear,gender]})=>(
                      `${name.value} (${gender.value}, ${birthYear.value})`
                    )},
        'planets':{getData:this.swapi.getAllPlanets,
                   selectListItemValue:({name,params:[population]})=>(
                        `${name.value} (Population: ${population.value})`
                    )},
        'starships':{getData:this.swapi.getAllStarships,
                     selectListItemValue:({name,params:[manufacturer]})=>(
                        `${name.value} ( ${manufacturer.value})`
                    )},
    }
    state = {
        getData:null,
        selectedItem:null,
        error:false
    }
    handlerOnSelectItem=(item)=>{
        this.setState({
            selectedItem:item
        });
    }
    selectDetailView = (item) => {
        if (item==null) {
            return <h4>Please, choose item from list.</h4>
        } else {
            return <ResourceDetail item={item} />;
        }
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
            {selectedItem, error} = this.state,
            resourceDetail = this.selectDetailView(selectedItem),
            {getData, selectListItemValue}=this.resourceFunctions[resource];
            
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
                        <ResourceList resource={resource}
                                    onSelectItem = {this.handlerOnSelectItem}
                                    getData={getData}
                                    selectListItemValue={selectListItemValue} />
                    </Col>
                    <Col md={8}>
                        <Jumbotron className='bg-dark rounded d-flex '>  
                            {resourceDetail}
                        </Jumbotron>
                </Col>
            </Row>
        )
    }
}