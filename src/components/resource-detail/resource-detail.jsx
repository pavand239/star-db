import React from "react";
import { Jumbotron } from "react-bootstrap";

export default class Content extends React.Component {
    render() {
        return (
            <Jumbotron className='bg-dark rounded d-flex '>
                <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" 
                     className='rounded mr-lg-5 mr-3' alt='Luke Skywalker'/>
                <div>
                    <h3>Luke Skywalker</h3>
                    <table class='table table-hover'>
                        <tbody>
                            <tr>
                                <td>Birth Year</td>
                                <td>9BBY</td>
                            </tr>
                            <tr>
                                <td>Species</td>
                                <td>Human</td>
                            </tr>
                            <tr>
                                <td>Homeworld</td>
                                <td>Tatooine</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Jumbotron>
        )
    }
}