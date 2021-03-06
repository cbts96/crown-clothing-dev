import React from 'react';
import "./meuitem.scss"

const Menuitem = ({title,imageUrl,size})=>(
    <div className={`${size} menu-item`}>
        <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}} />
        <div className='content'>
          <div className='title'>{title.toUpperCase()}</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
)
export default Menuitem;