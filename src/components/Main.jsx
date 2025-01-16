import React from 'react';

function Main({ children }) {
  return (
    <main className="container mx-auto py-8 px-4">
      {children}
    </main>
  );
}

export default Main;
