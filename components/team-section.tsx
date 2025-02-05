"use client";

import { useRef, useEffect, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger once
gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
}

const TeamSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const teamMembers: TeamMember[] = useMemo(
    () => [
      {
        id: 1,
        name: "Paarthan",
        role: "Community Lead",
        image: "/images/pranav-vikraman.jpg",
        description:
          "Visionary leader with 15+ years of experience in tech innovation",
      },
      {
        id: 2,
        name: "Madeshwaran",
        role: "Co Lead",
        image: "/images/pranav-vikraman.jpg",
        description: "Tech strategist specializing in scalable architectures",
      },
      {
        id: 3,
        name: "Pranav Vikraman",
        role: "Co Lead",
        image: "/images/pranav-vikraman.jpg",
        description: "Award-winning UX/UI expert with passion for minimalism",
      },
      {
        id: 4,
        name: "Mithl",
        role: "Design Lead",
        image: "/images/pranav-vikraman.jpg",
        description: "Digital marketing guru and brand strategist",
      },
      {
        id: 5,
        name: "Swetha",
        role: "Crew",
        image: "./images/pranav-vikraman.jpg",
        description: "Digital marketing guru and brand strategist",
      },
      {
        id: 6,
        name: "Madhavan",
        role: "Crew",
        image: "/images/pranav-vikraman.jpg",
        description: "Digital marketing guru and brand strategist",
      },
      {
        id: 7,
        name: "Lakshita",
        role: "Crew",
        image: "/images/pranav-vikraman.jpg",
        description: "Digital marketing guru and brand strategist",
      },
      // {
      //   id: 8,
      //   name: "Shangeeth Sivan",
      //   role: "Mentor",
      //   image: "./images/pranav-vikraman.jpg",
      //   description: "Digital marketing guru and brand strategist",
      // },
    ],
    [],
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.from(".section-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Team member cards animation
      gsap.from(".team-card", {
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 70%",
        },
      });

      // Hover animations
      teamMembers.forEach((_, index) => {
        gsap.to(`.team-card:nth-child(${index + 1})`, {
          y: -10,
          duration: 0.3,
          paused: true,
          ease: "power1.out",
          onStart: () => {
            gsap.to(`.team-card:nth-child(${index + 1}) .member-image`, {
              scale: 1.05,
              duration: 0.3,
            });
          },
          onReverse: () => {
            gsap.to(`.team-card:nth-child(${index + 1}) .member-image`, {
              scale: 1,
              duration: 0.3,
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [teamMembers]);

  return (
    <section ref={sectionRef} className="container py-20">
      <h2 className="section-title mb-16 text-center text-3xl font-bold sm:text-4xl">
        Our Amazing Team
      </h2>

      <div className="team-grid grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="team-card overflow-hidden rounded-xl bg-muted"
          >
            <div className="member-image overflow-hidden">
              <Image
                src="/images/pranav-vikraman.jpg"
                alt={member.name}
                width={400}
                height={400}
                className="h-64 w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">{member.name}</h3>
              <p className="mb-3 font-medium text-brand">{member.role}</p>
              <p className="text-sm">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
