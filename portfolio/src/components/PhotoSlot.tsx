type PhotoSlotProps = {
  label?: string;
  src?: string;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Placeholder for a photo. Once real photos are ready, drop the file in
 * /public and pass it as `src`, e.g. <PhotoSlot src="/photos/me-01.jpg" />.
 * Until then it renders a labeled dashed slot so the layout stays intact.
 */
function PhotoSlot({ label = "Photo", src, className = "", style }: PhotoSlotProps) {
  return (
    <div
      className={`photo-slot ${className}`}
      data-label={src ? undefined : label}
      style={style}
    >
      {src && <img src={src} alt={label} loading="lazy" />}
    </div>
  );
}

export default PhotoSlot;
