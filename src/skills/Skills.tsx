import React from 'react';
import style from './Skills.module.css'
import styleContainer from "../common/styles/Container.module.css";

const Skills = () => {
    return (
        // можно промапить свои скиллы (метод map)
        <div className={style.skillsBlock}>
            <div className={styleContainer.container}>
                <h2>Skills</h2>
            </div>
        </div>
    );
};

export default Skills;