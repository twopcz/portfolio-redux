import About from './pages/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nav from './components/Nav';
import Projects from './pages/Projects';
import React from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
