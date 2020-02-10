import React from "react"
import SwapiService from "../../services/swapi-service";
import ResourceList from "../resource-list";
import withData from "../hoc-helpers";

const swapi=new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapi;
const withListItemName = (List, listItemNameRender) => (
    (props) => (
        <List {...props}>
            {listItemNameRender}
        </List>
    )
)

const renderName=(item)=>`${item.name}`;
const renderStarshipListItemName = (item)=>`${item.name} (${item.model})`;


const PeopleList = withListItemName(withData(ResourceList,getAllPeople),
                                    renderName);
const PlanetsList = withListItemName(withData(ResourceList,getAllPlanets),
                                    renderName);
const StarshipsList = withListItemName(withData(ResourceList,getAllStarships),
                                    renderStarshipListItemName);

export {
    PeopleList,
    PlanetsList,
    StarshipsList
}