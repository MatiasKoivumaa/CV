import React from 'react';
import styles from './LeftContainer.module.css';

export default function EnglishLeftContainer() {

    return (
        <div className={ styles.leftcontainer }>
            <h1>Matias Koivumaa</h1>
            <img className={ styles.image } src="1637757689339.jpg" alt="portrait"></img>
            <div className={ styles.subContainer }>
                <h2 className={ styles.title }>Contact</h2>
                <text className={ styles.subTitle }>Address:</text>
                <text>Kaitoväylä 28 as 29</text>
                <text className={ styles.Padding }>90570 Oulu</text>
                <text className={ styles.subTitle }>Phone:</text>
                <text className={ styles.Padding }>045 866 7183</text>
                <text className={ styles.subTitle }>Email:</text>
                <text>matiaskoivumaa@gmail.com</text>
            </div>
            <div className={ styles.subContainer }>
                <h2 className={ styles.title }>Languages</h2>
                <text>Finnish</text>
                <text>English</text>
            </div>
            <div className={ styles.subContainer }>
                <h2 className={ styles.title }>Hobbies</h2>
                <text>Volleyball</text>
                <text>Disc golf</text>
                <text>Reading</text>
            </div>
        </div> 
    )
}
