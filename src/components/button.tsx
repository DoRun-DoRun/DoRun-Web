'use client';

import React from 'react';

const Btn = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button
      className="w-3/4 md:w-328 py-12 md:py-20 bg-primary3 rounded-lg"
      onClick={onClick}>
      <p className="text-22 font-bold text-white text-center">{text}</p>
    </button>
  );
};

export default Btn;
