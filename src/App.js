import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import React from 'react';

function App() {
    return (
        <Router basename="/">
            <div className="App" id="top">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
