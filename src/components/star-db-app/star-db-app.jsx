import React from "react";
import Layout from '../layout'
import Header from '../header'
import RandomBlock from '../random-block'
import Content from '../content'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


export default class StarDBApp extends React.Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route path='/'>
                            <Header />
                            <RandomBlock />
                            <Content />
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        )
    }
}