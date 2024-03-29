import Image from "next/image"
import styles from "./Contact.module.scss"
import ContactForm from "./ContactForm"

export default function Contact() {

  return (

    <div className="flex flex-col justify-center items-center gap-10 mt-32 pb-20" id="contact">

      <h1 className={`${styles.sectionTitle} text-5xl font-bold pb-1.5`}>
        Get in touch
      </h1>
      <div className={`${styles.contact} mt-5 flex`}>
        <Image src="/assets/backgrounds/contact.svg" alt="contact" width={400} height={400} />
        <ContactForm />
      </div>

    </div>
  )
}