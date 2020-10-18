import React, { Component } from 'react';

export default class Report extends Component {
    render() {
        return(
            <div>
                <section className="report_section">
                    <h1> Cavity </h1>
                    <h2> Status: <strong className = "text-danger">Need Attention</strong></h2> 
                    <h3> 
                        We found some visible holes or pits in your teeth! If you look closely, you can see brown/black staining on the surface of your teeth. 
                        This might be caused by eatting too much sugars and not cleaning your teeth well. 

                        <p></p>
                        <b>Treatment:</b> We recommend you to brush your teeth with fluoride toothpaste after every meal. You might need to brush your gums as well
                        to keep them healthy. Additionally, we recommend you to floss your teeth once a day to remove plaque and food that's stuch between your teeth.

                        If cavities aren't treated, they get larger and affect deeper layers of your teeth. They can lead to a severe toothache, infection and tooth loss.
                        You may also want to visit your dentist soon to get proper treatment.
                    </h3>
                </section> 

                <section className="report_section">
                    <h1> Dental Plaque </h1>
                    <h2> Status: <strong className = "text-danger">Need Attention</strong></h2> 
                    <h3> 
                        We found some dental plaque on your teeth. If you look closely, you might see those colorless or pale yellow film that is formed on your teeth. 

                        <p></p>
                        <b>Treatment:</b> Plaque is the root of many oral health issues.  The bacteria in plaque produce acids that attack tooth enamel causing cavities.
                        We recommend you to brush and floss your teeth more often. Otherwise, when it mineralizes into tartar, they can only be removed by a dental professional. 

                    </h3>
                </section> 

                <section className="report_section">
                    <h1> Wisdom Teeth </h1>
                    <h2> Status: <strong className = "text-info">Good Condition</strong></h2> 
                    <h3> 
                        We didn't seem to see your wisdom teeth coming out. 

                        <p></p>
                        <b>Treatment:</b> Even though everything seems normal right now, your wisdom teeth can still be underneath your gum. If you haven't done so already,
                        we recommend you to go see your dentist and do a regular check-up when you have time. Here is the list of free dental care if needed: https://www.freedentalcare.us/st/washington

                    </h3>
                </section> 

                <section className="report_section">
                    <h1> Teeth Structure </h1>
                    <h2> Status: <strong className = "text-danger">Need Attention</strong></h2> 
                    <h3> 
                        We did not find any extra teeth in your mouth. However, you teeth are visibly crooked or crowded. 

                        <p></p>
                        <b>Treatment:</b> Since you are still young, we recommend you to do braces as soon as you can. Here is the list of free dental care if needed: https://www.freedentalcare.us/st/washington
                    </h3>
                </section> 

                <section className="report_section">
                    <h1> Tongue Coating </h1>
                    <h2> Status: <strong className = "text-info">Good Condition</strong></h2> 
                    <h3> 
                        Your tongue color seems normal (pink).

                        <b>Treatment:</b> Keep up the good work and remember to brush your tongue on daily basis. 
                    </h3>
                </section> 

                <section className="report_section">
                    <h1> Dental Crown </h1>
                    <h2> Status: <strong className = "text-info">Good Condition</strong></h2> 
                    <h3> 
                        We didn't find dental crown in your mouth.

                        <p></p>
                        <b>Treatment:</b> None
                    </h3>
                </section> 

                <section className="report_section">
                    <h1> Dental Sealants </h1>
                    <h2> Status: <strong className = "text-danger">Need Attention</strong></h2> 
                    <h3> 
                        We didn't find any sealants on your teeth. However, it is better to have them since they can protect you from cavities.

                        <p></p>
                        <b>Treatment:</b> According to CDC, "Children with a signed permission slip from their parents or guardians who do not 
                        have dental sealants will get them applied, typically at no cost. Any child that needs additional follow-up care will 
                        get a referral to a local dentist."
                    </h3>
                </section> 

                <section className="report_section">
                    <h1> Denture </h1>
                    <h2> Status: <strong className = "text-info">Good Condition</strong></h2> 
                    <h3> 
                        We didn't find denture in your mouth.

                        <p></p>
                        <b>Treatment:</b> None.
                    </h3>
                </section> 
                <div className="text-center">
                    <button onClick={this.props.onClick} type="button" className="btn btn-info mt-5 mb-5">Save you report</button>
                </div>
            </div>
        )
    }
}