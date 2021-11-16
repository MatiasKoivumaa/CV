import React from 'react'
import styles from './MainContainer.module.css';
import EnglishLeftContainer from './EnglishLeftContainer';
import EnglishRightContainer from './EnglishRightContainer';

export default function EnglishMainContainer() {

    return (
        <div className={ styles.maincontainer }>
            <EnglishLeftContainer />
            <EnglishRightContainer />
        </div>
    )
}
