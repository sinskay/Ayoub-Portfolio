import Image from "next/image"
import styles from "./Hero.module.scss"
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = "The Art of Editing is About Making the Invisible Visible.";
export default function Hero() {


  return (
    <div className={`${styles.hero} max-md:!bg-transparent pt-14 flex flex-col items-center justify-center min-h-screen`} id="home">
      <div className={`${styles.avatar} w-fit rounded-full`}>
        <Image src="/assets/avatar.png" alt="hero" width={170} height={170} />
      </div>
      <h1 className="text-3xl font-bold mt-4 text-center max-w-[500px]">
        <TextGenerateEffect words={words} />
      </h1>

      <p className="mt-5 text-center max-w-[600px] text-lg text-[#C5C5C5]">
        I&apos;m Ayoub, an 18-year-old video editor. With experience in various projects, I&apos;m passionate about crafting engaging visual content. Let&apos;s collaborate and bring your ideas to life!
      </p>

      <div className="experiencePrograms mt-14 mb-40">
        <h2 className="text-base font-bold text-[#C5C5C5] uppercase tracking-wider">
          Experience with
        </h2>
        <div className="flex justify-center items-center mt-5 ">
          <Image src="/assets/icons/afterEffects.svg" alt="programs" width={45} height={45} className="mr-2 cursor-pointer hover:-translate-y-1.5 ease-in duration-100" />
          <Image src="/assets/icons/premiere.svg" alt="programs" width={45} height={45} className="cursor-pointer hover:-translate-y-1.5 ease-in duration-100" />
        </div>
      </div>
    </div>
  )

}