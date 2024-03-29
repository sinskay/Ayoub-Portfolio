import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.scss";

export default function Footer() {

  return (
    <footer className={`bg-[#222222] flex justify-between items-center text-white py-5
      px-60
    max-md:px-12 max-sm:px-6`}>
      <p>
        &copy; 2024 All rights reserved
      </p>

      <div className="flex items-center">
        <Link href="https://discord.com/users/731871266763702332" target="_blank" rel="noreferrer" className="mr-5">
          <Image src="/assets/icons/discord.svg" alt="discord" width={24} height={24}
            className={`${styles.rotate360} transition duration-300 ease-in-out`}
          />
        </Link>
        <Link href="https://twitter.com/azero135" target="_blank" rel="noreferrer">
          <Image src="/assets/icons/x-twitter.svg" alt="twitter" width={24} height={24}
            className={`${styles.rotate360} transition duration-300 ease-in-out`}
          />
        </Link>
      </div>

    </footer>
  )
}