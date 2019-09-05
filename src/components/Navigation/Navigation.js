import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss'

const Navigation = () => (
    <nav>
        <ul className={styles.wrapper}>
            <li className={styles.navigationItem}>
                <Link className={styles.navigationItemLink} to="/">Twitters</Link>
            </li>
            <li className={styles.navigationItem}>
                <Link className={styles.navigationItemLink} to="/articles">Articles</Link>
            </li>
            <li className={styles.navigationItem}>
                <Link className={styles.navigationItemLink} to="/notes">Notes</Link>
            </li>
        </ul>
    </nav>
);

export default Navigation;