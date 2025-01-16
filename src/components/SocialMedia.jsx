import React from 'react';

function SocialMedia() {
  return (
    <div className="flex space-x-4">
        <a href="https://www.facebook.com" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            {/* Font Awesome Facebook Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10 0 5 3.66 9.15 8.43 9.85v-7H7.9v-2.9h2.5v-2c0-2.5 1.49-3.9 3.78-3.9 1.1 0 2.2.2 2.2 2.2v2.5h-1.5c-1.1 0-1.3.6-1.3 1.3v1.7h2.7l-.4 2.9h-2.3v7c4.76-.7 8.42-4.8 8.42-9.85 0-5.5-4.5-10-10-10z"/></svg>
        </a>
        <a href="https://www.instagram.com" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5zm-4.4 12.6a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6zM17 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-4 4a2.3 2.3 0 1 0 0 4.6 2.3 2.3 0 0 0 0-4.6z"/></svg>
        </a>
        <a href="https://www.twitter.com" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M23 3c-.7.5-1.6.8-2.6 1-.8-1-1.8-1.6-3-2 1.2 1 2 1.7 2.7 2.1-.9-.4-1.8-.6-2.8-.6-2.1 0-3.7 1.9-3.3 3.9-3.2-.1-6.4-1.7-8.4-4 2.2 1.5 3.6 2.9 4.2 4.1-1-.3-2.1-.5-3.2-.5-.7 0-1.3.1-1.8.2 1 2.5 3 3.8 5.2 3.8-1.2.9-2.6 1.4-4 1.4-.9 0-1.6 0-2.4-.1 1.5 2.9 4.5 4.9 7.7 4.9-4 3-9 1.9-11.8-.8 2.3 1.8 4.9 2.8 7.7 2.8z"/></svg>
        </a>
    </div>
  );
}

export default SocialMedia;