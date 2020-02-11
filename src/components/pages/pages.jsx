import {
    PeopleList,
    PersonDetail,
    PlanetsList,
    PlanetDetail,
    StarshipsList,
    StarshipDetail
    } from '../sw-components';
import {withItemId, withContentWrap} from "../hoc-helpers"

const PeoplePage = withItemId(
                        withContentWrap(PeopleList, 
                                        PersonDetail));
  
const PlanetPage = withItemId(
                        withContentWrap(PlanetsList, 
                                        PlanetDetail));

const StarshipPage = withItemId(
                        withContentWrap(StarshipsList, 
                                        StarshipDetail));                                       

export {
    PeoplePage,
    PlanetPage,
    StarshipPage
};