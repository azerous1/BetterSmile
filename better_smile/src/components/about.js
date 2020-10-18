import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom"
import Header from './header';
import Footer from './footer';

export default class About extends Component {

    render() {
        return(
            <div>
            <Header/>
            <section className="blank"></section>
            <div className="about ml-5 mr-5 mt-5">
                <h1> Why are we doing this?</h1>
                     <h2>According to WHO, 23% of US population do not have dental benefits, and this number is much higher in developing countries.
                     Oral health is essential to maintain general health and well-being, but reasearch concluded that two biggest barriers to dental care 
                     are worrying about the out-of-pocket cost and the difficulty of tracking down prices in the first place. To make dental knowledge more 
                     accessible, we developed Better Smile, a portable dental assistant for everyone! To help people understand their existing 
                     dental condition, we applied machine learning into traditional dental industry. With a simple scan from your mobile camera, 
                     Better Smile is able to give you a personalized dental summary within minutes! 
                    </h2> 

                    <h2><strong className="text-info">Creator:</strong> Yichi Zhang, Martin Zhang, Larry Tian, Sailesh Sivakumar</h2>

            <div className="text-center mt-5 mb-5">
                <Link to='/'>
                    <button className="btn btn-info" onClick={this.props.handleAbout}>Back</button>
                </Link>
            </div>
            </div>
            </div>
        )
    }
}