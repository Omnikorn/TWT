import React from "react";
import "./menu-item.styles.scss"


const menuItem = ({title, imageUrl, size}) => (

<div 
className = {`${size} menu-item`}>
    <div className="background-image"  style={{
    backgroundImage:`url(${imageUrl})`
}}/>
                <div className ="content">
                    <h1 className="title">{title}</h1>
                    <span className="subtitle">SHOP</span>

                </div>

            </div>
)

export default menuItem;