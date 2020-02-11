import React from "react";
import ResourceDetail, {Record} from "../resource-detail";
import {withSwapiService} from "../hoc-helpers";

const PlanetDetail = (props) => {
    return (
        <ResourceDetail {...props}>
            <Record field='population' label='Population' />
            <Record field='rotationPeriod' label='Rotation Period' />
            <Record field='diameter' label='Diametet' />
        </ResourceDetail>
    )
}

const mapMethodToProps = (swapiService) => ({
    getData:swapiService.getPlanet
})

export default withSwapiService(mapMethodToProps)(PlanetDetail);