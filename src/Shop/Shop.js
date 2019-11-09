import React, { Component } from 'react';
import shopdata from "./Shopdata";
import Colllectionpreview from "../Component/Collection-preview/Collection-preview";

export default class Shop extends Component {
    constructor(props) {
        super(props)
        this.state={
            collections:shopdata
        }
    }
    
    render() {
        const {collections}=this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id,...othercollectionprops})=>(
                        <Colllectionpreview key={id} {...othercollectionprops}></Colllectionpreview>
                    ))
                }
            </div>
        )
    }
}
