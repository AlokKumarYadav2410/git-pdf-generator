import React, { useState } from 'react';
import PDFGenerator from './components/PDFGenerator';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-center px-4 py-10 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <Toaster position="top-right" />
      <PDFGenerator theme={theme} setTheme={setTheme} />
      <Footer theme={theme} />
    </div>
  );
};

export default App;


