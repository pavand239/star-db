import React from "react";
import Content from "../content";

import {withRouter} from "react-router-dom";

export const withContentWrap = (List, Detail) => withRouter(({match, history}) => {
    let {id} = match.params;
    return(
        <Content
            list={<List onSelectItem={(id)=>{history.push(id)}}/>} 
            detail={id?<Detail itemId={id} />:
                       <h3>Select item from list</h3>}
        />
    )
} )