type MediaPlaceholderProps = {
  label: string;
  alt?: string;
  src?: string;
  aspect?: "wide" | "square" | "portrait" | "banner";
  className?: string;
  priority?: boolean;
};

export function MediaPlaceholder({
  label,
  alt,
  src,
  aspect = "wide",
  className = "",
  priority = false,
}: MediaPlaceholderProps) {
  return (
    <figure className={`media-frame media-${aspect} ${className}`} data-media-label={label}>
      {src ? (
        <img src={src} alt={alt ?? label} loading={priority ? "eager" : "lazy"} />
      ) : (
        <div className="media-empty" aria-hidden="true" />
      )}
      <figcaption className="media-caption">{label}</figcaption>
    </figure>
  );
}
