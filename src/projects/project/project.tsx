import React from 'react';
import styles from './project.module.css'

type ProjectPropsType = {
    title: string
    description: string
    style: string
}

const Project = (props: ProjectPropsType) => {
    return (
        <div className={styles.project}>
            <div className={styles.imgContainer}>
                <a href="#" className={styles.button}>Watch</a>
            </div>
            <div>{props.title}</div>
            <span className={''}>{props.description}</span>
        </div>
    );
};

export default Project;