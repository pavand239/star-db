import React from "react";
import ResourceDetail, {Record} from "../resource-detail";
import {withSwapiService} from "../hoc-helpers";

const PersonDetail = (props) => {
    return (
        <ResourceDetail {...props}>
            <Record field='gender' label='Gender' />
            <Record field='birthYear' label='Birth Year' />
            <Record field='hairColor' label='Hair Color' />
        </ResourceDetail>
    )
}
const mapMethodToProps = (swapiService) => ({
    getData:swapiService.getPerson
})

export default withSwapiService(mapMethodToProps)(PersonDetail);