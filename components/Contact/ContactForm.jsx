"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast"
import emailjs from "emailjs-com";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";
import { Textarea } from "@/components/ui/textarea"
import { ContactFormSchema } from "@/lib/ContactFormSchema";

import Image from "next/image";

export default function ContactForm() {

  const { toast } = useToast()

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(ContactFormSchema),
    mode: "onSubmit"
  });



  const sendEmail = async (data) => {

    try {
      await emailjs.send("service_4kjrhfr", "template_9asuy39", data, "iL27ZCoZt1qFZlkp_").then((result) => {
        toast({
          variant: "success",
          description: "Your message has been sent.",
        })
      })

    } catch (error) {
      toast({
        variant: "destructive",
        description: "An error occurred while sending your message. Please try again later.",
      })
    } finally {
      reset();
    }



  };
  const handleSend = (data) => {
    const formData = {
      fullname: `${data.firstname} ${data.lastname}`,
      email: data.email,
      message: data.message
    }
    sendEmail(formData);
  };
  return (
    <div className="rounded-2xl p-4 shadow-input bg-black max-md:w-[80vw]">
      <form className="my-8 space-y-5 min-w-full" onSubmit={handleSubmit(handleSend)}>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Mike" type="text" {...register("firstname")} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Rubio" type="text" {...register("lastname")} />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="example@example.com" type="text" {...register("email")} />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" {...register("message")} />
        </LabelInputContainer>


        <button
          className="flex items-center justify-center gap-2 bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send <Image src="/assets/icons/send.svg" alt="send" width={20} height={20} />
          <BottomGradient />
        </button>

      </form>

      <ul>
        <li>
          <p className="text-red-500">
            {errors.firstname && <span>•{errors.firstname.message}</span>}
          </p>
        </li>
        <li>
          <p className="text-red-500">
            {errors.lastname && <span>•{errors.lastname.message}</span>}
          </p>
        </li>
        <li>
          <p className="text-red-500">
            {errors.email && <span>•{errors.email.message}</span>}
          </p>
        </li>
        <li>
          <p className="text-red-500">
            {errors.message && <span>•{errors.message.message}</span>}
          </p>
        </li>
      </ul>

    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className, }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
