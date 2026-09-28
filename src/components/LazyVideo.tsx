import { useEffect, useRef, useState } from "react";
import { LuPlay } from "react-icons/lu";

type Props = {
  src: string;
  poster: string;
  label: string;
  className?: string;
};

/**
 * Muted looping video that only downloads and plays while on screen, and pauses
 * off screen. If the browser refuses autoplay (e.g. iPhone Low Power Mode), it
 * retries on the visitor's first tap and shows a play button as a fallback.
 */
const LazyVideo = ({ src, poster, label, className }: Props) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // iOS needs these set as properties, not just attributes, before play().
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    let visible = false;

    const tryPlay = () => {
      if (!visible) return;
      if (video.preload !== "auto") {
        video.preload = "auto";
        video.load();
      }
      video
        .play()
        .then(() => setBlocked(false))
        .catch(() => setBlocked(true));
    };

    // A user gesture unlocks playback when autoplay was refused.
    const onGesture = () => tryPlay();
    document.addEventListener("touchstart", onGesture, { passive: true });
    document.addEventListener("click", onGesture);

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) tryPlay();
        else video.pause();
      },
      { rootMargin: "200px 0px", threshold: 0.01 },
    );
    observer.observe(video);

    return () => {
      observer.disconnect();
      document.removeEventListener("touchstart", onGesture);
      document.removeEventListener("click", onGesture);
    };
  }, []);

  return (
    <>
      <video
        ref={ref}
        className={className}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
      />
      {blocked && (
        <button
          type="button"
          className="video-play"
          aria-label={`Play video: ${label}`}
          onClick={() => ref.current?.play().then(() => setBlocked(false)).catch(() => {})}
        >
          <LuPlay aria-hidden />
        </button>
      )}
    </>
  );
};

export default LazyVideo;
