import React, {useContext} from "react";
import SwapiServiceContext from "../swapi-service-context";

export const withSwapiService = (mapMethodToProps) => (Wrapped) => {
    return (props) => {
        let swapiService = useContext(SwapiServiceContext)
        return <Wrapped {...props} {...mapMethodToProps(swapiService)}/>
    }
}