import React from "react";
import {SwapiServiceConsumer} from "../swapi-service-context";

export const withSwapiService = (Wrapped, mapMethodToProps) => {
    return (props) => (
        <SwapiServiceConsumer>
            {(swapiService)=> {
               return <Wrapped {...props} {...mapMethodToProps(swapiService)}/>
            }}
        </SwapiServiceConsumer>
    )
}