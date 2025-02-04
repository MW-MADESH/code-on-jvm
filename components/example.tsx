// components/Example.tsx
'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const Example = () => {
  const teamMembers: TeamMember[] = [
    { name: 'John Doe', role: 'CEO', image: '/images/team1.jpg' },
    { name: 'Jane Smith', role: 'CTO', image: '/images/team2.jpg' },
    { name: 'Mike Johnson', role: 'Lead Developer', image: '/images/team3.jpg' },
    { name: 'Sarah Williams', role: 'Design Director', image: '/images/team4.jpg' },
  ];

  const cards = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Card entrance animation
    gsap.from(cards.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center+=100',
        toggleActions: 'play none none reverse',
      },
    });

    // Continuous glow animation
    gsap.to('.glow', {
      backgroundPosition: '200% 200%',
      repeat: -1,
      duration: 4,
      ease: 'linear',
    });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cards.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(card, {
      '--x': `${x}px`,
      '--y': `${y}px`,
      duration: 0.3,
      ease: 'sine.out',
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-20 px-4 sm:px-8 bg-[#161616] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-20 text-center">
          Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={(el) => cards.current[index] = el }
              className="relative h-[400px] rounded-2xl overflow-hidden group"
              onMouseMove={(e) => handleMouseMove(e, index)}
              style={{
                background: `
                  radial-gradient(
                    300px circle at var(--x) var(--y),
                    rgba(255, 120, 0, 0.4) 0%,
                    rgba(255, 80, 0, 0) 80%
                  ),
                  linear-gradient(
                    to bottom right,
                    rgba(40, 40, 40, 0.8) 0%,
                    rgba(30, 30, 30, 0.9) 100%
                  )
                `,
              }}
            >
              {/* Glow border */}
              <div className="glow absolute inset-[-1px] rounded-2xl z-0"
                style={{
                  background: `
                    linear-gradient(
                      45deg,
                      #ff6b00 0%,
                      #ff3d00 50%,
                      #ff6b00 100%
                    )
                  `,
                  backgroundSize: '200% 200%',
                  mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                  WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                  maskComposite: 'exclude',
                  WebkitMaskComposite: 'xor',
                }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-end p-6">
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] group-hover:bg-[rgba(0,0,0,0.2)] transition-colors duration-300" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover absolute inset-0 z-0"
                />
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-orange-300 font-medium">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        :root {
          --x: 0px;
          --y: 0px;
        }
      `}</style>
    </section>
  );
};

export default Example;