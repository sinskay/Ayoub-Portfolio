'use client'


import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import styles from './Header.module.scss'
import { useState } from "react"


export default function MobileNav() {

  const [active, setActive] = useState('');

  return (
    <Sheet>
      <SheetTrigger className="ml-auto hidden max-md:block">
        <Image src="/assets/icons/menu.svg" width={24} height={24} alt="menu" />
      </SheetTrigger>
      <SheetContent className="text-white"
        style={{ backgroundColor: "#222222", borderColor: "#222222" }}>
        <ul className={`${styles.mobileUl} flex flex-col justify-start items-start gap-10 mt-14`}>
          <SheetClose asChild>
            <Link href="#home" onClick={() => setActive("home")}
              className={`${active === "home" ? styles.active : ""}`}>
              <li>
                Home
              </li>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="#projects" onClick={() => setActive("projects")}
              className={`${active === "projects" ? styles.active : ""}`}>
              <li>
                Projects
              </li>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="#experience" onClick={() => setActive("experience")}
              className={`${active === "experience" ? styles.active : ""}`}>
              <li>
                Experience
              </li>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="#feedback" onClick={() => setActive("feedback")}
              className={`${active === "feedback" ? styles.active : ""}`}>
              <li>
                Feedback
              </li>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="#contact" onClick={() => setActive("contact")}
              className={`${active === "contact" ? styles.active : ""}`}>
              <li>
                Contact
              </li>
            </Link>
          </SheetClose>
        </ul>
      </SheetContent>
    </Sheet>
  )
}