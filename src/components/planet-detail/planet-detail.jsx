import React from "react";

export const PlanetDetail= ({id,name,population,rotationPeriod,diameter}) => (
    <div className='d-flex'>
        <img src = {`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                     className='rounded mr-lg-5 mr-3'  alt='Planet'/>
        <div>
            <h3>{name}</h3>
            <table className='table table-hover'>
                <tbody>
                    <tr>
                        <td>Population</td>
                        <td>{population}</td>
                    </tr>
                    <tr>
                        <td>Rotation Period</td>
                        <td>{rotationPeriod}</td>
                    </tr>
                    <tr>
                        <td>Diameter</td>
                        <td>{diameter}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)