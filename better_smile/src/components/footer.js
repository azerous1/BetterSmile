import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class Footer extends Component {

    render() {
        return(
            <>
                <footer>
                    <section className="footer">
                    <Link to='/about'>
                        <button className="about-button btn btn-link">About Us</button>
                    </Link>
                        <p>Feel free to contact us by sending an <a href="yichiz5@uw.edu">email</a></p>
                        <p>Copyright &copy;Team Better Smile</p>
                    </section>
                </footer>
            </>
        )
    }

}