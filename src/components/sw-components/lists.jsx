import React from "react"

import ResourceList from "../resource-list";
import {withData, withSwapiService} from "../hoc-helpers";


const withListItemName = (List, listItemNameRender) => (
    (props) => (
        <List {...props}>
            {listItemNameRender}
        </List>
    )
)

const renderName=(item)=>`${item.name}`;
const renderStarshipListItemName = (item)=>`${item.name} (${item.model})`;
const mapMethodPeopleToProps = (swapiService) => ({
    getData:swapiService.getAllPeople
})
const mapMethodPlanetsToProps = (swapiService) => ({
    getData:swapiService.getAllPlanets
})
const mapMethodStarshipsToProps = (swapiService) => ({
    getData:swapiService.getAllStarships
})


const PeopleList = withSwapiService(
                                    withListItemName(
                                        withData(ResourceList),
                                        renderName),
                                    mapMethodPeopleToProps);
const PlanetsList = withSwapiService(
                                    withListItemName(
                                        withData(ResourceList),
                                        renderName),
                                    mapMethodPlanetsToProps);
const StarshipsList = withSwapiService(
                                    withListItemName(
                                        withData(ResourceList),
                                        renderStarshipListItemName),
                                    mapMethodStarshipsToProps);

export {
    PeopleList,
    PlanetsList,
    StarshipsList
}