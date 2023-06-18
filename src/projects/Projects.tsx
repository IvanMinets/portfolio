import React from 'react';
import styles from './Projects.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/project";


const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.projects}>
                    <Project title="Todolist" description="Todolist bla bla bla" style=""/>
                    <Project title="Social Network" description="Social network bla bla bla" style=""/>
                    <Project title="Counter" description="Counter bla bla bla" style=""/>
                </div>
            </div>
        </div>
    );
}

export default Projects;