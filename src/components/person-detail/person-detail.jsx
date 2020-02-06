import React from "react";

export const PersonDetail= ({id,name,gender,birthYear,hairColor}) => (
    <div className='d-flex'>
        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                        className='rounded mr-lg-5 mr-3' alt='Luke Skywalker'/>
        <div>
            <h3>{name}</h3>
            <table className='table table-hover'>
                <tbody>
                    <tr>
                        <td>Gender</td>
                        <td>{gender}</td>
                    </tr>
                    <tr>
                        <td>Bith Year</td>
                        <td>{birthYear}</td>
                    </tr>
                    <tr>
                        <td>Hair Color</td>
                        <td>{hairColor}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)