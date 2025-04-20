import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa';

const Footer = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <footer
      className={`w-full py-4 border-t text-center text-sm transition-colors ${
        isDark ? 'border-gray-700 text-gray-400' : 'border-gray-300 text-gray-600'
      }`}
      style={{
        marginTop: 'auto',
      }}
    >
      <p className="mb-2">
        🚀 Built by <span className="font-semibold">Alok Kumar Yadav</span> — © 2025
      </p>
      <div className="flex justify-center gap-4 text-lg">
        <a
          href="https://github.com/AlokKumarYadav2410"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/alokkumaryadav2410/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://t.me/Subastral_alok"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaTelegram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
