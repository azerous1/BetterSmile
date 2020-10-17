import { NavLink } from 'react-router-dom';
import React, {Component, Fragment } from 'react';
import Header from './header';
import Footer from './footer';

export default class Home extends Component {
    render() {
        return(
            <Fragment>
                <Header/>
                <button type="button" className="btn btn-primary">
                    <NavLink to='/scan' activeClassName='activelink' style={{color:"white"}}>Begin your scan</NavLink>
                </button>
                <Footer/>
            </Fragment>
        )
    }
}