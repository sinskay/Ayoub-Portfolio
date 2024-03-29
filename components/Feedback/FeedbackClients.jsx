import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[25rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        pauseOnHover={false}
      />
    </div>
  );
}

export const testimonials = [
  {
    quote: "I am very happy with the service I received from Ayoub. he is very patient and take the time to explain things to you. I would highly recommend them to anyone looking for a reliable and professional company.",
    name: "Charles Dickens",
    rate: 5,
    image: "/assets/avatars/avatar1.svg",
  },
  {
    quote: "Absolutely thrilled with the service provided by Ayoub! His patience and willingness to explain every detail made the process smooth and stress-free. I highly recommend him to anyone seeking professionalism and reliability.",
    name: "William Shakespeare",
    rate: 4,
    image: "/assets/avatars/avatar2.svg",
  },
  {
    quote: "I cannot speak highly enough of Ayoub's service. His patience and expertise were evident throughout, and he took the time to ensure I was completely satisfied. I wouldn't hesitate to recommend him to anyone in need of a trustworthy professional.",
    name: "Edgar Allan Poe",
    rate: 4.5,
    image: "/assets/avatars/avatar3.svg",
  },
  {
    quote: "Ayoub's service was outstanding from start to finish. His patience and dedication to ensuring I understood everything were truly appreciated. I wouldn't hesitate to recommend him to anyone looking for a dependable and professional service provider.",
    name: "Jane Austen",
    rate: 4.5,
    image: "/assets/avatars/avatar4.svg",
  },
  {
    quote: "Thanks to Ayoub, my experience was seamless and stress-free. His patience and expertise were evident throughout, and I couldn't be happier with the results. I highly recommend him to anyone in need of top-notch service.",
    name: "Herman Melville",
    rate: 5,
    image: "/assets/avatars/avatar5.svg",
  },
];