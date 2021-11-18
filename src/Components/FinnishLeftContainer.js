import React from 'react';
import styles from './LeftContainer.module.css';
import Flag from 'react-world-flags';
import { MdLocationPin, MdPhone, MdMail } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';
import { FaVolleyballBall } from 'react-icons/fa';
import { GiDiscGolfBasket } from 'react-icons/gi';
import { BiBookBookmark } from 'react-icons/bi';

export default function FinnishLeftContainer() {

    return (
        <div className={ styles.leftcontainer }>
            <h1>Matias Koivumaa</h1>
            <div className={ styles.subContainer }>
                <h2 className={ styles.title }>Yhteystiedot</h2>
                <div className={ styles.logoContainer }>
                    <MdLocationPin className={ styles.logo } />
                    <div className={ styles.contactInfo }>
                        <text className={ styles.subTitle }>Osoite:</text>
                        <text>Kaitoväylä 28 as 29</text>
                        <text className={ styles.Padding }>90570 Oulu</text>
                    </div>
                </div>
                <div className={ styles.logoContainer }>
                    <MdPhone className={ styles.logo } />
                    <div className={ styles.contactInfo }>
                        <text className={ styles.subTitle }>Puhelin:</text>
                        <text className={ styles.Padding }>045 866 7183</text>
                    </div>
                </div>
                <div className={ styles.logoContainer }>
                    <MdMail className={ styles.logo } />
                    <div className={ styles.contactInfo }>
                        <text className={ styles.subTitle }>Sähköposti:</text>
                        <text className={ styles.Padding }>matiaskoivumaa@gmail.com</text>
                    </div>
                </div>
                <div className={ styles.logoContainer }>
                    <BsGithub className={ styles.logo } />
                    <div className={ styles.contactInfo }>
                        <text className={ styles.subTitle }>GitHub:</text>
                        <a className={ styles.githubLink } href="https://github.com/MatiasKoivumaa" target="_blank" rel="noreferrer">github.com/MatiasKoivumaa</a>
                    </div>
                </div>
            </div>
            <div className={ styles.subContainer }>
                <h2 className={ styles.title }>Kielet</h2>
                <div className={ styles.languageContainer }>
                    <div className={ styles.languages }>
                        <Flag code="fi" height="25" />
                        <text>Suomi</text>
                    </div>
                    <div className={ styles.languages }>
                        <Flag code="gb" height="20" />
                        <text>Englanti</text>
                    </div>
                </div>
            </div>
            <div className={ styles.subContainer }>
                <h2 className={ styles.title }>Harrastukset</h2>
                <div className={ styles.hobbyContainer }>
                    <div className={ styles.logoContainer }>
                        <FaVolleyballBall className={ styles.logo } />
                        <div>
                            <text>Lentopallo</text>
                        </div>
                    </div>
                    <div className={ styles.logoContainer }>
                        <GiDiscGolfBasket className={ styles.logo } />
                        <div>
                            <text>Frisbeegolf</text>
                        </div>
                    </div>
                    <div className={ styles.logoContainer }>
                        <BiBookBookmark className={ styles.logo } />
                        <div>
                            <text>Lukeminen</text>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}
