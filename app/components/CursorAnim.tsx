"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useFollowCursor } from "./FollowCursor";

const CursorAnim = () => {
  // Create a ref for the element that will follow the cursor.
  const ref = useRef<HTMLElement>(null);
  
  // Get the x and y offsets from the custom hook.
  const { x, y } = useFollowCursor(ref);

  return (
    <motion.section
      // A small element that follows the cursor. 
      // "pointer-events-none" ensures that it doesn't intercept pointer events.
      className="w-4 h-4 fixed z-0 pointer-events-none"
      ref={ref}
      // Animate the element to follow the cursor.
      animate={{ x, y }}
      // Spring configuration for smooth motion.
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 50,
        restDelta: 0.001,
      }}
    >
      <svg
        // A visual representation (e.g., a spinning blurred circle) that animates with the cursor.
        className="opacity-50 animate-spin bg-gradient-radial from-neutral-600 via-gray-800 to-red-500 blur-2xl rounded-full w-96 h-96"
        // Ensure the SVG scales correctly.
        viewBox="0 0 100 100"
      />
    </motion.section>
  );
};

export default CursorAnim;
