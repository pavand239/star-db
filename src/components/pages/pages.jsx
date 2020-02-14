import {
    PeopleList,
    PersonDetail,
    PlanetsList,
    PlanetDetail,
    StarshipsList,
    StarshipDetail
    } from '../sw-components';
import { withContentWrap} from "../hoc-helpers";

const PeoplePage = withContentWrap(PeopleList, 
                                    PersonDetail);
  
const PlanetPage = withContentWrap(PlanetsList, 
                                    PlanetDetail);

const StarshipPage = withContentWrap(StarshipsList, 
                                        StarshipDetail);                                       

export {
    PeoplePage,
    PlanetPage,
    StarshipPage
};