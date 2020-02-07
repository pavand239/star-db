import React from "react";

export const ResourceDetail= ({item}) => {   
    let {id, name,imageBaseUrl,params} = item;
    let paramTable = params.map((param)=>( //generating table to display item's params
        <tr key={param.name}>
            <th scope='row'>{param.name}</th>
            <td>{param.value}</td>
        </tr>
    ))
    return(
        <div className='d-flex'>
            <img src={`${imageBaseUrl}${id}.jpg`}  
                className='rounded mr-lg-5 mr-3'  alt={name.value}/>
            <div>
                <h3>{name.value}</h3>
                <table className='table table-hover'>
                    <tbody>
                        {paramTable}
                    </tbody>
                </table>
            </div>
        </div>
    )
}