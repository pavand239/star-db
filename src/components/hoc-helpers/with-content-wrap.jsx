import React from "react";
import Content from "../content";

import {Switch, Route, useRouteMatch} from "react-router-dom";

export const withContentWrap = (List, Detail) => () => {
    let {url, path} = useRouteMatch();
    return(
        <Content
            list={<List url={url}/>} 
            detail={
                <Switch>
                    <Route exact path={path}>
                        <h4>Select item from list</h4>
                    </Route>
                    <Route path={`${path}/:itemId`}
                        component = {({match}) => {
                            const {itemId} = match.params; 
                            return <Detail itemId={itemId} />;
                        }}
                    />
                </Switch> 
            }
        />
    )
} 