import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Radio, Calendar, Clock } from 'lucide-react';
import { Episode } from '../types';

export const EPISODES: Episode[] = [
  {
    id: 'episode-1',
    title: 'PIE N MASHUPS - CHAPTER 1',
    episodeNumber: '#1',
    artwork: 'https://i.postimg.cc/t1cGKthB/image.jpg',
    audioUrl: 'https://embeddable.co/api/assets/7U7Tg53Aa5O3blyyWRfHR4m4DBC5W5Ju/86424a83-d0df-4ca8-b43f-3819ca0c2126-PIE.N.MASHUPS.CHAPTER.1.mp3',
    duration: '45:23',
    date: 'Jan 1, 2026',
    description: 'The first chapter in the dynamic Pie "N" Mashups sequence. Packed with classic boom bap, gritty breaks, and London underground hip-hop selection.'
  },
  {
    id: 'episode-2',
    title: 'PIE N MASHUPS - CHAPTER 2',
    episodeNumber: '#2',
    artwork: 'https://i.postimg.cc/p5bbTWc9/pie-n-mashups-CHAPTER-2-FRONT-COVER-Copy.jpg',
    audioUrl: 'https://embeddable.co/api/assets/7U7Tg53Aa5O3blyyWRfHR4m4DBC5W5Ju/b85a34ed-9f90-4021-987c-3edcb0be6302-THE.PIE.N.MASHUPZ.2.mp3',
    duration: '38:15',
    date: 'Jan 1, 2026',
    description: 'Part Two of our authentic crate-digging journey. Heavy baseline cuts, unreleased MPC raw beats, and golden era scratch elements.'
  },
  {
    id: 'episode-3',
    title: 'Behind the Mic (Bonus)',
    episodeNumber: '#125',
    artwork: 'https://images.unsplash.com/photo-1662459109819-bda9990664c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    duration: '52:40',
    date: 'Nov 15, 2025',
    description: 'An intimate studio conversation about the tools, turntables, sampler hardware, and the crate digger mindset that drives JOE90z.'
  }
];

export default function AudioPlayer() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentEpisode = EPISODES[currentIdx];

  // Sync state with HTML5 audio actions
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    // Reset track position if track changes
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  }, [currentIdx]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => {
          console.error("Audio playback error: ", err);
          setIsPlaying(false);
        });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setCurrentTime(val);
    if (audioRef.current) {
      audioRef.current.currentTime = val;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (val > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % EPISODES.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + EPISODES.length) % EPISODES.length);
  };

  const handleAudioEnded = () => {
    handleNext();
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div id="audio-player-widget" className="w-full bg-zinc-900 border border-zinc-800/80 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8">
      {/* Invisible HTML5 Audio Tag */}
      <audio
        ref={audioRef}
        src={currentEpisode.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleAudioEnded}
      />

      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Cover Artwork & Equalizer */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-xl overflow-hidden shadow-lg flex-shrink-0 group">
          <img
            src={currentEpisode.artwork}
            alt={currentEpisode.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Animated EQ Bars when Playing */}
          <div className="absolute inset-0 bg-black/45 flex items-end justify-center pb-4 gap-[3px] transition-opacity duration-300 opacity-100">
            <div className={`w-1.5 bg-fuchsia-500 rounded-t ${isPlaying ? 'animate-bounce h-12' : 'h-3'}`} style={{ animationDuration: '0.6s' }}></div>
            <div className={`w-1.5 bg-purple-500 rounded-t ${isPlaying ? 'animate-bounce h-16' : 'h-5'}`} style={{ animationDuration: '0.8s', animationDelay: '0.2s' }}></div>
            <div className={`w-1.5 bg-pink-500 rounded-t ${isPlaying ? 'animate-bounce h-10' : 'h-4'}`} style={{ animationDuration: '0.7s', animationDelay: '0.1s' }}></div>
            <div className={`w-1.5 bg-fuchsia-400 rounded-t ${isPlaying ? 'animate-bounce h-14' : 'h-6'}`} style={{ animationDuration: '0.9s', animationDelay: '0.3s' }}></div>
            <div className={`w-1.5 bg-purple-400 rounded-t ${isPlaying ? 'animate-bounce h-8' : 'h-3'}`} style={{ animationDuration: '0.5s', animationDelay: '0.15s' }}></div>
          </div>

          <div className="absolute top-3 right-3 bg-fuchsia-600/90 text-white font-mono text-xs font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            {currentEpisode.episodeNumber}
          </div>
        </div>

        {/* Track Info & Controls */}
        <div className="flex-1 w-full text-center lg:text-left flex flex-col justify-between">
          <div className="mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-fuchsia-400 font-semibold mb-1 block">
              Now Streaming
            </span>
            <h3 className="text-2xl font-bold font-heading text-white tracking-tight mb-2">
              {currentEpisode.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
              {currentEpisode.description}
            </p>

            {/* Metadata Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-3 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-fuchsia-500" />
                {currentEpisode.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-purple-500" />
                {currentEpisode.duration}
              </span>
            </div>
          </div>

          {/* Time & Sliders */}
          <div className="space-y-4">
            <div className="space-y-1">
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="w-full accent-fuchsia-500 bg-zinc-800 rounded-lg appearance-none h-1 cursor-pointer"
              />
              <div className="flex justify-between text-xs font-mono text-zinc-500">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration || parseFloat(currentEpisode.duration) * 60 || 0)}</span>
              </div>
            </div>

            {/* Controls panel */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
              {/* Skip & Play controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 hover:text-fuchsia-400 text-zinc-300 transition-colors"
                  aria-label="Previous Episode"
                >
                  <SkipBack className="w-5 h-5" />
                </button>

                <button
                  onClick={handlePlayPause}
                  className="p-4 rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 active:scale-95 text-white transition-all shadow-lg hover:shadow-fuchsia-500/20"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 fill-white translate-x-0.5" />}
                </button>

                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 hover:text-fuchsia-400 text-zinc-300 transition-colors"
                  aria-label="Next Episode"
                >
                  <SkipForward className="w-5 h-5" />
                </button>
              </div>

              {/* Volume Controller */}
              <div className="flex items-center gap-2 w-full sm:w-auto max-w-[150px]">
                <button
                  onClick={toggleMute}
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-full accent-zinc-200 bg-zinc-800 rounded-lg appearance-none h-1 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Playlist Grid */}
      <div className="mt-8 border-t border-zinc-800/80 pt-6">
        <h4 className="text-sm font-mono text-zinc-400 uppercase tracking-widest mb-4 text-center lg:text-left">
          Mix Episodes Playlists
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {EPISODES.map((ep, index) => (
            <button
              key={ep.id}
              onClick={() => setCurrentIdx(index)}
              className={`flex items-center gap-3 p-3 rounded-lg text-left transition-all border ${
                currentIdx === index
                  ? 'bg-fuchsia-950/30 border-fuchsia-600/50 text-white'
                  : 'bg-zinc-950/40 border-zinc-800 text-zinc-400 hover:bg-zinc-800/40 hover:text-white'
              }`}
            >
              <img
                src={ep.artwork}
                alt={ep.title}
                referrerPolicy="no-referrer"
                className="w-10 h-10 object-cover rounded-md flex-shrink-0"
              />
              <div className="min-width-0 flex-1">
                <p className="text-xs font-mono text-fuchsia-400 font-semibold mb-0.5">{ep.episodeNumber}</p>
                <p className="text-xs font-semibold truncate leading-tight">{ep.title}</p>
              </div>
              {currentIdx === index && isPlaying && (
                <div className="flex gap-0.5 items-end h-3">
                  <span className="w-0.5 h-3 bg-fuchsia-500 rounded-t animate-bounce" style={{ animationDuration: '0.4s' }}></span>
                  <span className="w-0.5 h-2 bg-fuchsia-500 rounded-t animate-bounce" style={{ animationDuration: '0.6s', animationDelay: '0.1s' }}></span>
                  <span className="w-0.5 h-3.5 bg-fuchsia-500 rounded-t animate-bounce" style={{ animationDuration: '0.5s', animationDelay: '0.2s' }}></span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
