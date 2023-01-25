import Image from 'next/image';
import styles from './Header.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link';

const headerList = [
    {
        name: 'home', 
        path: '/',
    },
    {
        name: 'works', 
        path: '/works',
    },
    {
        name: 'about-me', 
        path: '/about-me',
    },
    {
        name: 'contacts', 
        path: '/contacts',
    },
]

function Header(){
    const router = useRouter();
    return(
        <section className={styles.Header} >
            <h1 className={styles.left} ><Image width={16} height={16} src="/img/hha1.png" /> Elias</h1>
            <ul className={styles.right} >
                {headerList.map(list => (
                    <li className={router.asPath === list.path && styles.listActive}>
                        <Link className={styles.Link} href={list.path}><span className={styles.hashtag}>#</span>{list.name}</Link>
                    </li>
                ))}
                    <li>EN</li>
            </ul>

        </section>
    )
}
export default Header;