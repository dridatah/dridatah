// Importing necessary modules and styles
'use client';
import React, { useEffect, useState } from 'react';
import templateColors from './templateColors.json';
import { setPrimaryBackgroundsNdColors, handleColorClick } from '@/helper';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';

/**
 * Color and Cursor Switcher Component
 * @param {string} props.position - The position of the color switcher ('left' or 'right')
 */
export default function ColorNdCursorSwitcher({ position }) {
  // State to manage the color switcher's visibility
  const [isColorSwitcherActive, setIsColorSwitcherActive] = useState(false);

  // Get the current router instance
  const router = useRouter();

  // State to track the client's cursor position
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  // State to track cursor hover status and opacity
  const [hover, setHover] = useState(false);
  const [opacity, setOpacity] = useState(0);

  // Handle click event for the circle cursor
  const handleClickCircle = (e) => {
    e.preventDefault();
    setOpacity(1);
  };

  // Handle click event for the normal cursor
  const handleClickNormal = (e) => {
    e.preventDefault();
    setOpacity(0);
  };

  // Effect to track the client's cursor position and hover status
  useEffect(() => {
    const handleMouseMove = (event) => {
      setClientX(event.clientX);
      setClientY(event.clientY);
    };

    const handleMouseOver = () => {
      setHover(true);
    };

    const handleMouseOut = () => {
      setHover(false);
    };

    document.body.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a, button').forEach((element) => {
      element.addEventListener('mouseover', handleMouseOver);
      element.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a, button').forEach((element) => {
        element.removeEventListener('mouseover', handleMouseOver);
        element.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, [router]);

  // Effect to set default background and colors on route change
  useEffect(() => {
    setPrimaryBackgroundsNdColors();
  }, [router]);

  // Render the ColorNdCursorSwitcher component
  return (
    <>
      {/* Circle cursor */}
      <div style={{ left: `${clientX}px`, top: `${clientY}px`, opacity: `${opacity}`, }} className="cursor" id="cursor"></div>

      <div className={`cursor2 ${hover && 'hover'}`} style={{
        left: `${clientX}px`, top: `${clientY}px`, opacity: `${opacity}`,
      }} id="cursor2">
        <div className="ball"></div>
      </div>
      <div
        id="cursor3"
        className={`cursor3 ${hover && 'hover'}`}
        style={{
          left: `${clientX}px`,
          top: `${clientY}px`,
          opacity: `${opacity}`,
        }}
      ></div>

      {/* Color switcher button */}
      <button
        className={`color-switcher-btn ${position === 'right' && 'position-right'} ${isColorSwitcherActive ? '' : 'active'}`}
        onClick={() => setIsColorSwitcherActive(true)}
      >
        <i className="fa-solid fa-gear"></i>
      </button>

      {/* Color switcher palette */}
      <div
        className={`theme-color-switch ${position === 'right' && 'position-right'} ${isColorSwitcherActive && 'active'}`}
      >
        <div className="d-flex align-items-center justify-content-between gap-3">
          <h6 className="fs-18 mb-0">Theme Colors</h6>
          {/* Close button */}
          <button className="close-switcher" onClick={() => setIsColorSwitcherActive(false)}>
            <i className="fas fa-xmark"></i>
          </button>
        </div>
        {/* Color list */}
        <ul className="color-list">
          {templateColors?.map((tc, index) => (
            <li key={index}>
              <button className={tc.className} title={tc.title} onClick={() => handleColorClick(tc.className)}></button>
            </li>
          ))}
        </ul>
        <hr />
        <h6 className="fs-18 mb-3">Magic Cursor</h6>
        <ul className="cursor-list">
          <li>
            <a onClick={handleClickCircle} href="#" className="cursor-circle">
              <i className="fa-solid fa-circle"></i>
            </a>
          </li>
          <li>
            <a onClick={handleClickNormal} href="#" className="cursor-normal">
              <i className="fa-solid fa-arrow-pointer"></i>
            </a>
          </li>
        </ul>
        <a
          href="https://themeforest.net/user/mate_themes/portfolio"
          className="template-btn primary-btn mt-4"
        >
          Buy Now
        </a>
      </div>
    </>
  );
}

// PropTypes for the position prop
ColorNdCursorSwitcher.propTypes = {
  position: PropTypes.oneOf(['left', 'right']).isRequired,
};
