"use client";

import React, { useEffect, useRef } from "react";

/**
 * Custom page scrollbar in the site palette (replaces the hidden native one).
 * The thumb eases toward the real scroll position, brightens and widens while you
 * scroll, drag or hover, and fades back to a quiet hairline when idle.
 * Wheel, touch and keyboard scrolling are untouched; the thumb and track are also draggable/clickable.
 */
export const ScrollBar: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!track || !thumb) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let current = 0; // eased thumb offset in px
    let raf = 0;
    let idleTimer = 0;
    let dragging = false;
    let dragStartY = 0;
    let dragStartScroll = 0;

    const metrics = () => {
      const doc = document.documentElement;
      const vh = window.innerHeight;
      const sh = doc.scrollHeight;
      const max = Math.max(sh - vh, 0);
      const trackH = vh - 16; // 8px breathing room top and bottom
      const thumbH = Math.min(trackH, Math.max(52, (vh / Math.max(sh, 1)) * trackH));
      const range = Math.max(trackH - thumbH, 0);
      return { max, thumbH, range };
    };

    const markActive = () => {
      track.dataset.active = "true";
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        if (!dragging) track.dataset.active = "false";
      }, 1000);
    };

    const paint = () => {
      const { max, thumbH, range } = metrics();
      track.style.display = max > 4 ? "block" : "none";
      const progress = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
      const target = progress * range;
      current = reduceMotion ? target : current + (target - current) * 0.16;
      const settled = Math.abs(target - current) < 0.15;
      if (settled) current = target;

      thumb.style.height = `${thumbH}px`;
      thumb.style.transform = `translate3d(0, ${current}px, 0)`;

      raf = settled ? 0 : requestAnimationFrame(paint);
    };

    // Always replace any pending frame so a dropped request (e.g. hidden tab) can never stall the thumb
    const schedule = () => {
      window.cancelAnimationFrame(raf);
      raf = requestAnimationFrame(paint);
    };

    const onScroll = () => {
      markActive();
      schedule();
    };

    const onThumbDown = (e: PointerEvent) => {
      e.preventDefault();
      dragging = true;
      dragStartY = e.clientY;
      dragStartScroll = window.scrollY;
      try {
        thumb.setPointerCapture(e.pointerId);
      } catch {
        /* pointer already released */
      }
      markActive();
    };
    const onThumbMove = (e: PointerEvent) => {
      if (!dragging) return;
      const { max, range } = metrics();
      if (range <= 0) return;
      const next = dragStartScroll + ((e.clientY - dragStartY) / range) * max;
      window.scrollTo({ top: next, behavior: "instant" as ScrollBehavior });
      markActive();
    };
    const onThumbUp = (e: PointerEvent) => {
      dragging = false;
      try {
        if (thumb.hasPointerCapture(e.pointerId)) thumb.releasePointerCapture(e.pointerId);
      } catch {
        /* nothing to release */
      }
      markActive();
    };
    const onTrackDown = (e: PointerEvent) => {
      if (e.target === thumb || thumb.contains(e.target as Node)) return;
      const { max, thumbH, range } = metrics();
      if (range <= 0) return;
      const y = e.clientY - track.getBoundingClientRect().top - thumbH / 2;
      window.scrollTo({ top: (Math.min(Math.max(y, 0), range) / range) * max, behavior: "smooth" });
      markActive();
    };

    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(document.body);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", schedule);
    document.addEventListener("visibilitychange", schedule);
    thumb.addEventListener("pointerdown", onThumbDown);
    thumb.addEventListener("pointermove", onThumbMove);
    thumb.addEventListener("pointerup", onThumbUp);
    thumb.addEventListener("pointercancel", onThumbUp);
    track.addEventListener("pointerdown", onTrackDown);

    current = 0;
    paint();
    // Content (fonts, images, "load more") can change the page height after mount
    const settleTimer = window.setTimeout(schedule, 600);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(idleTimer);
      window.clearTimeout(settleTimer);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("visibilitychange", schedule);
      thumb.removeEventListener("pointerdown", onThumbDown);
      thumb.removeEventListener("pointermove", onThumbMove);
      thumb.removeEventListener("pointerup", onThumbUp);
      thumb.removeEventListener("pointercancel", onThumbUp);
      track.removeEventListener("pointerdown", onTrackDown);
    };
  }, []);

  return (
    <div
      ref={trackRef}
      data-active="false"
      aria-hidden="true"
      className="site-scrollbar group fixed right-0 top-2 bottom-2 z-[70] hidden w-4 select-none [@media(pointer:coarse)]:pointer-events-none [@media(pointer:coarse)]:w-2"
    >
      {/* hairline rail */}
      <span className="site-scrollbar-rail absolute right-[7px] top-0 bottom-0 w-px bg-[rgba(139,115,85,0.35)]" />

      {/* thumb */}
      <div
        ref={thumbRef}
        className="site-scrollbar-thumb absolute right-[4px] top-0 w-[6px] cursor-grab active:cursor-grabbing"
      >
        <span className="site-scrollbar-fill absolute inset-0" />
      </div>
    </div>
  );
};
