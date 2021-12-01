import React from 'react'
import styles from './RightContainer.module.css';

export default function FinnishRightContainer() {

    return (
        <div className={ styles.rightcontainer }>
            <div>
                <h2 className={ styles.title }>Profiili</h2>
                <p className={ styles.profile }>
                    Määrätietoinen ohjelmistokehitykseen suuntautunut tietotekniikan tuleva ammattilainen.
                    Aidosti kiinnostunut kehittämään omaa osaamistaan ja oppimaan uutta. Motivoitunut ja oma-aloitteinen
                    tiimipelaaja, joka haluaa päästä käyttämään opittuja taitoja työelämässä.
                </p>
            </div>
            <div className={ styles.subContainer }>
                <h2 className={ styles.title }>Koulutus</h2>
                <text className={ styles.subTitle }>Oulun ammattikorkeakoulu | 08/2020 -</text>
                <text className={ styles.Padding }>Insinööri (AMK), Tieto- ja viestintätekniikka</text>
                <text className={ styles.subTitle }>Pellon Lukio | 08/2015 - 05/2018</text>
            </div>
            <div className={ styles.subContainer }>
                <h2 className={ styles.title }>Työkokemus</h2>
                <text className={ styles.subTitle }>Kaskipuu Oy 05/2021 - 08/2021</text>
                <text className={ styles.Padding }>Tuotantotyöntekijä</text>
                <text className={ styles.subTitle }>Pellopuu Oy 05/2018 - 08/2018</text>
                <text className={ styles.Padding }>Tuotantotyöntekijä</text>
                <text className={ styles.subTitle }>Metsähallitus Metsätalous Oy 06/2017</text>
                <text>Metsän istuttaja</text>
            </div>
            <div className={ styles.subContainer }>
                <h2 className={ styles.title }>Taidot</h2>
                <text>JavaScript, Java, C++, C</text>
                <text>React.js, Node.js, Spring</text>
                <text>Git, MySQL</text>
                <text>Ongelmanratkaisu</text>
            </div>
        </div>
    )
}
