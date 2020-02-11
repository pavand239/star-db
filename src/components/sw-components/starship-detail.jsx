import React from "react";
import ResourceDetail, {Record} from "../resource-detail";
import {withSwapiService} from "../hoc-helpers";

const StarshipDetail = (props) => {
    return (
        <ResourceDetail {...props}>
            <Record field='model' label='Model' />
            <Record field='manufacturer' label='Manufacturer' />
            <Record field='cost' label='Cost' />
        </ResourceDetail>
    )
}

const mapMethodToProps = (swapiService) => ({
    getData:swapiService.getStarship
})

export default withSwapiService(mapMethodToProps)(StarshipDetail);