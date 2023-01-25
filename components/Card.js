import styles from "./Card.module.css"; 
function Card(props){
    return(
        <section className={styles.body}>
            <div className={styles.Img}>
                 <img src={props.src} /> 
            </div>

            <div className={styles.title}> 
             <h1>{props.title}</h1>
            </div>

            <div>
                <h2 className={styles.title1}>{props.title1}</h2>
                <h3 className={styles.title2}>{props.title2}</h3>
                <div className={styles.sec}>
                    <h4 className={styles.title3}>{props.title3}</h4>
                    <h4 className={styles.title4}>{props.title4}</h4>
                </div>
            </div>

        </section>
    )
}
export default Card;