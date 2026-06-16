import { useState } from 'react';
import { Menu, X, ExternalLink, MessageSquare } from 'lucide-react';
import { ActiveTab } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  logoPath: string;
}

export default function Navbar({ activeTab, setActiveTab, logoPath }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'HOME', value: 'home' as ActiveTab },
    { label: 'ABOUT', value: 'about' as ActiveTab },
    { label: 'MUSIC', value: 'music' as ActiveTab },
  ];

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setIsOpen(false);
    
    // Smooth scroll context if user selects home
    if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const triggerContactScroll = () => {
    setActiveTab('home');
    setIsOpen(false);
    setTimeout(() => {
      const contactSec = document.getElementById('contact-me');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 focus:outline-none cursor-pointer"
            >
              <img
                src={logoPath}
                alt="JOE90z logo"
                referrerPolicy="no-referrer"
                className="h-12 w-auto object-contain rounded-md border border-zinc-800 shadow-md shadow-fuchsia-950/10"
              />
              <span className="font-heading font-black text-xl tracking-wider text-white">
                JOE90z
              </span>
            </button>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-xs font-mono font-bold tracking-widest text-zinc-400">
              {navItems.map((item) => (
                <li key={item.value}>
                  <button
                    onClick={() => handleNavClick(item.value)}
                    className={`cursor-pointer transition-colors duration-200 py-2 hover:text-white uppercase ${
                      activeTab === item.value
                        ? 'text-fuchsia-500 border-b-2 border-fuchsia-500 font-extrabold'
                        : ''
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="https://www.mixcloud.com/joe-nineteez/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-1 cursor-pointer transition-colors duration-200 py-2 hover:text-white text-zinc-400"
                >
                  MIXES
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
            </ul>

            {/* Desktop Contact CTA */}
            <button
              onClick={triggerContactScroll}
              className="px-5 py-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 active:scale-95 text-zinc-950 text-xs font-heading font-bold tracking-wide transition-all shadow-md shadow-white/5 flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-900">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 text-center">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`w-full block py-4 text-xs font-mono font-bold tracking-widest border-b border-zinc-900/60 uppercase transition-all ${
                  activeTab === item.value
                    ? 'text-fuchsia-500 bg-zinc-900/40 font-extrabold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://www.mixcloud.com/joe-nineteez/"
              target="_blank"
              rel="noreferrer noopener"
              className="w-full flex items-center justify-center gap-1.5 py-4 text-xs font-mono font-bold tracking-widest border-b border-zinc-900/60 text-zinc-400 hover:text-white"
            >
              MIXES
              <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
            </a>
            
            <div className="pt-4 px-4 w-full">
              <button
                onClick={triggerContactScroll}
                className="w-full py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-950 font-heading font-extrabold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Contact Me
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
