import React from 'react'
import styles from './Buttons.module.css'

const Buttons = (props) => {
    return (
        <div className={styles.buttons_wrap}>
            <button className={styles.btn} onClick={props.randPos}>Rand</button>
            <button className={styles.btn} onClick={props.playBtn}>Play</button>
            <button className={styles.btn} onClick={props.pauseBtn}>Pause</button>
            <button className={styles.btn} onClick={props.speedUp}>Speed Up</button>
            <button className={styles.btn} onClick={props.slowDown}>Slow Down</button>
            <button className={styles.btn} onClick={props.clearBtn}>Clear</button>
        </div>
    )
}

export default Buttons