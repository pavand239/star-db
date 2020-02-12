import React from "react";
import Layout from '../layout';
import Header from '../header';
import RandomBlock from '../random-block';
import ErrorBoundry from '../error-boundry';
import {
    PeoplePage,
    PlanetPage,
    StarshipPage } from "../pages"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SwapiService from "../../services/swapi-service";
import SwapiServiceContext from "../swapi-service-context";



export default class StarDBApp extends React.Component {
    swapi=new SwapiService();
    state ={
        showRandomBlock:true,
    }

    handlerOnCloseRandomBlock = () => {
        this.setState({
            showRandomBlock:false
        })
    }
    
    render() {
        let {showRandomBlock} = this.state;
        return (
            <SwapiServiceContext.Provider value={this.swapi}>
                <Router>
                    <Layout>
                        <ErrorBoundry>
                            <Header />
                            {showRandomBlock?
                                <RandomBlock 
                                    onClose={this.handlerOnCloseRandomBlock} />
                                :null}
                            <Switch>
                                
                                <Route exact path='/'>
                                    <PeoplePage />
                                </Route>
                                <Route exact path='/planets'>
                                    <PlanetPage />
                                </Route>
                                <Route exact path='/starships'>
                                    <StarshipPage/>
                                </Route>
                            </Switch>
                        </ErrorBoundry>
                    </Layout>
                </Router>
            </SwapiServiceContext.Provider>
        )
    }
}