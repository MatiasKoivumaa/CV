import React from 'react'
import styles from './LeftContainer.module.css';

export default function FinnishLeftContainer() {

    return (
        <div className={ styles.leftcontainer }>
            <h1>Matias Koivumaa</h1>
            <div className={ styles.subContainer }>
                <h2 className={ styles.title }>Yhteystiedot</h2>
                <text className={ styles.subTitle }>Osoite:</text>
                <text>Kaitoväylä 28 as 29</text>
                <text className={ styles.Padding }>90570 Oulu</text>
                <text className={ styles.subTitle }>Puhelin:</text>
                <text className={ styles.Padding }>045 866 7183</text>
                <text className={ styles.subTitle }>Sähköposti:</text>
                <text>matiaskoivumaa@gmail.com</text>
            </div>
            <div className={ styles.subContainer }>
                <h2 className={ styles.title }>Kielet</h2>
                <text>suomi</text>
                <text>englanti</text>
            </div>
            <div className={ styles.subContainer }>
                <h2 className={ styles.title }>Harrastukset</h2>
                <text>lentopallo</text>
                <text>frisbeegolf</text>
                <text>lukeminen</text>
            </div>
        </div> 
    )
}
