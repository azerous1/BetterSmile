import React, {Component} from 'react';
import tongue_img from './img/tongue.png'

export default class ScanPartOne extends Component {

    render() {
        return(
            <div className="text-center mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                        <iframe
                            title = "livevideo"
                            width="700"
                            height="393.75"
                            src="https://www.youtube.com/embed/W_c40WUkm4E"
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            className="mt-3 mr-3">
                        </iframe>
                        </div>

                        <div className="col-3 mt-3">
                            <img className="checkimg" src={tongue_img} alt="tongue"/>
                            <section className="checkpoint mt-2">
                                <h2>Stick your tongue out!</h2>
                            </section>
                        </div>
                        </div>
                    </div>
                <div>
                    <button onClick={this.props.onClick} type="button" className="btn btn-info mt-5 mb-5">
                        Next
                    </button>
                </div>
            </div> 
        )
    }
}