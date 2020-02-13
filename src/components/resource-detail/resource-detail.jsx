import React, { useCallback} from "react";

import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import ErrorBoundry from "../error-boundry";
import {useGetData} from "../hooks";

export const Record = ({item, field, label}) => {
    return(
        <tr>
            <th scope='row'>{label}</th>
            <td>{item[field]}</td>
        </tr>
    )

}



export const  ResourceDetail = ({itemId, getData, children}) => { 
    const useGetItem = () =>{
        let getItem = useCallback(() => getData(itemId),[itemId]);
        return useGetData(getItem);
    }
    
    let {item, isLoading, isError} = useGetItem();

    if (isLoading && !isError) {
        return <Spinner />;
    }
    if (isError) {
        return <ErrorIndicator />
    }
    let {id, name, imageBaseUrl} = item;
    return(
        <ErrorBoundry>
            <div className='d-flex'>
                <img src={`${imageBaseUrl}${id}.jpg`}  
                    className='rounded border border-secondary mr-lg-5 mr-3'  alt={name}/>
                <div>
                    <h3>{name}</h3>
                    <table className='table table-hover'>
                        <tbody>
                            {React.Children.map(children, (child)=>(
                                React.cloneElement(child, { item })
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </ErrorBoundry>
    )
}

