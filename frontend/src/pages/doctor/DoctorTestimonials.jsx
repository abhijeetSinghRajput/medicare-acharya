import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Highlighter } from "@/components/magicui/highlighter";
import ShinyText from "@/components/ShinyText/ShinyText";
import { transform } from "framer-motion";
import { CardSwipe } from "@/components/ui/card-swipe";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const data = [
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fvritika-naik.webp&w=256&q=75",
    name: "Vritika Naik",
    p: [
      "Regional Head @GirlScript",
      "I am amazed at Devraj's ability to create intriguing designs. At GirlScript, Devraj not only worked with graphic designing but also designed the UI and contributed to the front end of the website. His work ethics are immaculate. His deliveries were always very well executed before time. His energy t...",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Famrit-raj.webp&w=256&q=75",
    name: "Amrit Raj",
    p: [
      "Senior Developer @Ignite Solutions",
      "I had the pleasure of collaborating with Devraj on a project where his exceptional UI/UX skills truly shone. Devraj's design proficiency is remarkable, consistently delivering top-notch work that elevates user experiences. His creativity and keen eye for detail make him an admirable asset when it co...",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fdivya-walia.webp&w=256&q=75",
    name: "Divya Walia",
    p: [
      "Senior Java Developer @Nagarro",
      "I am writing to highly recommend Devraj for any Java fullstackrole. I have had the pleasure of working with Devraj for the past two years at Oneshield, where he has consistently demonstrated strong technical skills and a collaborative attitude. Devraj played a pivotal role in building the applicatio...",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Felavarasan-muthuvalavan.webp&w=256&q=75",
    name: "Elavarasan Muthuvalavan",
    p: [
      "Technical Lead @Ignite Solutions",
      "I had the pleasure of working alongside Devraj, who is an exceptional professional with an impressive command of Angular Templates, and CSS3. Beyond his technical prowess, what truly sets Devraj apart is his keen observational skills and ability to ask relevant questions that elevate the entire team...",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fgaurav-kerkar.webp&w=256&q=75",
    name: "Gaurav Kerkar",
    p: [
      "Software Engineer @OneShield",
      "I highly recommend Devraj Chatribin for anyone seeking a talented software engineer with a strong expertise in Angular. His profound understanding of UI development has consistently elevated our projects. Diligent, collaborative, and always delivering top-notch solutions, Devraj is an asset to any t...",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fchinmay-pendse.webp&w=256&q=75",
    name: "Chinmay Pendse",
    p: [
      "Senior Software Engineer @OneShield",
      "I have had the privilege of mentoring Devraj, my team member, and mentee, for over a year during my overall tenure at Oneshield. Devraj possesses exceptional UI/UX skills, demonstrating an impressive ability to empathize with users and an unwavering attention to detail in his design work. His commit...",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fpraveen-science.webp&w=256&q=75",
    name: "Praveen Kumar",
    p: [
      "Full Stack Developer | ReactJS Specialist | YouTuber",
      "Devraj is not only a great designer but also a community guy. He created the DC community and it's something really commendable. One of the best folks for development and design combined. We have worked on several projects together and that's how I got to know more about him and definitely he's one ...",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Faman-tyagi.webp&w=256&q=75",
    name: "Aman Tyagi",
    p: [
      "UI/UX Designer @BrainAlive",
      "When it comes to design, I can only think of Devraj. He's a fun and knowledgeable person and it was a pleasure and honor to work with him. He is an innovative and a very creative UI/UX Designer as well as an excellent developer. I always enjoyed his creative approach and his design ideas were except...",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Ftrusha-neogi.webp&w=256&q=75",
    name: "Trusha Neogi",
    p: [
      "UI/UX Design Intern @Hexcoderz",
      "Devraj is not only an exceptional UI/UX designer but also a proficient developer! His projects are impressive and indicate how good his UX skills are. He knows how to function in a team setting and has leadership qualities. What makes him stand out is that he is artistic, hardworking, and humble. I ...",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fnijin-nazar.webp&w=256&q=75",
    name: "Nijin Nazar",
    p: [
      "SDE Intern @CuriousJr",
      "I came to know about Devraj as a Web Designer and Content Creator. But by time, I got to know him more personally and found a gem. He is an awesome UI/UX Designer and Web Developer with a lot of modern creative ideas, which makes him outstanding in this field. I always respect his mentorship & leade...",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fankita-sahu.webp&w=256&q=75",
    name: "Ankita Sahu",
    p: [
      "Google Crowdsource Influencer",
      "I've come across a lot of people in tech field but what makes Devraj stand out the most is,his passion and dedication!He has been a great mentor and co-ordinator ,and has shown exemplary leadership skills for his community.His web dev skills and amazing UI/UX aren't just portrayed in his projects,he...",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fvipula-sail.webp&w=256&q=75",
    name: "Vipula Sail",
    p: [
      "Google DSC Lead | Engage Mentee @Microsoft",
      "Devraj's UX design skills are on par with professionals. His projects speak volumes of his talent and his mastery in the UX domain. Not only is he a great mentor, but also a wonderful team player. I highly recommend him for his web development and design proficiency. ",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fgreeshma-medam.webp&w=256&q=75",
    name: "Greeshma Medam",
    p: [
      "Core-Team member @Design & Code",
      "Devraj is someone I have always looked up to as a role model. He is a considerate, determined and detail-oriented person who thoroughly enjoys his work. He is not only a good developer but also a very thoughtful UI/UX designer. His attention to detail was very evident while I worked under his guidan...",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fhardik-kumar.webp&w=256&q=75",
    name: "Hardik Kumar",
    p: [
      "Founder @INAXIA, @Hacking Heist | DevRel intern @Keploy",
      "Devraj worked as a Website Designer at Hacking Heist 1.0 in our team. I was impressed by his consistent efforts in making the UI ready as soon as possible so that developers could start building it. He completed the whole web design within a week, so there's no doubt that he's hard-working too.",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fnimish-jain.webp&w=256&q=75",
    name: "Nimish Jain",
    p: [
      "Core-Team member @Design & Code",
      "I have worked with Devraj on a few projects and assisted him in building Design and Code Community as a Core Team member. He is hard-working and always dedicated to his work. He is not only a great UI/UX designer but also a great web developer. Design and Code wouldn't happen without his leadership ...",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fnitish-singh.webp&w=256&q=75",
    name: "Nitish Singh",
    p: [
      "Software Engineer",
      "Devraj is an example of mature leadership. His interest in learning, understanding, and doing the right thing for the products is what makes him different from others.. He is a very structured UI/UX designer and proficient web developer. He has the ability to collaboratively work and communicate wit...",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fshrutika-gawas.webp&w=256&q=75",
    name: "Shrutika Gawas",
    p: [
      "Social Media Manager @Design & Code",
      "Devraj is amazing at creating intriguing designs.He is not only an exceptional UI/UX designer but also a proficient developer, an amazing mentor and a co-ordinator. Devraj has shown exemplary leadership skills for his community and has helped a lot of people gain some knowledge through his social ev...",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fshridhar-kamat.webp&w=256&q=75",
    name: "Shridhar Kamat",
    p: [
      "Front-end Developer",
      "I have collaborated with Devraj on many projects and participated in hackathons with him. He is a fantastic developer and a great UI/UX designer. His designs focus mainly on solving real-world problems yet are clean and minimal. He is a very creative and passionate person and one of the best communi...",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fpurnima-sharma.webp&w=256&q=75",
    name: "Purnima Sharma",
    p: [
      "Software Engineer Intern @Accolite",
      "Devraj is a very professional person. I am sure he will achieve great things in his career. He is very creative, hands-on, and organized. He is knowledgeable in expertise and innate leadership quality. Devraj leads by example, and many people in the workplace find his enthusiasm and dedication, both...",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fsai-koushik.webp&w=256&q=75",
    name: "Sai Koushik",
    p: [
      "Freelance Web Designer",
      "Devraj is very creative and adaptive person. I have worked with Devraj on several design projects. His skills and abilities shows his passion towards design and development. He is always curious to learn with an open mind. He is also a great mentor and is always ready to help. Devraj will definitely...",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fshriram-parab.webp&w=256&q=75",
    name: "Shriram Parab",
    p: [
      "Media And Productions Head, Team Phoenix Goa",
      "Devraj is a great designer and an awesome team player. I and Devraj have worked on various UI/UX design projects. Apart from UI/UX design he is also a great web developer. He also runs Design and Code community which helps designers and developers to collaborate and learn from each other. He will be...",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fdivyanshi-oberoi.webp&w=256&q=75",
    name: "Divyanshi Oberoi",
    p: [
      "Microsoft Imagine Cup 2022 India Semifinalist",
      "Devraj is one of the most dedicated professionals I met. He is very creative person.He mentored me with UI/UX.He always helped me with web development and designs.Devraj will be a valuable asset to any company.",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fkrupashri-koli.webp&w=256&q=75",
    name: "Krupashri Koli",
    p: [
      "Campus Hero @Girlscript Goa",
      "Devraj is an enthusiast. He is very creative and dedicated towards his work. He has grown very well in the field of designing and web dev as per my observation. Even while working in a group, he is well aware of how he needs to keep all the members together and work efficiently. I certainly recommen...",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fswaroop-rajwal.webp&w=256&q=75",
    name: "Swaroop Rajwal",
    p: [
      "Front-end Developer @Design & Code",
      "Devraj is very good at UI/UX designing and Web Development. Having worked with him from a long time, I like that he is well aware about clean code and his design are also so attractive and simply minimalistic. He also helps people a lot in the community and knows well how to treat others with respec...",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fsatish-baiginkar.webp&w=256&q=75",
    name: "Satish Baiginkar",
    p: [
      "Content-writer @Design & Code",
      "Since I have been working with Devraj for quite a while, I can assure you that the UI/UX designing skills are way more professional and intriguing as compared to the other developers I've seen. I m lucky to have this person as the leader as his leadership skills are really well developed and people ...",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fsamiksha-pawar.webp&w=256&q=75",
    name: "Samiksha Pawar",
    p: [
      "Software Engineer @Conexao Technology Solutions",
      "Devraj is a very artistic person. We have worked as graphic designers for a regional event. He is amazing at designing as well as web designing. I surely recommend him to everyone who needs these services.",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fpragati-agrawal.webp&w=256&q=75",
    name: "Pragati Agrawal",
    p: [
      "Front-end Web Developer",
      "Devraj is a very creative person and very professional. I have learned many things from him. He is postive and helpful. He never hesitated to provide support when needed. I highly recommend him to anyone who needs design and Website work",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fgurusai.webp&w=256&q=75",
    name: "Gurusai G.",
    p: [
      "Associate Technical Consultant @Vuram",
      "Not everyone that I can see have the heart to talk to a stranger and spending their most valuable time. Devraj is one such humble person who guided me on how to start web development. He suggested me how to proceed to master web development and also he shared some of his important activities that he...",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fsweatlana-martins.webp&w=256&q=75",
    name: "Sweatlana Martins",
    p: [
      "Student at Padre Conceicao College of Engineering",
      "Devraj is hardworking, talented and a creative person. He has amazing ideas and also good programming skills . He is always enthusiastic in learning new things and sharing his valuable experiences to help people grow.",
    ],
  },
  {
    img: "https://devrajchatribin.com/_next/image?url=%2Ftestimonials%2Fsattyam-mane.webp&w=256&q=75",
    name: "Sattyam Mane",
    p: [
      "Flutter Developer",
      "One of the most amazing personalities I met and I am impressed with his way of finding solutions to digital problems using his abilities and skills of UI/UX Design and Web Development. Having worked with Devraj since long time, I am sure that he will be a great asset to you/your company.",
    ],
  },
];

const images = [
  {
    src: "https://skiper-ui.com/_next/image?url=%2Fcard%2F3.png&w=1080&q=75",
    alt: "Image 1",
  },
  {
    src: "https://skiper-ui.com/_next/image?url=%2Fcard%2F1.png&w=640&q=75",
    alt: "Image 2",
  },
  {
    src: "https://skiper-ui.com/_next/image?url=%2Fcard%2F2.png&w=640&q=75",
    alt: "Image 3",
  },
];

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const DoctorTestimonials = () => {
  return (
    <section id="testimonials" className="p-4 sm:p-8 mx-auto">
      <div className="text-center flex flex-col items-center">
        <h3 className="text-4xl md:text-5xl max-w-2xl font-medium mb-4">
          What Our{" "}
          <Highlighter action="underline" color="#fff" strokeWidth={2}>
            <strong className="font-medium text-[#a365ff]">Patients</strong>
          </Highlighter>{" "}
          say?
        </h3>

        <ShinyText
          className="text-base max-w-2xl"
          text="Our physician team combines advanced medical expertise with compassionate patient-centered care for optimal health outcomes."
          speed={3}
        />

        <div className="flex flex-col w-full text-left antialiased bg-white dark:bg-[#010813] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default DoctorTestimonials;
