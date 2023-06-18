import React from 'react';
import styles from './project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}

const Project = (props: ProjectPropsType) => {
    return (
        <div className={styles.project}>
            <div>
                <button>Watch</button>
            </div>
            <div>
                <h3>{props.title}</h3>
                <span className={''}>{props.description}</span>
            </div>
        </div>
    );
};

export default Project;