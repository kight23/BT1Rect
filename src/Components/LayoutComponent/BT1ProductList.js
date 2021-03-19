import React, { Component } from 'react'
import BT1ProductItem from './BT1ProductItem'

export default class BT1ProductList extends Component {
    render() {
        return (
            <div className="row text-center">
                <div className="col-lg-3 col-md-6 mb-4">
                    <BT1ProductItem />
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <BT1ProductItem />
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <BT1ProductItem />
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <BT1ProductItem />
                </div>
            </div>
        )
    }
}
