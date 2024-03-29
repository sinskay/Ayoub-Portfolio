import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"


export default function ProjectCard({ title, href, image }) {

  return (
    <Card className="hover:shadow-[5px_5px_rgba(157,_55,_206,_0.4),_10px_10px_rgba(157,_55,_206,_0.3),_15px_15px_rgba(157,_55,_206,_0.2),_20px_20px_rgba(157,_55,_206,_0.1),_25px_25px_rgba(157,_55,_206,_0.05)] transition duration-200 w-[375px] h-[275px] max-sm:w-[300px] max-sm:h-[240px] bg-[#2A2A2A] text-white border-[#2A2A2A] relative">
      <CardHeader className="ounded-lg">
        <Image src={image} alt="Project Image" className="rounded-lg" width={375} height={375} />
      </CardHeader>
      <CardFooter className="flex justify-between items-center">
        <CardTitle>{title}</CardTitle>
        <Link href={href} className="p-1" target="_blank">
          <Image
            src="/assets/icons/arrow.svg"
            className="-rotate-45 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
            alt="Arrow Right"
            width={20}
            height={20}
          />
        </Link>
      </CardFooter>
    </Card>
  )
}