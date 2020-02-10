import React from "react"

import ResourceList from "../resource-list";
import {withData, withSwapiService} from "../hoc-helpers";


const withListItemName = (listItemNameRender) => (Wrapped) => (
    (props) => (
        <Wrapped {...props}>
            {listItemNameRender}
        </Wrapped>
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


const PeopleList = withSwapiService(mapMethodPeopleToProps)(
                        withListItemName(renderName)(
                            withData(ResourceList)));
const PlanetsList = withSwapiService(mapMethodPlanetsToProps)(
                        withListItemName(renderName)(
                            withData(ResourceList)));
const StarshipsList = withSwapiService(mapMethodStarshipsToProps)(
                        withListItemName(renderStarshipListItemName)(
                            withData(ResourceList)));

export {
    PeopleList,
    PlanetsList,
    StarshipsList
}