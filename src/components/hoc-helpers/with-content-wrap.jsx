import React from "react";
import Content from "../content";

export const withContentWrap = (List, Detail) => (props) => (
    <Content 
        list={<List onSelectItem={props.onSelectItem}/>} 
        detail={<Detail itemId={props.itemId} /> }
    />
) 