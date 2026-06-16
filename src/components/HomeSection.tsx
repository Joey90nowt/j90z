import { ArrowRight, Play, Youtube, Disc, Music, ArrowDown } from 'lucide-react';
import AudioPlayer from './AudioPlayer';
import ContactForm from './ContactForm';

interface HomeSectionProps {
  heroImg: string;
  setActiveTab: (tab: string) => void;
}

export default function HomeSection({ heroImg, setActiveTab }: HomeSectionProps) {
  const triggerScroll = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-24 pb-20">
      {/* 1. Hero Introduction Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with advanced masking overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Spacious classic music studio background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-transparent to-zinc-950/70"></div>
          {/* Subtle neon light overlays */}
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-fuchsia-950/20 blur-[130px] pointer-events-none"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-purple-950/20 blur-[130px] pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 select-none">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono font-bold tracking-widest text-fuchsia-400">
              <Disc className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '3s' }} />
              Artist & Producer Portfolio
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading text-white tracking-widest leading-none select-text">
              JOE90z
            </h1>
            <p className="text-xl md:text-3xl font-heading font-bold text-zinc-300 tracking-wide max-w-3xl mx-auto select-text">
              Beats from the 90s to NOW!
            </p>
          </div>

          <p className="text-sm md:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed select-text">
            Discover the unique beats, raw break elements, and hip-hop mixes crafted by London’s own JOE90z. Dusty samples, hard drum splits, and boom bap roots.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => triggerScroll('episodes-stream')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 active:scale-95 text-white font-heading font-extrabold text-sm tracking-widest transition-all shadow-lg shadow-fuchsia-600/10 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              Stream Mixes
            </button>
            <button
              onClick={() => setActiveTab('music')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-900 hover:bg-zinc-800/80 active:scale-95 text-zinc-200 border border-zinc-800 font-heading font-extrabold text-sm tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Browse Catalog
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-12 animate-bounce">
            <button
              onClick={() => triggerScroll('quote-banner')}
              className="p-2 rounded-full border border-zinc-800 bg-zinc-950/40 hover:bg-zinc-900 text-zinc-500 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll down"
            >
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Bold Quote Banner */}
      <section id="quote-banner" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-purple-950/20 via-zinc-900/50 to-zinc-900/20 border border-zinc-800/80 shadow-2xl relative overflow-hidden">
          {/* Decorative vinyl graphic background */}
          <div className="absolute -right-20 -bottom-20 w-48 h-48 opacity-5 text-zinc-500 pointer-events-none">
            <Disc className="w-full h-full" />
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-black text-white tracking-widest uppercase mb-4">
            Crate Digging & Authenticity
          </h2>
          <div className="h-1 w-20 bg-fuchsia-500 mx-auto mb-6"></div>
          
          <p className="text-xl md:text-2xl text-fuchsia-100 font-medium leading-relaxed italic max-w-3xl mx-auto">
            "Plus 11 years crafting beats that move minds and shake speakers, this channel is where the past, present, and future of boom bap collide."
          </p>
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mt-6 block">
            — London, UK
          </p>
        </div>
      </section>

      {/* 3. Mix Streaming (Custom Audio Player Widget) */}
      <section id="episodes-stream" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center mb-8 space-y-2">
          <h2 className="text-3xl md:text-4xl font-black font-heading text-white tracking-widest uppercase flex items-center justify-center gap-3">
            <Music className="w-7 h-7 text-fuchsia-500" />
            PIE N MASHUPZ
          </h2>
          <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
            LISTEN TO MY LATEST MIXES HERE
          </p>
        </div>
        <AudioPlayer />
      </section>

      {/* 4. Beats Showcase Video Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Embedded YouTube Wrapper */}
            <div className="lg:col-span-7 aspect-video bg-black relative">
              <iframe
                src="https://www.youtube.com/embed/dcrFNMKP1mU?rel=0&color=white"
                title="JOE90z : Beats from the Crates"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Story Details Card */}
            <div className="lg:col-span-5 p-8 md:p-12 space-y-6">
              <div className="flex items-center gap-2.5 text-red-500 text-xs font-mono font-bold tracking-widest uppercase">
                <Youtube className="w-4 h-4" />
                Featured Video
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-black font-heading text-white tracking-wide leading-tight">
                  JOE90z: Beats from the Crates
                </h3>
                <h4 className="text-sm font-mono text-fuchsia-400">Track 1 – Viktory Overview</h4>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed">
                Discover the authentic and captivating beats crafted by London's own JOE90z, using iconic underground sampling techniques. Turn up the speakers and catch the dusty, raw boom bap sound.
              </p>

              <div className="pt-2">
                <a
                  href="https://www.youtube.com/@joe90z"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-white hover:text-fuchsia-400 transition-colors uppercase"
                >
                  Visit YouTube Channel
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact Form Section */}
      <section id="contact-me" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-3xl md:text-4xl font-black font-heading text-white tracking-widest uppercase">
            Let's Collaborate
          </h2>
          <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
            Get in touch for custom beats, licensing and show bookings
          </p>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
