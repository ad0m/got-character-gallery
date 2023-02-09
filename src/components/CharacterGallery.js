import React from 'react';
import characterData from '../../../Practice/14-react-state-deployment-module/03-netlify-deployment-lesson/activities/04-Stu-RemoteRepoSetUp/lor-cicd-pipeline/src/data/characterData.json'
import Character from './Character'

const CharacterGallery = () => {
    const listOfChars = characterData.map((char, i) => <Character {...char} key={i} />)
    return (
        <div data-test="component-char-gallery">
            {listOfChars}
        </div>
    );
};

export default CharacterGallery;