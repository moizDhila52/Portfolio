"use client";
import React from "react";
import { SparklesCore } from "@/app/components/ui/sparkles";

export function SparklesPreview() {
  return (
    <div
      className="h-10000 relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#2dd8ffff" />
      </div>
      
    </div>
  );
}
