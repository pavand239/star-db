import React from "react";
import {Jumbotron} from "react-bootstrap";
import './random-block.css'

export default class RandomBlock extends React.Component {
    render() {
        return (
            <Jumbotron bg='dark' className='d-flex my-3'>
                <img src="https://starwars-visualguide.com/assets/img/planets/2.jpg" 
                     className='rounded mr-lg-5 mr-3'  alt='Alderaan'/>
                <div>
                    <h3>Alderaan</h3>
                    <table class='table table-hover'>
                        <tbody>
                            <tr>
                                <td>Population</td>
                                <td>1000</td>
                            </tr>
                            <tr>
                                <td>Rotation Period</td>
                                <td>23</td>
                            </tr>
                            <tr>
                                <td>Diameter</td>
                                <td>1000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </Jumbotron>
        )
    }
}