"use client"
import { hideHomeThreeCanvasMenu } from '@/rtk/features/global/globalSlice';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function HomeThreeOverlay() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });


  // Function to hanlde mourse cursor effect
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setCursorPosition({ x: clientX, y: clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Get Cursor position
  const { x, y } = cursorPosition;
  const isHomeThreeMenuOpen = useSelector((state) => state.global.homeThreeCanvasMenuOpen);
  const dispatch = useDispatch();

  // Toggle sidebar 
  const hidesidebarmenu = () => {
    dispatch(hideHomeThreeCanvasMenu())
  }

  return (
    <div
      style={{ transform: `translate(${x}px, ${y}px)` }}

      onClick={hidesidebarmenu} className={`crn-hm3-overlay ${isHomeThreeMenuOpen && 'd-block'}`}>
      <svg className='crn-customor-cursor' width="40" height="45" viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="9.35355" y1="11.6464" x2="30.5668" y2="32.8596" stroke="black" />
        <line x1="30.3796" y1="11.3254" x2="10.8559" y2="34.1031" stroke="black" />
      </svg>

    </div>
  )
}