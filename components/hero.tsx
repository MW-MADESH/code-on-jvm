"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Button } from "./ui/button";

const Hero = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states

      const t1 = gsap.timeline();
      t1.from(
        [
          headingRef.current,
          paragraphRef.current,
          button1Ref.current,
          button2Ref.current,
        ],
        {
          opacity: 0,
          y: 60,
          duration: 2,
          scale: 0.7,
          ease: "power4.out",
          delay: 0.1,
          stagger: 0.1,
        },
      );
    });

    return () => ctx.revert();
  }, [headingRef, paragraphRef, button1Ref, button2Ref]);

  return (
    <section className="container relative flex flex-col items-center justify-center gap-6 overflow-hidden py-16 md:py-24 lg:gap-8 lg:py-36">
      {/* Hero Text */}
      <div className="mx-auto max-w-4xl space-y-3 px-4">
        <h1
          ref={headingRef}
          className="text-center text-4xl font-semibold leading-tight sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight"
        >
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text bg-[position:100%_0%] text-transparent">
            Empowering
          </span>{" "}
          <span>the next generation of Innovators</span>
        </h1>

        <p
          ref={paragraphRef}
          className="mx-auto max-w-3xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-relaxed"
        >
          Where students and professionals collaborate through hands-on
          workshops, adrenaline-fueled hackathons, and cutting-edge tech events
        </p>
      </div>

      {/* Hero Buttons */}
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        <Button ref={button1Ref} size="lg" className="text-sm sm:text-base">
          Get Started
        </Button>
        <Button
          ref={button2Ref}
          variant="outline"
          size="lg"
          className="text-sm sm:text-base"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default Hero;
