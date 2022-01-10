import React, { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Buttons from './components/Buttons/Buttons'
import Table from './components/Table/Table'
import Footer from './components/Footer/Footer';


function App() {
    const [params, setParams] = useState({
        speed: 100,
        rows: 30,
        cols: 30,
    })
    const [generation, setGeneration] = useState(0);
    const [table, setTable] = useState(Array(params.rows).fill().map(() => Array(params.cols).fill(false)));
    const [intervalId, setIntervalId] = useState(null);

    const selectBox = (row, col) => {
        let newTable = [...table];
        newTable[row][col] = !newTable[row][col];
        setTable(newTable);
    }

    const randPos = () => {
        let newTable = [...table];
        for (let i = 0; i < params.rows; i++) {
            for (let j = 0; j < params.cols; j++) {
                newTable[i][j] = (Math.random() < 0.25) ? true : false;
            }
        }
        setTable(newTable);
    }

    const playBtn = () => {
        clearInterval(intervalId)
        setIntervalId(setInterval(play, params.speed));
    }

    const pauseBtn = () => {
        clearInterval(intervalId)
    }

    const clearBtn = () => {
        clearInterval(intervalId);
        setTable(Array(params.rows).fill().map(() => Array(params.cols).fill(false)));
        setGeneration(0);
        setIntervalId(null);
        setParams(params => ({ ...params, speed: 100 }))
    }

    const speedUp = () => {
        setParams(params => ({ ...params, speed: params.speed - 20 }))
        clearInterval(intervalId)
        setIntervalId(setInterval(play, params.speed));
    }

    const slowDown = () => {
        setParams(params => ({ ...params, speed: params.speed + 20 }))
        clearInterval(intervalId)
        setIntervalId(setInterval(play, params.speed));
    }

    const play = () => {
        let g = table;
        let g2 = [...table];

        for (let i = 0; i < params.rows; i++) {
            for (let j = 0; j < params.cols; j++) {
                let count = 0;
                if (i > 0) if (g[i - 1][j]) count++;
                if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
                if (i > 0 && j < params.cols - 1) if (g[i - 1][j + 1]) count++;
                if (j < params.cols - 1) if (g[i][j + 1]) count++;
                if (j > 0) if (g[i][j - 1]) count++;
                if (i < params.rows - 1) if (g[i + 1][j]) count++;
                if (i < params.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
                if (i < params.rows - 1 && j < params.cols - 1) if (g[i + 1][j + 1]) count++;
                if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
                if (!g[i][j] && count === 3) g2[i][j] = true;
            }
        }

        setTable(g2);
        setGeneration(generation => generation + 1);
    }

    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <div className='flex-row'>
                    <Buttons randPos={randPos} playBtn={playBtn} pauseBtn={pauseBtn} clearBtn={clearBtn} setParams={setParams} speedUp={speedUp} slowDown={slowDown} />
                    <Table table={table} rows={params.rows} cols={params.cols} selectBox={selectBox} />
                </div>
                <div className='text-info'>Generation: {generation}</div>
            </div>
            <Footer />
        </div>
    )
}

export default App
