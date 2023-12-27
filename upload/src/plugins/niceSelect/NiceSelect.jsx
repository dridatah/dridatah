// Importing necessary modules and styles
'use client';
import React, { useEffect, useRef, useState } from 'react';
import './nice-select.css';

/**
 * NiceSelect Component
 * @param {Object} props - The props for the NiceSelect component
 * @param {Array} props.options - The array of options for the select dropdown
 * @param {string} props.defaultValue - The default selected option for the dropdown
 * @param {function} props.onChange - The callback function triggered when an option is selected
 * @param {string} props.wrapperClass - The additional CSS classes for the select wrapper
 * @returns {JSX.Element} - The NiceSelect component
 */
const NiceSelect = ({ options, defaultValue, onChange, wrapperClass }) => {
  // State to manage the dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // State to manage the currently selected option
  const [selectedOption, setSelectedOption] = useState(defaultValue || options[0]);

  // Ref to reference the dropdown element
  const dropdownRef = useRef(null);

  // Effect to handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // Function to handle option selection
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  // Function to handle keyboard events
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleDropdown();
    } else if (event.key === 'Escape') {
      setIsOpen(false);
    } else if (event.key === 'ArrowDown') {
      const currentIndex = options.indexOf(selectedOption);
      const nextIndex = Math.min(currentIndex + 1, options.length - 1);
      setSelectedOption(options[nextIndex]);
    } else if (event.key === 'ArrowUp') {
      const currentIndex = options.indexOf(selectedOption);
      const prevIndex = Math.max(currentIndex - 1, 0);
      setSelectedOption(options[prevIndex]);
    }
  };

  // Render the NiceSelect component
  return (
    <div
      className={`nice-select${isOpen ? ' open' : ''} ${wrapperClass}`}
      onClick={toggleDropdown}
      onKeyDown={handleKeyDown}
      tabIndex="0"
      ref={dropdownRef}
    >
      <span className="current">{selectedOption}</span>
      <ul className={`list${isOpen ? ' open' : ''}`}>
        {options.map((option) => (
          <li
            key={option}
            className={`option${option === selectedOption ? ' selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NiceSelect;
