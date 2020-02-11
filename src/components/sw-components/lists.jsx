import ResourceList from "../resource-list";
import {
    withData, 
    withSwapiService, 
    withListItemName,
    composer} from "../hoc-helpers";




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


const PeopleList = composer(
                            withSwapiService(mapMethodPeopleToProps),
                            withListItemName(renderName),
                            withData)
                        (ResourceList);
const PlanetsList = composer(
                            withSwapiService(mapMethodPlanetsToProps),
                            withListItemName(renderName),
                            withData)
                        (ResourceList);
const StarshipsList = composer(
                                withSwapiService(mapMethodStarshipsToProps),
                                withListItemName(renderStarshipListItemName),
                                withData)
                            (ResourceList);

export {
    PeopleList,
    PlanetsList,
    StarshipsList
}