import React from 'react';
import styles from './MainContainer.module.css';

export default function MainContainer() {
    
    return (
        <div className={ styles.maincontainer }>
            <div className={ styles.leftcontainer }>
                <h1>Matias</h1>
                <h1>Koivumaa</h1>
                <div className={ styles.subContainer }>
                    <h2 className={ styles.title }>Contact</h2>
                    <text className={ styles.subTitle }>Address:</text>
                    <text>Kaitoväylä 28 as 29</text>
                    <text>90570 Oulu</text>
                    <text className={ styles.subTitle }>Phone:</text>
                    <text>045 866 7183</text>
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
            <div className={ styles.rightcontainer }>
                <div>
                    <h2 className={ styles.title }>Profile</h2>
                    <text>
                        I am currently studying computer science and doing very well in 
                        my studies, I am passionate about electronics and software 
                        development. I am ambitious and learn new things quickly. I want 
                        to work with interesting and challenging problems.
                    </text>
                </div>
                <div className={ styles.subContainer }>
                    <h2 className={ styles.title }>Education</h2>
                    <text className={ styles.subTitle }>Oulu University of Applied Sciences | 08/2020 -</text>
                    <text>Bachelor of Engineering, Information Technology</text>
                    <text className={ styles.subTitle }>Upper secondary school | 08/2015 - 05/2018</text>
                </div>
                <div className={ styles.subContainer }>
                    <h2 className={ styles.title }>Work experience</h2>
                    <text className={ styles.subTitle }>Pellopuu Oy 05/2018 - 08/2018</text>
                    <text>Summer trainee</text>
                    <text className={ styles.subTitle }>Metsähallitus Metsätalous Oy 06/2017</text>
                    <text>Tree planter</text>
                </div>
                <div className={ styles.subContainer }>
                    <h2 className={ styles.title }>Technical skills</h2>
                    <text>C++, C, Java, Javascript</text>
                    <text>React.js, Node.js, Spring, Git, SQL</text>
                </div>
            </div>
        </div>
    )
}
