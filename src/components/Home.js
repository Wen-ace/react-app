import React, { Component } from 'react';
import HeaderNav from './HeaderNav';
export default class Home extends Component {
    render(){
        return (
            <div className="home">
                <HeaderNav/>
                Home
            </div>
        );
    }
}