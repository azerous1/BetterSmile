import React, {Component} from 'react';
import tongue_img from './img/teeth.png'

export default class ScanPartTwo extends Component {

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
                        src="https://www.youtube.com/embed/x3d9iBnN72g"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        className="mt-3 mr-3">
                    </iframe>
                        </div>
                        <div className="col-3 mt-3">
                        <img className="checkimg" src={tongue_img} alt="tongue"/>

                            <div className="col-sm mg-2">
                                <section className="checkpoint2 mt-2">
                                    <h2>Show your teeth with a big smile!</h2>
                                    <p className="mt-2">Please wait until the text turns green!</p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <button onClick={this.props.onClick}  type="button" className="btn btn-info mt-5 mb-5">
                        Next
                    </button>
                </div>
            </div> 
        )
    }
}