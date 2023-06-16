import React from 'react';
import style from './Skills.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        // можно промапить свои скиллы (метод map)
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title="JS" description="lorem lorem lorem lorem lorem lorem lorem"/>
                    <Skill title="JS" description="lorem lorem lorem lorem lorem lorem lorem21342423423432"/>
                    <Skill title="JS" description="lorem lorem lorem lorem lorem lorem lorem45665445654654"/>
                </div>
            </div>
        </div>
    );
};

export default Skills;