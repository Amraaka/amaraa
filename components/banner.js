import Image from 'next/image';
import styles from './banner.module.css'

function Banner(){
    return(
        <section className={styles.container} >
            <div className={styles.left}>
                <h1>Elias is a web designer and front-end developer</h1>
                <h3>He crafts responsive websites where technologies meet creativity</h3>
                <h2>Contact me!!</h2>
            </div>

            <div className={styles.right} >
                 <Image width={469} height={386} src="/img/hha.png" /> 
                <h3 className={styles.g3}><div className={styles.block}></div>Currently working on Portfolio</h3>
            </div>

        </section>
    )
}
export default Banner;