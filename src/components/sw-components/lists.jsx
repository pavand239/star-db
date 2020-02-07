import SwapiService from "../../services/swapi-service";
import ResourceList from "../resource-list";
import withData from "../hoc-helpers";

const swapi=new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapi;

const PeopleList = withData(ResourceList,getAllPeople)

const PlanetsList = withData(ResourceList,getAllPlanets)

const StarshipsList = withData(ResourceList,getAllStarships
)
export {
    PeopleList,
    PlanetsList,
    StarshipsList
}