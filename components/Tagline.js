'use client';

import { useState, useEffect } from 'react';

export default function Tagline() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <p
      className="text-base text-neutral-500 tracking-wide"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 1s ease',
      }}
    >
      Systems thinker. People first.
    </p>
  );
}