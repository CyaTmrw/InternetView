import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import {Grid} from "@material-ui/core";
import https from "../services/https";
import NavBar from "../components/NavBar";
import OfferListItem from "../components/OfferListItem";

class Offers extends Component {
    constructor(props) {
        super(props);
        this.state = {list: []};
    }
    render() {
        let OfferList = this.state.list.map((offer, key) => {
            return <OfferListItem key={key} company={offer.post.companyname} position={offer.post.jobtitle}
                location={offer.post.location} meetingTime={offer.meetingtime} userStatus={offer.confirmed}
                corporateStatus={offer.accepted} applicationId = {offer.applicationid}/>
        });
        return (
            <div className="container">
                <NavBar />
                {OfferList}
            </div>

        );
    }
    componentDidMount() {
        let token = localStorage.getItem("token");
        if (token != null && jwtDecode(token).accountType == "user") {
            https.get("/api/user/applications").then((response) => {
                for (let i = 0; i < response.data[0].length; i++) {
                    this.setState((state) => {
                        state.list = state.list.concat(response.data[0][i]);
                        return state;
                    });
                }
            });
        }

    }

}

export default Offers;