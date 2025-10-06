interface VideoEmbedProps {
  title: string;
  src: string;
}

export const VideoEmbed = ({ title, src }: VideoEmbedProps) => (
  <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
    <iframe
      src={src}
      title={title}
      loading="lazy"
      className="h-full w-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);


