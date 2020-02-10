import React from "react";
import ResourceDetail, {Render} from "../resource-detail";
import {withSwapiService} from "../hoc-helpers";

const PersonDetail = (props) => {
    return (
        <ResourceDetail {...props}>
            <Render field='gender' label='Gender' />
            <Render field='birthYear' label='Birth Year' />
            <Render field='hairColor' label='Hair Color' />
        </ResourceDetail>
    )
}
const mapMethodToProps = (swapiService) => ({
    getData:swapiService.getPerson
})

export default withSwapiService(PersonDetail, mapMethodToProps);