import React, {Component, Fragment } from 'react';

export default class Header extends Component {

    render() {
        return(
            <>
                <header>
                    <section className="header">
                        <img className="header_logo" src=".img/logo.png" alt="Better Smile logo"/>
                        <h1>Better Smile</h1>
                    </section>
                </header>
            </>
        )
    }

}