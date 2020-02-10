import React from "react";
import ResourceDetail, {Render} from "../resource-detail";
import {SwapiServiceConsumer} from "../swapi-service-context";

const PersonDetail = ({id}) => {
    return  (
        <SwapiServiceConsumer>
            {({getPerson}) => (
                <ResourceDetail itemId={id}
                    getData={getPerson}>
                    <Render field='gender' label='Gender' />
                    <Render field='birthYear' label='Birth Year' />
                    <Render field='hairColor' label='Hair Color' />
                </ResourceDetail>
            )}
        </SwapiServiceConsumer>
        )
}
const PlanetDetail = ({id}) => {
    return  (
        <SwapiServiceConsumer>
            {({getPlanet}) => (
                <ResourceDetail itemId={id}
                    getData={getPlanet}>
                    <Render field='population' label='Population' />
                    <Render field='rotationPeriod' label='Rotation Period' />
                    <Render field='diameter' label='Diametet' />
                </ResourceDetail>
            )}
        </SwapiServiceConsumer>
        )
}
const StarshipDetail = ({id}) => {
    return  (
        <SwapiServiceConsumer>
            {({getStarship}) => (
                <ResourceDetail itemId={id}
                    getData={getStarship}>
                    <Render field='model' label='Model' />
                    <Render field='manufacturer' label='Manufacturer' />
                    <Render field='cost' label='Cost' />
                </ResourceDetail>
            )}
        </SwapiServiceConsumer>
        )
}

export {
    PersonDetail,
    PlanetDetail, 
    StarshipDetail
    }