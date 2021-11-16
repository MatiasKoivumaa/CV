import React from 'react';
import styles from './MainContainer.module.css';
import FinnishLeftContainer from './FinnishLeftContainer';
import FinnishRightContainer from './FinnishRightContainer';

export default function FinnishMainContainer() {
    
    return (
        <div className={ styles.maincontainer }>
            <FinnishLeftContainer />
            <FinnishRightContainer />
        </div>
    )
}
