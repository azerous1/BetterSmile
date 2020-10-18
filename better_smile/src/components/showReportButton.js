import React, { Component } from 'react';

export default class showReportButton extends Component {


    render() {
        return(
            <div className="text-center">
                <button disabled={this.props.disabled} onClick={this.props.onClick} type="button" className="btn btn-info mt-5 mb-5">
                    Check your Report
                </button>
            </div>
        )
    }
}