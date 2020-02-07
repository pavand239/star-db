import React from "react";
import Layout from '../layout'
import Header from '../header'
import RandomBlock from '../random-block'
import Content from '../content'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SwapiService from "../../services/swapi-service";


export default class StarDBApp extends React.Component {
    swapi=new SwapiService();
    state ={
        showRandomBlock:false,
    }

    handlerOnCloseRandomBlock = () => {
        this.setState({
            showRandomBlock:false
        })
    }
    
    render() {
        let {showRandomBlock} = this.state;
        return (
            <Router>
                <Layout>
                    <Header />
                    {showRandomBlock?
                        <RandomBlock 
                            onClose={this.handlerOnCloseRandomBlock}
                            getData={this.swapi.getPlanet} />
                        :null}
                    <Switch>
                        
                        <Route exact path='/'>
                            <Content resource ={'people'}/>
                        </Route>
                        <Route exact path='/planets'>
                            <Content resource ={'planets'}/>
                        </Route>
                        <Route exact path='/starships'>
                            <Content resource ={'starships'}/>
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        )
    }
}