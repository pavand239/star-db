import React from "react";
import Content from "../content";

export const withContentWrap = (List, Detail) => (props) => (
    <Content 
        list={<List onSelectItem={props.onSelectItem}/>} 
        detail={props.itemId?<Detail itemId={props.itemId} />:
                             <h4>Select item from list</h4> }
    />
) 