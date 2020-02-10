import React from "react";
import ResourceDetail, {Render} from "../resource-detail";
import {withSwapiService} from "../hoc-helpers";

const StarshipDetail = (props) => {
    return (
        <ResourceDetail {...props}>
            <Render field='model' label='Model' />
            <Render field='manufacturer' label='Manufacturer' />
            <Render field='cost' label='Cost' />
        </ResourceDetail>
    )
}

const mapMethodToProps = (swapiService) => ({
    getData:swapiService.getStarship
})

export default withSwapiService(StarshipDetail, mapMethodToProps);