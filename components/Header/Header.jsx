import Link from "next/link";
import styles from './Header.module.scss'
import MobileNav from './MobileNav'

export default function Header() {


  return (
    <header className={`${styles.header} flex justify-around items-center text-white py-5
    max-md:px-12 max-sm:px-6`}>
      <h1 className={styles.logo}>AYOUB</h1>
      <nav className={`${styles.nav} flex-1 max-w-[473px] flex items-center`}>
        <ul className="flex-1 flex justify-between items-center max-md:hidden">
          <li>
            <Link href="#home" scroll={true}>Home</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#feedback">Feedback</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        <MobileNav />

      </nav>
    </header>
  )
}