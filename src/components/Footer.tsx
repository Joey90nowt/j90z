import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  logoPath: string;
}

export default function Footer({ setActiveTab, logoPath }: FooterProps) {
  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 md:py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Centered Brand Logo */}
        <div className="flex justify-center">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 focus:outline-none cursor-pointer group"
          >
            <img
              src={logoPath}
              alt="JOE90z logo footer"
              referrerPolicy="no-referrer"
              className="h-10 w-auto object-contain rounded-md border border-zinc-900 filter opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <span className="font-heading font-black text-lg tracking-wider text-zinc-300 group-hover:text-white transition-colors">
              JOE90z
            </span>
          </button>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-mono font-bold tracking-widest text-zinc-500">
          <button
            onClick={() => handleNavClick('home')}
            className="hover:text-fuchsia-500 transition-colors uppercase cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="hover:text-fuchsia-500 transition-colors uppercase cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('music')}
            className="hover:text-fuchsia-500 transition-colors uppercase cursor-pointer"
          >
            Music / Stream
          </button>
          <a
            href="https://www.mixcloud.com/joe-nineteez/"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-fuchsia-500 transition-colors uppercase cursor-pointer"
          >
            Mixcloud Mixes
          </a>
        </div>

        {/* Divider line */}
        <div className="max-w-xs mx-auto h-[1px] bg-zinc-900"></div>

        {/* Copy text */}
        <div className="text-xs text-zinc-600 font-mono">
          <p>© {new Date().getFullYear()} JOE90z. All Rights Reserved.</p>
          <p className="mt-1 text-zinc-700">Beats from the 90s to NOW | Crafted in London, UK</p>
        </div>
      </div>
    </footer>
  );
}
