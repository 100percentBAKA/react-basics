import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header/Header'
import Container from './components/main/container/Container'
import Preview from './components/cart/Preview';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Container />
                        </Route>
                        <Route exact path="/preview">
                            <Preview />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
