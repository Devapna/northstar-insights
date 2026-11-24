import { useEffect, useMemo, useRef } from "react";

export interface CountUpProps {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
  label: string;
}

export function CountUp({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1700,
  className,
  label,
}: CountUpProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const formatter = useMemo(() => new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }), [decimals]);
  const animationDuration = Math.max(1, duration);

  useEffect(() => {
    const element = elementRef.current;
    const number = numberRef.current;
    if (!element || !number) return;

    let frame = 0;
    let startedAt = 0;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!("IntersectionObserver" in window)) {
      number.textContent = `${prefix}${formatter.format(to)}${suffix}`;
      return;
    }

    const animate = (timestamp: number) => {
      if (!startedAt) startedAt = timestamp;
      const progress = Math.min((timestamp - startedAt) / animationDuration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      number.textContent = `${prefix}${formatter.format(to * eased)}${suffix}`;
      if (progress < 1) frame = window.requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (motionPreference.matches) {
        number.textContent = `${prefix}${formatter.format(to)}${suffix}`;
      } else {
        frame = window.requestAnimationFrame(animate);
      }
    }, { threshold: 0.45 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [animationDuration, decimals, formatter, prefix, suffix, to]);

  return (
    <span ref={elementRef} className={className} role="img" aria-label={`${label}: ${prefix}${formatter.format(to)}${suffix}`}>
      <span ref={numberRef} aria-hidden="true">{prefix}{formatter.format(0)}{suffix}</span>
    </span>
  );
}
