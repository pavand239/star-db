import React, {useState} from "react";
import Content from "../content";

import {Switch, Route, useRouteMatch} from "react-router-dom";

export const withContentWrap = (List, Detail) => () => {
    const [itemId, setItemId] = useState(null);
    let {url, path} = useRouteMatch();
    return(
        <Content
            list={<List url={url}
                        itemId={itemId}/>} 
            detail={
                <Switch>
                    <Route exact path={path}>
                        <h4>Select item from list</h4>
                    </Route>
                    <Route path={`${path}/:id`}
                        component = {({match}) => {
                            const {id} = match.params;
                            setItemId(id) 
                            return <Detail itemId={id} />;
                        }}
                    />
                </Switch> 
            }
        />
    )
} 