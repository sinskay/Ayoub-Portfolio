import Image from "next/image";
import { Rating } from "../RateStar";


export default function ClientFeedback({ name, quote, rate, image }) {

  return (
    <fieldset style={{
      background:
        "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
    }} className="text-white my-10 w-[350px] max-w-full relative rounded-xl flex-shrink-0 border-transparent px-8 py-6 md:w-[410px] text-center border ">
      < legend>
        < Image src={image} width={100} height={100} alt="quote" className="rounded-full" />
      </legend >
      <p className="-translate-y-4 font-semibold text-lg">
        {name}
      </p>
      <p className="text-sm">
        {quote}
      </p>
      <div className="flex justify-center mt-2">
        <Rating rating={rate} />
      </div>
    </fieldset >
  )
}