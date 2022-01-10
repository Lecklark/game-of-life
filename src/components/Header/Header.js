import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <div className={styles.header_logo}><img src={logo} alt="Project's logo" /></div>
            </div>
        </header>
    )
}

export default Header