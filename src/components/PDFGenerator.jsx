import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import GitCheatSheetPDF from './GitCheatSheetPDF';
import GitHubUserInfo from './GitHubUserInfo';
import ThemeToggle from './ThemeToggle';
import toast from 'react-hot-toast';

const PDFGenerator = ({ theme, setTheme }) => {
  const [name, setName] = useState('');
  const [githubUsername, setGithubUsername] = useState('');

  const handleDownloadToast = () => {
    toast.success('📥 Download started! Generating your PDF...');
  };

  return (
    <div className={`w-full max-w-xl rounded-lg p-6 shadow-lg transition-all ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className="text-2xl font-bold text-center mb-6">
        📄 Personalized Git Cheat Sheet
      </h2>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`p-3 rounded-md border focus:outline-none focus:ring-2 ${
            theme === 'dark'
              ? 'bg-gray-700 text-white placeholder-gray-300 border-gray-600 focus:ring-blue-400'
              : 'bg-white text-black placeholder-gray-500 border-gray-300 focus:ring-blue-500'
          }`}
        />

        <input
          type="text"
          placeholder="GitHub Username"
          value={githubUsername}
          onChange={(e) => setGithubUsername(e.target.value)}
          className={`p-3 rounded-md border focus:outline-none focus:ring-2 ${
            theme === 'dark'
              ? 'bg-gray-700 text-white placeholder-gray-300 border-gray-600 focus:ring-blue-400'
              : 'bg-white text-black placeholder-gray-500 border-gray-300 focus:ring-blue-500'
          }`}
        />

        <GitHubUserInfo username={githubUsername} theme={theme} />

        <ThemeToggle theme={theme} setTheme={setTheme} />

        {name && githubUsername && (
          <div className="mt-4 text-center">
            <PDFDownloadLink
                document={<GitCheatSheetPDF name={name} avatarUrl={`https://github.com/${githubUsername}.png`} />}
              fileName={`Git_Cheat_Sheet_${name}.pdf`}
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
              onClick={handleDownloadToast}
            >
              {({ loading }) =>
                loading ? 'Preparing PDF...' : '📥 Download Your PDF'
              }
            </PDFDownloadLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFGenerator;
