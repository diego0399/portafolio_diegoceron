"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type ImageViewerProps = {
  images: string[];
  title?: string;
  variant?: "preview" | "detail";
  onImageClick?: () => void;
  enableZoom?: boolean;
};

export default function ImageViewer({
  images,
  title,
  variant = "preview",
  onImageClick,
  enableZoom = false,
}: ImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const isDetail = variant === "detail";

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleMainImageClick = () => {
    if (onImageClick) {
      onImageClick();
      return;
    }

    if (enableZoom || isDetail) {
      setIsZoomOpen(true);
    }
  };

  useEffect(() => {
    if (isHovered || isZoomOpen || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered, isZoomOpen, images.length]);

  useEffect(() => {
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsZoomOpen(false);
      }
    };

    window.addEventListener("keydown", closeWithEscape);

    return () => window.removeEventListener("keydown", closeWithEscape);
  }, []);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="w-full">
        {title && (
          <div className="flex items-center justify-between mb-4 gap-4">
            <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </h4>

            <span className="text-sm text-gray-500 dark:text-gray-400">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        )}

        <div
          className={`relative w-full ${
            isDetail
              ? "h-[260px] sm:h-[420px] lg:h-[680px]"
              : "h-[220px] sm:h-[340px] lg:h-[520px]"
          } bg-gray-950 rounded-2xl overflow-hidden border border-gray-200 shadow-lg cursor-zoom-in`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleMainImageClick}
        >
          <Image
            src={images[currentIndex]}
            alt={`Captura ${currentIndex + 1}`}
            fill
            className="object-contain"
            priority={currentIndex === 0}
          />

          {!isDetail && (
            <div className="absolute inset-0 bg-black/0 hover:bg-black/25 transition flex items-center justify-center">
              <span className="opacity-0 hover:opacity-100 bg-white text-gray-900 px-5 py-3 rounded-xl font-semibold shadow-lg transition">
                Clic para ver detalles
              </span>
            </div>
          )}

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 text-gray-900 w-9 h-9 sm:w-11 sm:h-11 rounded-full hover:bg-white transition text-xl sm:text-2xl flex items-center justify-center shadow-lg"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 text-gray-900 w-9 h-9 sm:w-11 sm:h-11 rounded-full hover:bg-white transition text-xl sm:text-2xl flex items-center justify-center shadow-lg"
              >
                ›
              </button>
            </>
          )}
        </div>

        {!title && (
          <p className="text-center text-sm text-gray-500 mt-3 dark:text-gray-400">
            {currentIndex + 1} / {images.length}
          </p>
        )}

        {isDetail && images.length > 1 && (
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3 mt-4">
            {images.map((image, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative h-16 sm:h-20 rounded-xl overflow-hidden border-2 transition bg-gray-950 ${
                  currentIndex === index
                    ? "border-blue-600"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt={`Miniatura ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {isZoomOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-3 sm:p-4"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="relative w-full max-w-[1500px] h-[85vh] sm:h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentIndex]}
              alt={`Captura ampliada ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority
            />

            <button
              type="button"
              onClick={() => setIsZoomOpen(false)}
              className="absolute top-4 right-4 bg-white text-gray-900 px-4 sm:px-5 py-2 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Cerrar
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 text-gray-900 w-10 h-10 sm:w-12 sm:h-12 rounded-full hover:bg-white transition text-2xl sm:text-3xl flex items-center justify-center shadow-lg"
                >
                  ‹
                </button>

                <button
                  type="button"
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 text-gray-900 w-10 h-10 sm:w-12 sm:h-12 rounded-full hover:bg-white transition text-2xl sm:text-3xl flex items-center justify-center shadow-lg"
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
