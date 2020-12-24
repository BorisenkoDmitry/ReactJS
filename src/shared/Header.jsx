import { hot }from 'react-hot-loader/root';
import * as React from "react";
import styles from "./header.css";
function HeaderComponent() {
    return (
        <div className={styles.helloReact}>
            <h1 className={styles.example}>Hello React</h1>
            <p className={styles.helloReact__p}>I love my work</p>
        </div>
    );
}

export const Header = hot(HeaderComponent);