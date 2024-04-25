import React from "react";

const PKMSystem = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-600">PKM AI - Your Personal Knowledge Management System</h1>
      <p>PKM AI acts as your second brain, an AI-powered tool that enhances your ability to capture, organize, and recall information from various sources such as books, articles, podcasts, videos, and personal conversations. It simplifies the process of transcribing and summarizing key points, thus saving you the effort of manual note-taking.</p>
      <p>Features of PKM AI include:</p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h2 className="font-semibold text-lg">Information Capture</h2>
          <p>Automatically captures information from diverse sources, transcribes audio and video, and summarizes key points.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h2 className="font-semibold text-lg">Organization</h2>
          <p>Categorizes and tags information based on topics, sources, and other parameters, creating an easily navigable knowledge base.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h2 className="font-semibold text-lg">Recall</h2>
          <p>Retrieves information through simple queries or keywords, presenting relevant data from your personal knowledge base.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h2 className="font-semibold text-lg">Learning and Growth</h2>
          <p>Identifies knowledge gaps and suggests resources for learning, providing personalized learning paths.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h2 className="font-semibold text-lg">Integration</h2>
          <p>Integrates with other applications like calendars, task managers, and social media platforms to capture and organize more aspects of your life.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h2 className="font-semibold text-lg">Privacy and Security</h2>
          <p>Ensures that your personal knowledge base is private and secure, employing advanced security measures to protect your data.</p>
        </div>
      </div>
      <p>This "Second Brain" helps you remember everything you learn, make connections between different pieces of information, and apply your knowledge effectively. It acts like a personal assistant that knows what you know and assists you in using that knowledge when needed. Explore the features below to see how PKM AI can transform your information management.</p>
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-blue-600">Recent Updates</h2>
        <ul className="list-disc pl-6 mt-2">
          <li>Integration with new data sources for enhanced information capture.</li>
          <li>Improved security features to ensure data privacy.</li>
          <li>New learning modules added for continuous growth.</li>
        </ul>
      </div>
    </div>
  );
};

export default PKMSystem;
