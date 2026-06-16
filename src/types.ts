export type ActiveTab = 'home' | 'about' | 'music';

export interface Episode {
  id: string;
  title: string;
  episodeNumber: string;
  artwork: string;
  audioUrl: string;
  duration: string;
  date: string;
  description: string;
}

export interface ContactMessage {
  id: string;
  email: string;
  name: string;
  phone?: string;
  message: string;
  timestamp: string;
}

export interface StreamPlatform {
  name: string;
  logoType: 'spotify' | 'soundcloud' | 'bandcamp' | 'drive';
  url: string;
  description: string;
}
