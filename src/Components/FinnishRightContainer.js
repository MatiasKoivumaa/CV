import React from 'react'
import styles from './RightContainer.module.css';

export default function FinnishRightContainer() {

    return (
        <div className={ styles.rightcontainer }>
            <div>
                <h2 className={ styles.title }>Profiili</h2>
                <p>
                    Opiskelen tällä hetkellä tietojenkäsittelytiedettä ja pärjään siinä erittäin hyvin
                    Opintojeni aikana olen intohimoinen elektroniikasta ja ohjelmistoista
                    kehitystä. Olen kunnianhimoinen ja opin uusia asioita nopeasti. Haluan
                    työskennellä mielenkiintoisten ja haastavien ongelmien kanssa.
                </p>
            </div>
            <div className={ styles.subContainer }>
                <h2 className={ styles.title }>Koulutus</h2>
                <text className={ styles.subTitle }>Oulun ammattikorkeakoulu | 08/2020 -</text>
                <text className={ styles.Padding }>Insinööri(AMK), Tieto- ja viestintätekniikka</text>
                <text className={ styles.subTitle }>Lukio | 08/2015 - 05/2018</text>
            </div>
            <div className={ styles.subContainer }>
                <h2 className={ styles.title }>Työkokemus</h2>
                <text className={ styles.subTitle }>Pellopuu Oy 05/2018 - 08/2018</text>
                <text className={ styles.Padding }>Kesätyöläinen</text>
                <text className={ styles.subTitle }>Metsähallitus Metsätalous Oy 06/2017</text>
                <text>Metsän istuttaja</text>
            </div>
            <div className={ styles.subContainer }>
                <h2 className={ styles.title }>Tekniset taidot</h2>
                <text>C++, C, Java, Javascript</text>
                <text>React.js, Node.js, Spring, Git, SQL</text>
            </div>
        </div>
    )
}
