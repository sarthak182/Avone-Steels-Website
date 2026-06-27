import { createContext, useContext, useState, useEffect, useCallback } from "react";

const LightboxContext = createContext(() => {});

export function LightboxProvider({ children }) {
  const [img, setImg] = useState(null); // { src, alt }
  const open = useCallback((src, alt) => setImg({ src, alt }), []);
  const close = useCallback(() => setImg(null), []);

  useEffect(() => {
    if (!img) return undefined;
    const onKey = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [img, close]);

  return (
    <LightboxContext.Provider value={open}>
      {children}
      {img && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image preview" onClick={close}>
          <button className="lightbox__close" aria-label="Close image" onClick={close}>×</button>
          <img
            className="lightbox__img"
            src={img.src}
            alt={img.alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </LightboxContext.Provider>
  );
}

export function ZoomImage({ src, alt, className }) {
  const open = useContext(LightboxContext);
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ cursor: "zoom-in" }}
      onClick={() => open(src, alt)}
    />
  );
}
