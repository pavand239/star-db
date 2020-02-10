import React from "react";
import ResourceDetail, {Render} from "../resource-detail";
import {withSwapiService} from "../hoc-helpers";

const PersonDetail = ({id,swapiService}) => {
    let {getPerson} = swapiService;
    return (
        <ResourceDetail itemId={id}
            getData={getPerson}>
            <Render field='gender' label='Gender' />
            <Render field='birthYear' label='Birth Year' />
            <Render field='hairColor' label='Hair Color' />
        </ResourceDetail>
    )
}

export default withSwapiService(PersonDetail);