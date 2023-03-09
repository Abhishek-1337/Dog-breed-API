import React from "react";
import Mainbody from "../components/MainBody/Mainbody";
import Navbar from "../components/Navbar/Navbar";

export default function Home(){
    return (
        <React.Fragment>
            <Navbar />
            <Mainbody />
        </React.Fragment>
    );
}