import { Trophy, HelpCircle, AudioLines, Flame, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  logoImg: string;
}

export default function AboutSection({ logoImg }: AboutSectionProps) {
  const experiences = [
    {
      year: '1990s',
      title: 'Underground Roots',
      desc: 'Deep integration with London’s underground hip-hop movement. Soaked up 35+ years of turntable techniques, graffiti, boom bap, and break loops.'
    },
    {
      year: '2015',
      title: 'Hardware Exploration',
      desc: 'Began building heavy drum structures on original hardware—focusing on raw dusty sampling and MPC layout sequencing.'
    },
    {
      year: '2020',
      title: 'Beat Tape Co-op presents',
      desc: 'Included in prestigious beat collections and producer series. Recognized as an authentic voice of dusty instrumental hip-hop.'
    },
    {
      year: 'Present Day',
      title: 'Sound of NOW',
      desc: 'Releasing mixes under the "Pie \"N\" Mashupz" catalog, hosting DJ slots, and providing premium sample kits to global boom bap artists.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-20 pb-20 select-text">
      {/* Editorial Profile Header */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Aligned Profile Asset */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative p-3 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden max-w-sm w-full group">
            <img
              src={logoImg}
              alt="JOE90z sticker vinyl logo illustration"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Right Aligned Bio */}
        <div className="md:col-span-7 space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-fuchsia-400 font-semibold display-block">
              The Story
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-white tracking-widest uppercase">
              ABOUT JOE90z
            </h2>
            <h3 className="text-lg font-bold text-zinc-300 font-heading">
              With 35+ years of underground hip-hop knowledge.
            </h3>
          </div>

          <div className="h-1 w-20 bg-fuchsia-500 mx-auto md:mx-0"></div>

          <p className="text-zinc-400 text-sm leading-relaxed">
            Plus 11 years crafting beats that move minds and shake speakers, this channel is where the past, present, and future of boom bap collide. From dusty vinyl samples to hard-hitting drum breaks, expect a journey through authentic production, deep hip-hop history, and beats designed for head-nodding.
          </p>

          <p className="text-zinc-400 text-sm leading-relaxed">
            Born and bred in London, UK, JOE90z utilizes classic crates, vinyl collection libraries, and vintage analog gear to mix the grit of the 90s with modern sound systems.
          </p>
        </div>
      </section>

      {/* Core Specialties Bento Row */}
      <section className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-black font-heading tracking-wider uppercase text-white">
            THE BOOM BAP RECIPE
          </h3>
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-1">
            Why critics and listeners nod their heads to JOE90z
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 border border-zinc-800/80 rounded-xl p-6 space-y-4 hover:border-fuchsia-600/30 transition-colors">
            <div className="p-3 bg-fuchsia-950/40 border border-fuchsia-500/20 text-fuchsia-400 w-fit rounded-lg">
              <AudioLines className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white font-heading tracking-wide uppercase">Dusty Vinyl Samples</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Every track starts with deep crate-digging. Finding forgotten keys, vocal drops, and vintage jazz records from London's hidden record shops.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800/80 rounded-xl p-6 space-y-4 hover:border-purple-600/30 transition-colors">
            <div className="p-3 bg-purple-950/40 border border-purple-500/20 text-purple-400 w-fit rounded-lg">
              <Flame className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white font-heading tracking-wide uppercase">Hard-Hitting Breaks</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Heavy MPC drum loops and break splits that give beats a signature neck-snapping groove. Layered and equalized on premium hardware.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800/80 rounded-xl p-6 space-y-4 hover:border-pink-600/30 transition-colors">
            <div className="p-3 bg-pink-950/40 border border-pink-500/20 text-pink-400 w-fit rounded-lg">
              <Trophy className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white font-heading tracking-wide uppercase">Authentic Heritage</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Pure, unfiltered and non-commercial. Respecting the lineage of the 90s legends while keeping the final track dynamic for the modern era.
            </p>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-black font-heading tracking-wider uppercase text-white">
            THE PORTFOLIO MILESTONES
          </h3>
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-1">
            Path of growth, tapes, and sound experiments
          </p>
        </div>

        <div className="relative pl-6 md:pl-0 border-l border-zinc-800 md:border-l-0 md:after:content-[''] md:after:absolute md:after:left-1/2 md:after:top-0 md:after:bottom-0 md:after:w-[1px] md:after:bg-zinc-800 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-8 space-y-8 md:space-y-0">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative md:w-[88%] md:p-1 ${
                index % 2 === 0
                  ? 'md:text-right md:justify-self-start'
                  : 'md:-translate-x-1/12 md:translate-y-8 md:text-left md:justify-self-end md:ml-12'
              }`}
            >
              {/* Timeline marker */}
              <div className="absolute -left-[31px] md:left-1/2 md:-translate-x-1/2 top-1.5 w-4.5 h-4.5 rounded-full bg-zinc-950 border-2 border-fuchsia-500 z-10"></div>
              
              <div className="bg-zinc-900 border border-zinc-850 p-5 rounded-xl shadow-md whitespace-normal break-words">
                <span className="inline-block px-2.5 py-0.5 bg-fuchsia-950 text-fuchsia-400 border border-fuchsia-900 text-[10px] font-mono font-bold rounded-full mb-2">
                  {exp.year}
                </span>
                <h4 className="text-sm font-bold text-white font-heading mb-1">{exp.title}</h4>
                <p className="text-xs text-zinc-400 leading-normal">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
