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
        showRandomBlock:true,
        resource:'starships'
    }

    handlerOnCloseRandomBlock = () => {
        this.setState({
            showRandomBlock:false
        })
    }
    
    render() {
        let {showRandomBlock, resource} = this.state;
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route path='/'>
                            <Header />
                            {showRandomBlock?<RandomBlock onClose={this.handlerOnCloseRandomBlock}  />:null}
                            <Content resource ={resource}/>
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        )
    }
}