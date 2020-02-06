import React from "react";
import {Col, Row, Jumbotron} from "react-bootstrap";
import ResourceList from '../resource-list';
import PersonDetail from '../person-detail';
import PlanetDetail from '../planet-detail';
import StarshipDetail from '../starship-detail';
import "./content.css";

export default class Content extends React.Component {
    state = {
        selectedItem:null
    }
    handlerOnSelectItem=(item)=>{
        this.setState({
            selectedItem:item
        });
    }
    selectDetailView= (resource, item) => {
        if (item==null) {
            return <h4>Please, choose item from list.</h4>
        }
        if (resource ==='people'){
            return <PersonDetail {...item} />;
        } else if (resource ==='planets'){
            return <PlanetDetail {...item} />;
        } else if (resource ==='starships'){
            return <StarshipDetail {...item} />;        }
    }
    render() {
        let {resource} = this.props,
            {selectedItem} = this.state,
            resourceDetail = this.selectDetailView(resource, selectedItem);
        
        return (
            <Row bg={'dark'} className="mt-3">
                    <Col md={4}>
                        <ResourceList resource={resource}
                                    onSelectItem = {this.handlerOnSelectItem}/>
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