import React, {  useMemo, useState, useEffect } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  
  const [inited, setInited] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    import("@tsparticles/slim").then(({ loadSlim }) => {
      loadSlim(window.tsParticles);
      setInited(true);
    });
  }, []);

  useEffect(() => {
    const obs = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    obs.observe(document.documentElement, { attributes: true });
    setIsDark(document.documentElement.classList.contains("dark"));
    return () => obs.disconnect();
  }, []);

  const options = useMemo(() => ({
    
    fullScreen: { enable: true, zIndex: 1 },
    background: { color: { value: "transparent" } },
    detectRetina: true,
    fpsLimit: 60,
    particles: {
      number: { value: 80, density: { enable: true, area: 600 } },
      shape: { type: "circle" },
      opacity: { value: isDark?0.2:0.6 },
      size: { value: { min: 1, max: 3 } },
      move: { enable: true, speed: 0.6 },
      color: {
        value: isDark ? "#e5e7eb" : "#3b82f6"  // slate-200 in dark, slate-800 in light
      },
      links: {
        enable: true,
        distance: 180,
        color: isDark ? "#e5e7eb" : "#3b82f6",
        opacity: isDark?0.2:0.6,
        width: 0.2,
      },
    },
    interactivity: { events: { onHover: { enable: false }, onClick: { enable: false } } }

  }), [isDark]);

  if (!inited) return null;
  if (window.innerWidth < 640) return null;

  return <Particles id="tsparticles" init={loadSlim} options={options} className="bg-slate-700"/>;
}
