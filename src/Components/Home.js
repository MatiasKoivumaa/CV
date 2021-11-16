import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {

    return (
        <div className={ styles.Home }>
            <h2 className={ styles.Name }>CV Matias Koivumaa</h2>
            <div className={ styles.ButtonContainer }>
                <Link to="/fin"><button className={ styles.Buttons }>CV suomeksi</button></Link>
                <Link to="/eng"><button className={ styles.Buttons }>CV in English</button></Link>
            </div>
        </div>
    )
}
