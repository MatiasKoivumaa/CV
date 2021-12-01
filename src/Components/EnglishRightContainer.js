import React from 'react';
import styles from './RightContainer.module.css';

export default function EnglishRightContainer() {

    return (
        <div className={ styles.rightcontainer }>
            <div>
                <h2 className={ styles.title }>Profile</h2>
                <p className={ styles.profile }>
                    Determined software development oriented future information technology professional.
                    Genuinely interested in developing software development skills and learning new things. 
                    Motivated and proactive team player who wants to put learned skills to use in working life.
                </p>
            </div>
            <div className={ styles.subContainer }>
                <h2 className={ styles.title }>Education</h2>
                <text className={ styles.subTitle }>Oulu University of Applied Sciences | 08/2020 -</text>
                <text className={ styles.Padding }>Bachelor of Engineering, Information Technology</text>
                <text className={ styles.subTitle }>Upper secondary school | 08/2015 - 05/2018</text>
            </div>
            <div className={ styles.subContainer }>
                <h2 className={ styles.title }>Work experience</h2>
                <text className={ styles.subTitle }>Kaskipuu Oy 05/2021 - 08/2021</text>
                <text className={ styles.Padding }>Production worker</text>
                <text className={ styles.subTitle }>Pellopuu Oy 05/2018 - 08/2018</text>
                <text className={ styles.Padding }>Production worker</text>
                <text className={ styles.subTitle }>Metsähallitus Metsätalous Oy 06/2017</text>
                <text>Tree planter</text>
            </div>
            <div className={ styles.subContainer }>
                <h2 className={ styles.title }>Skills and abilities</h2>
                <text>JavaScript, Java, C++, C</text>
                <text>React.js, Node.js, Spring</text>
                <text>Git, MySQL</text>
                <text>Problem solving skills</text>
            </div>
        </div>
    )
}
