import React, {Component} from 'react';
import Header from './header';
import Footer from './footer';
import Smile_img from './img/smile.png'
import Report from './report';
import ScanButton from "./scanButton"
import ShowReportButton from "./showReportButton"
import { scroller } from "react-scroll";
import GetPhone from './GetPhone';
import About from './about'
import ScanPartOne from './scanPart1';
import ScanPartTwo from './scanPart2';
import ScanPartThree from './scanPart3';

export default class Home extends Component {
    constructor(props) {
        super(props) 
        this.myref = React.createRef()
        this.handleScanClick = this.handleScanClick.bind(this);
        this.handleReadyToScanClick = this.handleReadyToScanClick.bind(this);
        this.handleOneToTwoClick = this.handleOneToTwoClick.bind(this);
        this.handleTwoToThreeClick = this.handleTwoToThreeClick.bind(this);
        this.handleReportClick = this.handleReportClick.bind(this);
        this.handleGoBackClick = this.handleGoBackClick.bind(this);
        this.scrollToSection = this.scrollToScanSection.bind(this);
        this.scrollToPhoneSection = this.scrollToPhoneSection.bind(this);
        this.state = {
            showAbout: false,
            showPhone: false,
            showCamera: false,
            showPartOne: false,
            showPartTwo: false,
            showPartThree: false,
            showScan: true,
            showReport: false,
            buttonDisabled: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(
                {buttonDisabled: false}
            )
        }, 5000);
    }

    handleScanClick = () => {
        this.setState(
            {
                showPhone: true,
                showCamera: false,
                showScan: false,
                showReport: false,
                buttonDisabled: true
            }
        )
        this.scrollToPhoneSection();
    }

    handleReadyToScanClick = () => {
        this.setState(
            {
                showPhone: false,
                showPartOne: true,
                showScan: false,
                showReport: false,
                buttonDisabled: true
            }
        )
        this.scrollToSection()
    }

    handleOneToTwoClick = () => {
        this.setState(
            {
                showPhone: false,
                showPartOne: false,
                showPartTwo: true,
                showScan: false,
                showReport: false,
                buttonDisabled: true
            }
        )
        this.scrollToSection()
    }

    handleTwoToThreeClick = () => {
        this.setState(
            {
                showPhone: false,
                showPartTwo: false,
                showPartThree: true,
                showScan: false,
                showReport: false,
                buttonDisabled: true
            }
        )
        this.scrollToSection()
    }


    handleReportClick = () => {
        this.setState(
            {
                showReport: true,
                showPartThree: false,
                buttonDisabled: true
            }
        )

        this.scrollToPhoneSection();
    }

    handleGoBackClick = () => {
        this.setState(
            {
                showReport: false,
                showCamera: false,
                showScan: true
            }
        )
    }

    scrollToPhoneSection = () => {
        scroller.scrollTo("reportPlaceHolder", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
        this.setState(
            {buttonDisabled: true}
        )
      };

    scrollToScanSection = () => {
        scroller.scrollTo("reportPlaceHolder", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      };

    render() {
        let button;
        let partOne;
        let partTwo;
        let partThree;
        let report;
        let phone;
        let about;
        if (this.state.showScan) {
            button = 
                <div>
                    <ScanButton onClick={this.handleScanClick} onMount={this.scrollToScanSection}/>
                </div>
        }

        if (this.state.showAbout) {
            about = 
            <div>
                <About></About>
            </div>
        }

        if (this.state.showReport) {
            report = <Report onClick={this.handleGoBackClick}/>
        }

        if (this.state.showPhone) {
            phone = <GetPhone className="phno-entry" onClick={this.handleReadyToScanClick}/>
        }

        if (this.state.showPartOne) {
            partOne = <ScanPartOne onClick={this.handleOneToTwoClick} disabled={this.state.buttonDisabled}/>
        }

        if (this.state.showPartTwo) {
            partTwo = <ScanPartTwo onClick={this.handleTwoToThreeClick} disabled={this.state.buttonDisabled}/>
        }

        if (this.state.showPartThree) {
            partThree = <ScanPartThree onClick={this.handleReportClick} disabled={this.state.buttonDisabled}/>
        }

        return(
            <>  
                <Header/>
                    <main>
                        <section className="blank"></section>
                            <img className="background_img" src={Smile_img} alt="People smiling"/>
                            <div class="text-box">
                                <h1>Affordable Healthy Smiles</h1>
                                <h4>Make dental care accessible to everyone</h4>
                                {button}
                            </div>
                         <div>
                         {phone}
                         <div id="reportPlaceHolder" name ="reportPlaceHolder"></div>
                         {partOne}
                         {partTwo}
                         {partThree}
                         </div>
                        {report}
                        
                    </main>
                <Footer/>
            </>
        )
    }
}