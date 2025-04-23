import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  socials: {
    instagram: string;
    linkedin: string;
    github: string;
  };
}

export const TeamCard = ({ name, role, image, socials }: TeamCardProps) => {
  const socialDetails = [
    { link: socials.instagram, icon: <FaInstagram className="size-6" /> },
    { link: socials.linkedin, icon: <FaLinkedin className="size-6" /> },
    { link: socials.github, icon: <FaGithub className="size-6" /> },
  ];
  return (
    <div className="card group relative w-[300px] h-[400px] m-5 overflow-hidden rounded-2xl flex justify-center items-center">
      <div className="imbBx w-full h-full">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="content absolute group-hover:bottom-0 group-hover:delay-0 bottom-[-160px] w-full h-40 flex justify-center items-center flex-col backdrop-blur-[15px] shadow-[0_-10px_10px_rgba(0,0,0,0.1)] border border-solid border-[rgba(255,255,255,0.1)] rounded-[15px] transition-[bottom_0.5s] delay-[0.65s]">
        <div className="contentBx ">
          <h3 className="uppercase group-hover:opacity-100 group-hover:translate-y-0 text-white tracking-[2px] font-medium text-[18px] text-center mt-[20px] mb-[15px] leading-[1.1em] transition duration-500 delay-[600ms] opacity-0 transform -translate-y-[20px]">
            {name}
            <br />
            <span className="text-xs font-light normal-case">{role}</span>
          </h3>
        </div>
        <ul className="sci relative bottom-[10px] flex">
          {socialDetails.map((social, index) => (
            <li
              key={index}
              style={{ "--i": index + 1 } as React.CSSProperties}
              className="list-none mx-2.5 translate-y-[40px] transition-all duration-500 opacity-0 delay-[calc(0.2s*var(--i))] group-hover:translate-y-0 group-hover:opacity-100"
            >
              <a href={social.link} className="text-white" target="_blank">
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
