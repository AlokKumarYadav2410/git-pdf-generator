import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ theme, setTheme }) => {
  const isDark = theme === 'dark';

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold shadow transition ${
          isDark
            ? 'bg-white text-gray-800 hover:bg-gray-200'
            : 'bg-gray-800 text-white hover:bg-gray-700'
        }`}
      >
        {isDark ? (
          <>
            <FaSun className="animate-spin-slow" />
            Light Mode
          </>
        ) : (
          <>
            <FaMoon className="animate-pulse" />
            Dark Mode
          </>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
