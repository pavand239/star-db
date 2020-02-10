import React from "react";
import ResourceDetail, {Render} from "../resource-detail";
import {withSwapiService} from "../hoc-helpers";

const PlanetDetail = (props) => {
    return (
        <ResourceDetail {...props}>
            <Render field='population' label='Population' />
            <Render field='rotationPeriod' label='Rotation Period' />
            <Render field='diameter' label='Diametet' />
        </ResourceDetail>
    )
}

const mapMethodToProps = (swapiService) => ({
    getData:swapiService.getPlanet
})

export default withSwapiService(PlanetDetail, mapMethodToProps);