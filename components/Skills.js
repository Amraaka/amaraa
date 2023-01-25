import styles from './skills.module.css'
function Skills(){
    return(
        <section className={styles.container}>
            <div className={styles.left} >
                <h1 className={styles.Skills}><span style={{color: '#C778DD'}}>#</span>skills<div className={styles.zuraas}></div></h1>
                <img src='img/skillsZ.png'/>
            </div>

            <div className={styles.right}>
                <div>
                <table className={styles.table1}>
                    <tr>
                        <th>Languages</th>
                    </tr>
                    <tr>
                        <td>TypeScript Lua Python JavaScript</td>
                    </tr>
                </table> 
                </div>

                <div>
                <table className={styles.table2}>
                    <tr>
                        <th>Databases</th>
                    </tr>
                    <tr>
                        <td>SQLite PostgreSQL Mongo</td>
                    </tr>
                </table> 
                 <table className={styles.table2}>
                    <tr>
                        <th>Other</th>
                    </tr>
                    <tr>
                        <td>HTML CSS EJS SCSS REST Jinja</td>
                    </tr>
                </table> 
                </div>

                <div className={styles.div3}>
                <table className={styles.table3}>
                    <tr>
                        <th>Tools</th>
                    </tr>
                    <tr>
                        <td>VSCode Neovim Linux Figma XFCE Arch Git Font Awesome</td>
                    </tr>
                </table> 
                <table className={styles.table3}>
                    <tr>
                        <th>Frameworks</th>
                    </tr>
                    <tr>
                        <td>React Vue Disnake Discord.js Flast Express.js</td>
                    </tr>
                </table> 
                </div>
            </div>

        </section>
    )
}
export default Skills;