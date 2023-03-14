import React from 'react'
import "./Style.css"

const Loading = ({color}) => {
    const style = {
        background: color
    }
    return (
        <div className="lds-ellipsis"><div style={style}></div><div style={style}></div><div style={style}></div><div style={style}></div></div>
    )
}

export default Loading