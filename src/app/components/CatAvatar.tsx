/**
 * Consistent cat-placeholder avatar with photo fill.
 *
 * The cat-placeholder.png is a cat-head silhouette (345×337).
 * The face area sits below the ears and is roughly centered.
 * We use percentage-based insets so the photo always fills
 * and centres within the face at every size.
 */

interface CatAvatarProps {
  /** Width of the container in px */
  size: number;
  /** Photo URL — when null, only the placeholder frame shows */
  photoSrc?: string | null;
  /** Extra classes on the outer wrapper */
  className?: string;
}

export function CatAvatar({ size, photoSrc, className }: CatAvatarProps) {
  // The placeholder is almost square (345:337 ≈ 1.024), so height ≈ size
  const height = Math.round(size * (337 / 345));

  return (
    <div
      className={`relative ${className ?? ""}`}
      style={{ width: size, height }}
    >
      {/* Cat-head frame — ears sit above the photo */}
      <img
        src="/cat-placeholder.png"
        alt=""
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
      />

      {/* Photo — on top, clipped to the face area ellipse.
          The ears are outside this region so the frame still shows them. */}
      {photoSrc && (
        <div
          className="absolute overflow-hidden rounded-[50%] z-10"
          style={{
            top: "23%",
            left: "8%",
            right: "8%",
            bottom: "3%",
          }}
        >
          <img
            src={photoSrc}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}
