import React from "react";
import {SwapiServiceConsumer} from "../swapi-service-context";

export const withSwapiService = (Wrapped) => {
    return (props) => (
        <SwapiServiceConsumer>
            {(swapiService)=>(
                <Wrapped {...props} swapiService={swapiService}/>
            )}
        </SwapiServiceConsumer>
    )
}