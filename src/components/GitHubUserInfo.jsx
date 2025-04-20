import React, { useState, useEffect } from 'react';

const GitHubUserInfo = ({ username, theme }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';

  useEffect(() => {
    if (!username || username.length < 2) {
      setUserInfo(null);
      setNotFound(false);
      return;
    }

    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (res.status === 404) {
          setNotFound(true);
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          setUserInfo(data);
          setNotFound(false);
        }
      })
      .catch((error) => {
        console.error('GitHub fetch error:', error);
        setNotFound(true);
      })
      .finally(() => setLoading(false));
  }, [username]);

  return (
    <div className="mb-6 text-center">
      {loading && (
        <div className="text-center py-4">
          <div className="w-6 h-6 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto" />
        </div>
      )}

      {notFound && !loading && (
        <p className="text-red-500">❌ User not found on GitHub</p>
      )}

      {!loading && userInfo && (
        <>
          <img
            src={userInfo.avatar_url}
            alt={userInfo.login}
            className="w-24 h-24 rounded-full mx-auto mb-2"
          />
          <p className={`${textColor} font-semibold`}>{userInfo.name || userInfo.login}</p>
          <p className={`${textColor} text-sm`}>
            {userInfo.bio || 'No bio available.'}
          </p>
        </>
      )}

      {!loading && !userInfo && !notFound && (
        <p className={`${textColor} italic`}>Enter a GitHub username to see user info.</p>
      )}
    </div>
  );
};

export default GitHubUserInfo;
