import React, { useState } from 'react'
import Cell from '../Cell/Cell';
import './Table.css'

const Table = (props) => {
    let tableArr = [];
    const width = props.cols * 16;
    const [isDrawning, setDraw] = useState(false);

    for (let i = 0; i < props.rows; i++) {
        for (let j = 0; j < props.cols; j++) {
            let boxId = i + " " + j;
            let boxClass = props.table[i][j] ? "box on" : "box off";
            tableArr.push(<Cell boxClass={boxClass} key={boxId} boxId={boxId} row={i} col={j} selectBox={props.selectBox} isDrawning={isDrawning} />)
        }
    }

    return (
        <div className="table" onMouseDown={() => setDraw(true)} onMouseUp={() => setDraw(false)} style={{ width: width }}>
            {tableArr}
        </div>
    )
}

export default Table