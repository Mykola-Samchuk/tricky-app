import React from "react"
import "./button.css"

export default function Button({title,onClick}){
    return (
        <button onClick={onClick} className="btn">{title}</button>
    )
}