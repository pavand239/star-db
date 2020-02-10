import React from "react";
import ResourceDetail, {Render} from "../resource-detail";
import {withSwapiService} from "../hoc-helpers";

const StarshipDetail = ({id,swapiService}) => {
    let  {getStarship} = swapiService;
    return (
        <ResourceDetail itemId={id}
            getData={getStarship}>
            <Render field='model' label='Model' />
            <Render field='manufacturer' label='Manufacturer' />
            <Render field='cost' label='Cost' />
        </ResourceDetail>
    )
}

export default withSwapiService(StarshipDetail);