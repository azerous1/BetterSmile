import React, {Component, Fragment } from 'react';
import {Link} from "react-router-dom"

export default class Scan extends Component {

    render() {
        return(
            <>
                <h1>Upload photo</h1>
                <button className='btn btn-primary'>Upload</button>
                <Link to='/'>
                    <button className="btn btn-light">Back</button>
                </Link>
            </>
        )
    }
}