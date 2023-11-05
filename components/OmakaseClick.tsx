'use client'

import React, { useState, useEffect } from 'react';
import JSConfetti from 'js-confetti'; 

const OmakaseClick = () => {
  useEffect(() => {
    const jsConfetti = new JSConfetti();

    const handleOnClick = (event:MouseEvent) => {
      jsConfetti.addConfetti({
        emojis: ['📈','📉'],
        emojiSize: 100,
        confettiNumber: 24,
      });
    };

    document.addEventListener('click', handleOnClick);

    return () => {
      document.removeEventListener('click', handleOnClick);
    };
  }, []);



  return (
      <>
      </>
  );
};

export default OmakaseClick;