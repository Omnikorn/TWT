import React from "react";
import "./menu-item.styles.scss"


const menuItem = ({title}) => (

<div className = "menu-item">
                <div className ="content">
                    <h1 className="title">{title}</h1>
                    <span className="subtitle">SHOP</span>

                </div>

            </div>
)

export default menuItem;