"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const STORAGE_KEY = "waytomokshaIntroSeen";
const INTRO_MS = 2400;
const LOGO_SRC = "/brand/waytomoksha-logo-v2.png";

function markIntroSeen() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Private mode or blocked storage should not break Home.
  }
}

function shouldPlayIntro() {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return false;
    }

    return sessionStorage.getItem(STORAGE_KEY) !== "1";
  } catch {
    return false;
  }
}

function subscribeToIntro(onChange: () => void) {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

export function LogoIntro() {
  const eligible = useSyncExternalStore(subscribeToIntro, shouldPlayIntro, () => false);
  const [dismissed, setDismissed] = useState(false);
  const visible = eligible && !dismissed;
  const skipRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    skipRef.current?.focus();

    const overlay = overlayRef.current;
    const inertTargets: HTMLElement[] = [];

    if (overlay) {
      for (const child of Array.from(document.body.children)) {
        if (child instanceof HTMLElement && child !== overlay) {
          child.inert = true;
          inertTargets.push(child);
        }
      }
    }

    const timeoutId = window.setTimeout(() => {
      markIntroSeen();
      setDismissed(true);
    }, INTRO_MS);

    return () => {
      window.clearTimeout(timeoutId);
      document.body.style.overflow = previousOverflow;
      for (const element of inertTargets) {
        element.inert = false;
      }
    };
  }, [visible]);

  function dismiss() {
    markIntroSeen();
    setDismissed(true);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      dismiss();
      return;
    }

    if (event.key === "Tab") {
      event.preventDefault();
      skipRef.current?.focus();
    }
  }

  if (!visible || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div ref={overlayRef} className="logo-intro" onKeyDown={handleKeyDown}>
      <span className="logo-intro-glow" aria-hidden="true" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={LOGO_SRC} alt="" aria-hidden="true" className="logo-intro-mark" />
      <button ref={skipRef} type="button" className="logo-intro-skip" onClick={dismiss}>
        Skip
      </button>
    </div>,
    document.body,
  );
}
