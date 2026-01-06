import React, { useState, useRef, useEffect } from 'react';
import { Music, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  url: string;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ url }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Se não houver URL, não faz nada
    if (!url) return;

    audioRef.current = new Audio(url);
    audioRef.current.loop = true;

    // Cleanup ao desmontar
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [url]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Tenta tocar. Navegadores podem bloquear se não houver interação prévia,
      // mas como é um clique de botão, deve funcionar.
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(e => console.error("Erro ao reproduzir áudio:", e));
    }
  };

  // Se não tiver URL configurada, não exibe o botão
  if (!url) return null;

  return (
    <button
      onClick={togglePlay}
      className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-md p-3 rounded-full text-cherry-red shadow-lg border-2 border-cherry-pink hover:bg-white hover:scale-110 active:scale-95 transition-all group"
      aria-label={isPlaying ? "Pausar música" : "Tocar música"}
      title={isPlaying ? "Pausar música" : "Tocar música"}
    >
      {isPlaying ? (
        <>
          <Music size={24} className="animate-pulse" />
          {/* Ondas sonoras animadas decorativas */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cherry-red opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cherry-red"></span>
          </span>
        </>
      ) : (
        <VolumeX size={24} className="opacity-70 group-hover:opacity-100" />
      )}
    </button>
  );
};