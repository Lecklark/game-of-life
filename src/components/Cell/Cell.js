import React from 'react'
import './Cell.css'

const Cell = (props) => {
    const selectBox = () => {
        props.selectBox(props.row, props.col)
    }

    return (
        <div className={props.boxClass} id={props.boxId} onClick={selectBox} onMouseLeave={() => { if (props.isDrawning) selectBox() }}></div>
    )
}

export default Cell