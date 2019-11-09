import React from 'react';
import Collectionitem from "../Collectionitem/Collectionitem";
import "./Collection-preview.scss";

const Collectionpreview=({title,items})=>(
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((value,index)=>index<4).map(({id,...ortheritemprops})=>(
                    <Collectionitem key={id} {...ortheritemprops}></Collectionitem>
                ))
            }
        </div>
    </div>
)
export default Collectionpreview;

