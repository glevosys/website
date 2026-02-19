import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  videoUrl: string;
  onBack: () => void;
}

interface Video {
  id: number;
  module: number;
  title: string;
  duration: number;
  url: string;
  created_at: string;
  updated_at: string;
}

interface Module {
  id: number;
  title: string;
  description: string;
  duration: number;
  xp: number;
  videos: Video[];
  created_at: string;
  updated_at: string;
  required_exercises: number;
  required_projects: number;
  is_unlocked: boolean;
}

interface VideoListProps {
  currentModule: Module;
  onPlayVideo: (videoUrl: string) => void;
  className?: string;
  showTitle?: boolean;
}

const getYouTubeVideoId = (url: string) => {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|)([a-zA-Z0-9_-]{11}))/
  );
  return match ? match[1] : null;
};

const isYouTubeUrl = (url: string) => {
  return /(?:youtube\.com|youtu\.be)/.test(url);
};

export const VideoPlayer = ({ videoUrl, onBack }: VideoPlayerProps) => {
  const youtubeVideoId = getYouTubeVideoId(videoUrl);
  const isYoutube = isYouTubeUrl(videoUrl);
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const stopVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    if (iframeRef.current) {
      const src = iframeRef.current.src;
      iframeRef.current.src = "";
      iframeRef.current.src = src.replace("autoplay=1", "autoplay=0");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        stopVideo();
        onBack();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onBack]);

  // Fonction pour gérer le retour
  const handleBack = () => {
    stopVideo();
    onBack();
  };

  return (
    <div ref={containerRef} className="bg-black p-4 rounded-lg shadow-md mb-8">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handleBack}
          className="text-white hover:text-gray-300 transition-colors flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Retour
        </button>
      </div>

      <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-900">
        {isYoutube && youtubeVideoId ? (
          <iframe
            ref={iframeRef}
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
            title="Vidéo en cours de lecture"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <video
            ref={videoRef}
            src={videoUrl}
            controls
            autoPlay
            className="w-full h-full"
            onError={(e) => {
              console.error("Erreur de lecture vidéo:", e);
            }}
          >
            <p className="text-white p-4">
              Votre navigateur ne supporte pas la lecture vidéo.
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline ml-2"
              >
                Ouvrir dans un nouvel onglet
              </a>
            </p>
          </video>
        )}
      </div>
    </div>
  );
};

export const VideoList = ({
  currentModule,
  onPlayVideo,
  className,
  showTitle,
}: VideoListProps) => (
  <div className={`${className}`}>
    {showTitle && (
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Vidéos</h3>
    )}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {currentModule.videos.map((video, index) => {
        const videoIdMatch = video.url.match(
          /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|)([a-zA-Z0-9_-]{11}))/
        );
        const youtubeVideoId = videoIdMatch ? videoIdMatch[1] : null;

        const thumbnailUrl = youtubeVideoId
          ? `https://img.youtube.com/vi/${youtubeVideoId}/mqdefault.jpg`
          : null;

        return (
          <div
            key={video.id || index}
            className="relative bg-green-600 aspect-video rounded-lg flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors overflow-hidden group"
            onClick={() => onPlayVideo(video.url)}
          >
            {thumbnailUrl ? (
              <img
                src={thumbnailUrl}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white opacity-60"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                </svg>
              </div>
            )}

            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <svg
                className="w-12 h-12 text-white drop-shadow-lg"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
              <p className="text-white text-sm font-medium line-clamp-2">
                {video.title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
