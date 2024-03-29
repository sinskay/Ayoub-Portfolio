import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Feedback from "@/components/Feedback/Feedback";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className=" bg-[#161513] text-white">
      <Hero />
      <div className="max-md:px-8 max-sm:px-6">
        <Projects />
        <Feedback />
        <Contact />
      </div>
    </main>
  );
}
