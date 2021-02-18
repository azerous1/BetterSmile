import React, {Component} from 'react';
import logo from "../../img/logo.png"

export default class Header extends Component {
    render() {
        return(
            <>
                <header>
                    <div className='text-center'>
                        <section className="header">
                            <img className="header_logo" src={logo} alt="Better Smile logo"/>
                        </section>
                    </div>
                </header>
            </> 
        )
    }
}
