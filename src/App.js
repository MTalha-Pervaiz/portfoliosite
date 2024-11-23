import React from 'react';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import ProjectsSection from './components/ProjectsSection';
import './index.css';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main>
        <ProfileSection />
        <ProjectsSection />
      </main>
    </div>
  );
}

export default App;
