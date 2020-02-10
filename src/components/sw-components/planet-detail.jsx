import React from "react";
import ResourceDetail, {Render} from "../resource-detail";
import {withSwapiService} from "../hoc-helpers";

const PlanetDetail = ({id,swapiService}) => {
    let {getPlanet} = swapiService;
    return (
        <ResourceDetail itemId={id}
            getData={getPlanet}>
            <Render field='population' label='Population' />
            <Render field='rotationPeriod' label='Rotation Period' />
            <Render field='diameter' label='Diametet' />
        </ResourceDetail>
    )
}

export default withSwapiService(PlanetDetail);