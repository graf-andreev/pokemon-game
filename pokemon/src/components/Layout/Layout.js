import React from "react";
import styles from './Layout.module.css'

const Layout = ({title, desc, urlBg, colorBg, children}) => {
    const style = {};
    if (urlBg) { style.backgroundImage = `url(${urlBg})`}
    if (colorBg) { style.backgroundColor = colorBg }
    return(
        <section style={urlBg? {background: `url(${urlBg})`} : {background: colorBg}} className={styles.root}>
            <div className={styles.wrapper}>
                <article>
                    <div className={styles.title}>
                        <h3>{title}</h3>
                        <span className={styles.separator}></span>
                    </div>
                    <div className={`${styles.desc} ${styles.full}`}>
                        <p>{desc}</p>
                    </div>
                    {children}
                </article>
            </div>
        </section>
    )
}

export default Layout