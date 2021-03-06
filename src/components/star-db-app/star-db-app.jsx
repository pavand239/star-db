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
import DummySwapiService from "../../services/dummy-swapi-service"
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
                            <Switch>
                                <Route exact path='/'>
                                    {showRandomBlock?
                                        <RandomBlock 
                                            onClose={this.handlerOnCloseRandomBlock} />
                                    :null}
                                </Route>
                                <Route path='/people/:id?'>
                                    <PeoplePage />
                                </Route>
                                <Route path='/planets/:id?'>
                                    <PlanetPage />
                                </Route>
                                <Route path='/starships/:id?'>
                                    <StarshipPage/>
                                </Route>
                                <Route>
                                    <h2 className='m-5 text-center'>Page not found</h2>
                                </Route>
                            </Switch>
                        </ErrorBoundry>
                    </Layout>
                </Router>
            </SwapiServiceContext.Provider>
        )
    }
}