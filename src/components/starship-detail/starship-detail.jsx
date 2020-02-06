import React from "react";

export const StarshipDetail= ({id,name,model,manufacturer,cost}) => (
    <div className='d-flex'>
        <img src = {`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
                     className='rounded mr-lg-5 mr-3'  alt='starship'/>
        <div>
            <h3>{name}</h3>
            <table className='table table-hover'>
                <tbody>
                    <tr>
                        <td>Model</td>
                        <td>{model}</td>
                    </tr>
                    <tr>
                        <td>Manufacturer</td>
                        <td>{manufacturer}</td>
                    </tr>
                    <tr>
                        <td>Cost</td>
                        <td>{cost}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)