
import { useEffect, useRef } from "react";

function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) return;

    // Disable on touch devices and reduced-motion settings
    const pointerQuery = window.matchMedia("(pointer: fine)");
    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (!pointerQuery.matches || motionQuery.matches) {
      glow.style.display = "none";
      return;
    }

    let mouseX = -500;
    let mouseY = -500;
    let currentX = -500;
    let currentY = -500;
    let animationId;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      // Smooth follow / easing
      currentX += (mouseX - currentX) * 0.20;
      currentY += (mouseY - currentY) * 0.20;

      glow.style.transform = `
        translate3d(
          ${currentX}px,
          ${currentY}px,
          0
        )
        translate(-50%, -50%)
      `;

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handleMouseMove);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-40 h-[350px] w-[350px] rounded-full opacity-50 blur-3xl"
      style={{
        background: `
          radial-gradient(
            circle,
            rgba(168,85,247,0.70) 0%,
            rgba(124,58,237,0.14) 35%,
            rgba(34,211,238,0.06) 55%,
            transparent 72%
          )
        `,
        willChange: "transform",
      }}
    />
  );
}

export default CursorGlow;
