import React from "react";
import SwapiService from "../../services/swapi-service";
import ResourceDetail, {Render} from "../resource-detail";

const swapi=new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship
} = swapi;

const PersonDetail = ({id}) => {
    return  (
        <ResourceDetail itemId={id}
            getData={getPerson}>
            <Render field='gender' label='Gender' />
            <Render field='birthYear' label='Birth Year' />
            <Render field='hairColor' label='Hair Color' />
        </ResourceDetail>
        )
}
const PlanetDetail = ({id}) => {
    return  (
        <ResourceDetail itemId={id}
            getData={getPlanet}>
            <Render field='population' label='Population' />
            <Render field='rotationPeriod' label='Rotation Period' />
            <Render field='diameter' label='Diametet' />
        </ResourceDetail>
        )
}
const StarshipDetail = ({id}) => {
    return  (
        <ResourceDetail itemId={id}
            getData={getStarship}>
            <Render field='model' label='Model' />
            <Render field='manufacturer' label='Manufacturer' />
            <Render field='cost' label='Cost' />
        </ResourceDetail>
        )
}

export {
    PersonDetail,
    PlanetDetail, 
    StarshipDetail
    }