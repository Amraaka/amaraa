import styles from './AboutMe.module.css'
function About(){
    return(
        <section className={styles.container}>
             <div className={styles.left} >
                <h1 className={styles.Skills}><span style={{color: '#C778DD'}}>#</span>about-me<div className={styles.zuraas}></div></h1>
                <div className={styles.text}>
                Hello, i’m Elias! <br></br> <br></br>

I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.<br></br><br></br> 

Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                </div> 
                <h1 className={styles.Read}>Read more -- </h1>
            </div>
            <div className={styles.right}>
                <img src='img/blackHoodie.png'/>
            </div>
        </section>
    )
    
}
export default About;