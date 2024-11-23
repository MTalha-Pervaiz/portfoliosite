import React from 'react';
import profileImage from '../assets/images/IMG_2487.jpg';

const ProfileSection = () => {
  const copyEmailToClipboard = () => {
    const email = "m.talhapervaiz21@gmail.com";
    navigator.clipboard.writeText(email)
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleHireMeClick = () => {
    window.open('https://www.linkedin.com/in/talha-pervaiz', '_blank'); // Replace with your LinkedIn URL
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
          <img
            src={profileImage}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="mt-4 text-2xl font-bold text-gray-800">Talha Pervaiz</h1>
        <p className="text-gray-600">Project Manager & Developer</p>
        <div className="mt-6 space-x-4">
          <button 
            className="px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800 transition duration-200"
            onClick={handleHireMeClick}
          >
            Hire Me
          </button>
          <button 
            className="px-4 py-2 border border-gray-300 bg-white rounded-md text-gray-700 hover:bg-gray-100 transition duration-200"
            onClick={copyEmailToClipboard}
          >
            Copy Email
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;