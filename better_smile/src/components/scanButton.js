import React, {useEffect}from 'react';

export default function(props) {

    return(
        <div className="text-center">
            <button onClick={props.onClick} type="button" className="btn btn-info mt-5 mb-5">
                Begin your scan
            </button>
        </div>
    )
}