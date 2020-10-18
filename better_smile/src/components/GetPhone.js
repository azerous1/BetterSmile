import React from 'react'
import {Link} from 'react-router-dom'

function GetPhone(props) {
    return (
        <form className="phone-form mb-10 mt-10 pt-10 pb-10">
            <br className="mt-10"></br>
            <h2 className="mt-5 mb-10">Please enter your phone number</h2>
            <div className="mb-5">
                <input class="form-control" type="text" className="mg-10"/>
                <button onClick={props.onClick} type="button" className="btn btn-info mt-5 mb-5 ml-3">Ready to Go!</button>
            </div>
        </form>
    )
}

export default GetPhone
