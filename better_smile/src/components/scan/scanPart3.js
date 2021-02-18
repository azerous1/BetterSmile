import React from 'react';
import tongue_img from '../../img/mouse.jpg'

export const ScanPartThree = (props) => {
    return (
        <div className="text-center mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <iframe
                            title="livevideo"
                            width="700"
                            height="393.75"
                            src="https://www.youtube.com/embed/x3d9iBnN72g"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            className="mt-3 mr-3">
                        </iframe>
                    </div>
                    <div className="col-4 mt-3">
                        <img className="checkimg mt-2" src={tongue_img} alt="tongue"/>

                        <section className="checkpoint3 mt-3">
                            <h2>Keep your mouth wide open!</h2>
                            <p className="mt-2">Please wait until the text turns green!</p>
                        </section>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={props.onClickCallback} type="button" className="btn btn-info mt-5 mb-5">
                    Check Results
                </button>
            </div>
        </div>
    )
}
