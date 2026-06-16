import { ArrowUpRight, Music, Download, AudioLines, Flame, Disc } from 'lucide-react';
import { StreamPlatform } from '../types';

export const PLATFORMS: StreamPlatform[] = [
  {
    name: 'Spotify',
    logoType: 'spotify',
    url: 'https://open.spotify.com/artist/4u8JIV7bDGvv9VKxrIof9u',
    description: 'Listen to official studio singles and albums by JOE90z. Stream high fidelity boom bap directly on Spotify.'
  },
  {
    name: 'SoundCloud',
    logoType: 'soundcloud',
    url: 'https://soundcloud.com/bergone247',
    description: 'Explore raw uploads, turntable scratch drafts, and work-in-progress beat designs shared directly from the MPC.'
  },
  {
    name: 'Bandcamp',
    logoType: 'bandcamp',
    url: 'https://beattapeco-op.bandcamp.com/album/beat-tape-co-op-presents-the-foundation-producer-series-37-introducing-joe90z',
    description: 'Purchase or stream high-quality vinyl edition tapes, introducing JOE90z under the Beat Tape Co-op presents series.'
  },
  {
    name: 'Google Drive',
    logoType: 'drive',
    url: 'https://drive.google.com/drive/folders/1lEwLzUTY_nvinzT1Vp0002I_fQeK51qN?usp=sharing',
    description: 'Direct download repository for high-definition mixes, sample clearances, and selected free beat attachments.'
  }
];

export default function MusicSection() {
  const getBrandDetails = (type: string) => {
    switch (type) {
      case 'spotify':
        return {
          color: 'hover:border-emerald-500/40 hover:bg-emerald-950/10 group-hover:text-emerald-400',
          iconBg: 'bg-emerald-950/40 border-emerald-500/20 text-emerald-400',
          badgeText: 'Spotify'
        };
      case 'soundcloud':
        return {
          color: 'hover:border-orange-500/40 hover:bg-orange-950/10 group-hover:text-orange-400',
          iconBg: 'bg-orange-950/40 border-orange-500/20 text-orange-400',
          badgeText: 'SoundCloud'
        };
      case 'bandcamp':
        return {
          color: 'hover:border-cyan-500/40 hover:bg-cyan-950/10 group-hover:text-cyan-400',
          iconBg: 'bg-cyan-950/40 border-cyan-500/20 text-cyan-400',
          badgeText: 'Bandcamp'
        };
      case 'drive':
        return {
          color: 'hover:border-amber-500/40 hover:bg-amber-950/10 group-hover:text-amber-400',
          iconBg: 'bg-amber-950/40 border-amber-500/20 text-amber-400',
          badgeText: 'Drive File'
        };
      default:
        return {
          color: 'hover:border-fuchsia-500/40 hover:bg-fuchsia-950/10 group-hover:text-fuchsia-400',
          iconBg: 'bg-fuchsia-950/40 border-fuchsia-500/20 text-fuchsia-400',
          badgeText: 'Web Streaming'
        };
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12 pb-20 select-text">
      {/* Title Header Section */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-fuchsia-400 font-semibold display-block">
          Distribution Channels
        </span>
        <h2 className="text-4xl md:text-5xl font-black font-heading text-white tracking-widest uppercase">
          JOE90z STREAM SITES
        </h2>
        <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider leading-relaxed">
          AVAILABLE TO STREAM FROM THE FOLLOWING WEBSITES. CLICK ON THE CARD TO DEEP STREAM OR DOWNLOAD INDIVIDUAL MIXES.
        </p>
      </div>

      {/* Specialty Divider */}
      <div className="h-[1px] w-full bg-zinc-900"></div>

      {/* Platforms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PLATFORMS.map((platform) => {
          const brand = getBrandDetails(platform.logoType);
          return (
            <a
              key={platform.logoType}
              href={platform.url}
              target="_blank"
              rel="noreferrer noopener"
              className={`group block p-6 bg-zinc-900 border border-zinc-850 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 select-text ${brand.color}`}
            >
              <div className="flex items-start gap-4">
                {/* Brand specific icon background */}
                <div className={`p-3.5 border rounded-xl flex-shrink-0 ${brand.iconBg}`}>
                  {platform.logoType === 'drive' ? (
                    <Download className="w-6 h-6" />
                  ) : platform.logoType === 'spotify' ? (
                    <Disc className="w-6 h-6 animate-spin" style={{ animationDuration: '4s' }} />
                  ) : platform.logoType === 'soundcloud' ? (
                    <Flame className="w-6 h-6" />
                  ) : (
                    <Music className="w-6 h-6" />
                  )}
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-zinc-500 group-hover:text-white/60">
                      {brand.badgeText}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading tracking-wide uppercase group-hover:text-fuchsia-400 leading-tight">
                    {platform.name} Catalog
                  </h3>

                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {platform.description}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Featured album promotion block */}
      <section className="mt-16 bg-gradient-to-r from-zinc-900 via-fuchsia-950/20 to-zinc-900 border border-zinc-850 rounded-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center gap-6 justify-between text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fuchsia-950/60 border border-fuchsia-900 text-[10px] font-mono font-bold tracking-wider text-fuchsia-400 uppercase">
              <AudioLines className="w-3.5 h-3.5" />
              Featured Release
            </span>
            <h3 className="text-xl font-bold font-heading text-white tracking-widest uppercase">
              The Foundation Producer Series #37
            </h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Introducing JOE90z's official placement tape in the legendary Beat Tape Co-op presents loop series. A 40-minute tour de force of crate digging beats.
            </p>
          </div>

          <a
            href="https://beattapeco-op.bandcamp.com/album/beat-tape-co-op-presents-the-foundation-producer-series-37-introducing-joe90z"
            target="_blank"
            rel="noreferrer noopener"
            className="px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-500 font-heading font-extrabold text-xs tracking-widest text-white rounded-full transition-colors flex items-center gap-1.5"
          >
            Stream On Bandcamp
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
}
