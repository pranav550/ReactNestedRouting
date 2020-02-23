import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class RouterDemo extends Component {

    render() {
        return (
            <Fragment>
                <Router>
                    <div>
                        <Header />
                        <CustomRoot />
                    </div>
                </Router>

            </Fragment>
        )
    }

}

function CustomRoot() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route component={PageNotFound} />
        </Switch>
    )
}

function Header() {
    return (
        <Fragment>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to={{ pathname: '/about' }}>About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </Fragment>
    )
}

function Home() {

    return (
        <Fragment>
            <h1>
                Home
        </h1>
            <p>Abbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>
        </Fragment>
    )
}

function About() {

    return (
        <Fragment>
            <h1>
                About
        </h1>
            <p>Abbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>
        </Fragment>
    )
}

function Services({ match, location, history }) {

    return (
        <Fragment>
            <h1>
                Service
        </h1>
            <ul>
                <li><Link to={`${match.path}/web-development`}>Web Development</Link></li>
                <li><Link to={`${match.path}/seo`}>Seo</Link></li>
                <li><Link to={`${match.path}/website-design`}>Website Design</Link></li>
                <li><Link to={`${match.path}/mobile-development`}>Mobile development</Link></li>
            </ul>
            <Switch>
                <Route path={`${match.path}/:slug`} component={Service} />

            </Switch>
        </Fragment>
    )
}

function Contact() {

    return (
        <Fragment>
            <h1>
                Contact
        </h1>
            <p>Contact</p>
        </Fragment>
    )
}

function PageNotFound() {

    return (
        <Fragment>
            <h1>404 Error</h1>
            <p>Page Not found</p>
        </Fragment>
    )
}


// function Component

// function Service({ match }) {
//     console.log(match)
//     if (match.params.slug === 'web-development') {
//         return (
//             <Fragment>

//                 <h1>Service Details</h1>
//                 <p>Service Name:{match.params.slug}</p>
//                 <p>Description</p>
//             </Fragment>
//         )
//     }
//     else {
//         return (
//             <Fragment>
//                 <h1>Service Details</h1>
//                 <p>Service Name:{match.params.slug}</p>
//             </Fragment>
//         )
//     }
// }

//class Component

class Service extends Component {
    render() {
        console.log(this.props)
        const { match, location, history } = this.props
        if (match.params.slug === 'web-development') {
            return (
                <Fragment>

                    <h1>Service Details</h1>
                    <p>Service Name:{match.params.slug}</p>
                    <p>Description</p>
                </Fragment>
            )
        }
        else {
            return (
                <Fragment>
                    <h1>Service Details</h1>
                    <p>Service Name:{match.params.slug}</p>
                </Fragment>
            )
        }
    }
}

export default RouterDemo