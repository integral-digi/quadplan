"use client"
import { useState, useEffect, RefObject } from "react";

export function useFollowCursor<T extends HTMLElement>(ref: any) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    // Use getBoundingClientRect for reliable element positioning
    const handlePointerMove = (event: PointerEvent) => {
      const rect = ref.current!.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [ref]);

  return point;
}
