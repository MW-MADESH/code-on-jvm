import Hero from "@/components/hero";
import TeamSection from "@/components/team-section";
import { ReactLenis } from "lenis/react";

const Page = () => {
  return (
    <>
      <ReactLenis root>
        <Hero />
        <TeamSection />
      </ReactLenis>
    </>
  );
};

export default Page;
