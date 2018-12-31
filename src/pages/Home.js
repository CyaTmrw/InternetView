import React, { Component } from "react";
import {Grid} from "@material-ui/core";
import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/App.css";

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <NavBar />
                <Grid container direction="column" justify="flex-end">
                    <section className="landing-page">
                        <div className="landing-page-inner">
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Grid item xs={1}></Grid>
                                <Grid item xs={5}>
                                    <div style={{fontSize: 60, marginTop: 100, marginBottom: 280, color: "black"}}>
                                        <b>
                                            Land that job that you have been hunting for.
                                        </b>

                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div></div>
                                </Grid>
                            </Grid>
                        </div>
                    </section>
                    <Grid container direction="column" justify="center" alignItems="center" style={{paddingTop: 40}}>
                        <div className="subtitle">What is Internetview?</div>
                        <p align="center">
                            Internetview helps people land a job by making the process easy as possible.
                            Compare to other job searching site, we are way more easier than them due to making everything done in one place.
                            We will guide users through the whole process from find a desirable job to have an online interview with the employer.
                            We are a plateform for finding jobs and applying to jobs for anyone looking for a job.
                            We also allow employer to post jobs, review submitted applicants, and host online interviews.
                        </p>
                    </Grid>
                    <Grid container direction="column" justify="center" style={{paddingTop: 40, backgroundColor: "rgb(232, 235, 239)"}}>
                        <div className="subtitle">How does it work?</div>
                        <VerticalTimeline animate={false}>
                          <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(33, 150, 243)'}}>
                            <div style={{fontSize: 28}}><b>Find a job that you are interested in</b></div>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(33, 150, 243)'}}>
                            <div style={{fontSize: 28}}><b>Apply for the job by submitting a resume</b></div>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(33, 150, 243)'}}>
                            <div style={{fontSize: 28}}><b>Wait for an interview offer</b></div>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(33, 150, 243)'}}>
                            <div style={{fontSize: 28}}><b>Accept the interview</b></div>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(33, 150, 243)'}}>
                            <div style={{fontSize: 28}}><b>Start an online interview using Internetview</b></div>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(33, 150, 243)'}}>
                            <div style={{fontSize: 28}}><b>Good Luck</b></div>
                          </VerticalTimelineElement>

                        </VerticalTimeline>
                    </Grid>
                </Grid>
                <Footer />
            </div>

        );
    }

}

export default Home;