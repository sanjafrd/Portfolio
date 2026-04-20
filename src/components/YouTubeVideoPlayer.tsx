import { useState, useRef, useEffect, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface YouTubeVideoPlayerProps {
  url: string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
}

// Extract video ID from YouTube embed URL
function extractVideoId(url: string): string | null {
  const match = url.match(/youtube\.com\/embed\/([^?&/]+)/);
  return match ? match[1] : null;
}

// Load YouTube IFrame API script once
let apiLoaded = false;
let apiReady = false;
const apiReadyCallbacks: (() => void)[] = [];

function loadYouTubeAPI(): Promise<void> {
  return new Promise((resolve) => {
    if (apiReady) {
      resolve();
      return;
    }
    apiReadyCallbacks.push(resolve);
    if (!apiLoaded) {
      apiLoaded = true;
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
      (window as any).onYouTubeIframeAPIReady = () => {
        apiReady = true;
        apiReadyCallbacks.forEach((cb) => cb());
        apiReadyCallbacks.length = 0;
      };
    }
  });
}

export function YouTubeVideoPlayer({ url, title, className = '', style }: YouTubeVideoPlayerProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [playerReady, setPlayerReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const playerDivId = useRef(`yt-player-${Math.random().toString(36).slice(2, 9)}`);

  const videoId = extractVideoId(url);

  useEffect(() => {
    if (!videoId) return;

    let destroyed = false;

    loadYouTubeAPI().then(() => {
      if (destroyed || !containerRef.current) return;

      const YT = (window as any).YT;
      if (!YT || !YT.Player) return;

      playerRef.current = new YT.Player(playerDivId.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: videoId,
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          enablejsapi: 1,
        },
        events: {
          onReady: () => {
            if (!destroyed) {
              setPlayerReady(true);
            }
          },
        },
      });
    });

    return () => {
      destroyed = true;
      if (playerRef.current && playerRef.current.destroy) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // ignore
        }
      }
      playerRef.current = null;
    };
  }, [videoId]);

  const toggleMute = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;

    try {
      if (isMuted) {
        player.unMute();
        player.setVolume(100);
      } else {
        player.mute();
      }
      setIsMuted(!isMuted);
    } catch (e) {
      // ignore
    }
  }, [isMuted]);

  return (
    <div className={`relative ${className}`} style={style}>
      <div
        ref={containerRef}
        className="absolute top-0 left-0 w-full h-full bg-transparent"
      >
        <div id={playerDivId.current} className="w-full h-full" />
      </div>
      {/* Mute/Unmute button */}
      {playerReady && (
        <button
          onClick={toggleMute}
          className="absolute bottom-3 right-3 z-10 p-2.5 rounded-full bg-black/60 backdrop-blur-sm text-white hover:bg-black/80 transition-all duration-300 hover:scale-110 shadow-lg border border-white/10"
          aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>
      )}
    </div>
  );
}
