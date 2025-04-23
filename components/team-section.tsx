import { TeamCardProps, TeamCard } from "@/components/team-card";

const teamMembers: TeamCardProps[] = [
  {
    name: "Paarthan",
    role: "Leader",
    image: "/images/paarthan.jpg",
    socials: {
      instagram: "https://instagram.com/alice",
      linkedin: "https://linkedin.com/in/alice",
      github: "https://github.com/alice",
    },
  },
  {
    name: "Madeshwaran",
    role: "Co Lead",
    image: "/images/madesh.jpg",
    socials: {
      instagram: "https://instagram.com/bob",
      linkedin: "https://linkedin.com/in/bob",
      github: "https://github.com/bob",
    },
  },
  {
    name: "Pranav Vikraman",
    role: "Co Lead",
    image: "/images/pranav-vikraman.jpg",
    socials: {
      instagram: "https://www.instagram.com/unsung_heroes25/",
      linkedin: "https://www.linkedin.com/in/pranav-vikraman-322020242/",
      github: "https://github.com/pranavvikraman25",
    },
  },
  {
    name: "Mithil",
    role: "Lead Designer",
    image: "/images/mithil.jpg",
    socials: {
      instagram: "https://www.instagram.com/mastermithil/",
      linkedin: "https://www.linkedin.com/in/mithil-naresh-b07b26257/",
      github: "https://github.com/Zeusmithil",
    },
  },
  {
    name: "Swetha",
    role: "Crew",
    image: "/images/swetha.jpg",
    socials: {
      instagram: "https://instagram.com/ella",
      linkedin: "https://linkedin.com/in/ella",
      github: "https://github.com/ella",
    },
  },
  {
    name: "Madhavan",
    role: "Crew",
    image: "/images/madhavan.jpg",
    socials: {
      instagram: "https://instagram.com/frank",
      linkedin: "https://linkedin.com/in/frank",
      github: "https://github.com/frank",
    },
  },
  {
    name: "Grace Kim",
    role: "QA Specialist",
    image: "/images/lakshita.jpg",
    socials: {
      instagram: "https://instagram.com/grace",
      linkedin: "https://linkedin.com/in/grace",
      github: "https://github.com/grace",
    },
  },
];

const TeamSection = () => {
  return (
    <div className="mt-36" >
      <div className="text-center">
        <h4 className=" inline-block p-5 text-4xl font-medium leading-tight [word-spacing:5px] border border-white/10 rounded-2xl break-words">
          Our Team Section
        </h4>
      </div>
      <div className="card_container relative flex justify-center items-center flex-wrap my-10">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
