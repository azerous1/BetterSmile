import React, {Component} from 'react';
import Header from './header';
import Footer from './footer';
import Smile_img from '../../img/smile.png'
import {Report} from '../scan/report';
import ScanButton from "../scan/scanButton"
import {scroller} from "react-scroll";
import {GetPhone} from '../scan/GetPhone';
import {ScanPartOne} from '../scan/scanPart1';
import {ScanPartTwo} from '../scan/scanPart2';
import {ScanPartThree} from '../scan/scanPart3';

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
        return (
            <>
                <Header/>
                <main>
                    <section className="blank"></section>
                    <img className="background_img" src={Smile_img} alt="People smiling"/>
                    <div class="text-box">
                        <h1>Affordable Healthy Smiles</h1>
                        <h4>Make dental care accessible to everyone</h4>
                        {this.state.showScan &&
                        <div>
                            <ScanButton onClick={this.handleScanClick} onMount={this.scrollToScanSection}/>
                        </div>
                        }
                    </div>
                    <div>
                        {this.state.showPhone &&
                        <GetPhone className="phno-entry" onClickCallback={this.handleReadyToScanClick}/>}
                        <div id="reportPlaceHolder" name="reportPlaceHolder"></div>
                        {this.state.showPartOne &&
                        <ScanPartOne onClickCallback={this.handleOneToTwoClick}/>}
                        {this.state.showPartTwo &&
                        <ScanPartTwo onClickCallback={this.handleTwoToThreeClick}/>}
                        {this.state.showPartThree &&
                        <ScanPartThree onClickCallback={this.handleReportClick}/>}
                    </div>
                    {this.state.showReport && <Report onClickCallback={this.handleGoBackClick}/>}
                </main>
                <Footer/>
            </>
        )
    }
}
