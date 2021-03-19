import React, { Component } from 'react'
import BT1Carousel from './BT1Carousel';
import BT1Footer from './BT1Footer';
import BT1Header from './BT1Header';
import BT1ProductList from './BT1ProductList';

export default class BT1Content extends Component {
    render() {
        return (
            <div className="ContentArea">
                <BT1Header />
                <div className="container">
                    {/* Jumbotron Header */}
                    <BT1Carousel />
                    {/* Page Features */}
                    <BT1ProductList />
                    {/* /.row */}
                </div>

                <BT1Footer />
            </div>
        )
    }
}
