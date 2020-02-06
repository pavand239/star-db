import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";


export default class ResourceList extends React.Component {
    swapi=new SwapiService();
    state = {
        resourceList:[],
        isLoading:true,
        error:false
    }
    onListLoaded = (loadedList) => {
        this.setState({
            resourceList:loadedList,
            isLoading:false
        });
    }
    onError = (err) => {
        this.setState({
            error:true
        });
    }
    loadList = async () =>{
        let {resource} = this.props;
        if (resource==='people'){
            return this.swapi.getAllPeople();
        } else if (resource==='planets'){
            return this.swapi.getAllPlanets();
        } else if (resource==='starships'){
            return this.swapi.getAllStarships();
        }
    }
    onSelectListItem = (id) => {
        this.props.onSelectItem(
            this.state.resourceList.filter((resourceItem)=>(resourceItem.id===id))[0]
        );
    }
    componentDidMount() {
        this.loadList().then(this.onListLoaded).catch(this.onError);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.resource !== this.props.resource) {
            this.setState({
                resourceList:[],
                isLoading:true,
                error:false
            })
            this.loadList().then(this.onListLoaded).catch(this.onError);
        }

    }
    render(){
        let {resourceList, isLoading,error} = this.state,
            spinner = isLoading && !error?<Spinner />: null,
            errorIndicator = error?<ErrorIndicator />:null,
            list = null;
            if (!isLoading && !error){
                let listItems = resourceList.map((item) => (
                    <ListGroup.Item 
                        key = {item.id}
                        onClick = {()=>{this.onSelectListItem(item.id)}}>
                        {item.name.value}
                    </ListGroup.Item>
                    ));
                list = <ListGroup>{listItems}</ListGroup>;
            }
        return (
            <Card className='bg-dark rounded mb-3'>
                {spinner}
                {errorIndicator}
                {list}
            </Card>
        )
    }
}