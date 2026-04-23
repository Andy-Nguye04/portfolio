"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroBanner() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="relative w-full h-80 overflow-hidden">
      {/* Real photo */}
      {!imgFailed && (
        <Image
          src="/images/andy-hero.JPG"
          alt="Andy Nguyen"
          fill
          className="object-cover object-[center_40%]"
          priority
          onError={() => setImgFailed(true)}
        />
      )}

      {/* Fallback gradient — only shown when image fails */}
      {imgFailed && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #5C3A2A 0%, #3a2218 50%, #191414 100%)",
          }}
        />
      )}

      {/* Fade-to-black overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(25,20,20,0.4) 60%, #191414 100%)",
        }}
      />
    </div>
  );
}
