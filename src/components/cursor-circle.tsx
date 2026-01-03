"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorCircle() {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!circleRef.current) return;

    // Smooth setters (high-performance)
    const xTo = gsap.quickTo(circleRef.current, "x", {
      duration: 0.3,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(circleRef.current, "y", {
      duration: 0.3,
      ease: "power3.out",
    });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      // Set opacity after animation completes
      gsap.to(circleRef.current, {
        opacity: 1,
        duration: 0.1,
        delay: 0.3, // Wait for the position animation to complete
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        opacity: 0,
        borderRadius: "50%",
        border: "2px #e7d393 solid",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
