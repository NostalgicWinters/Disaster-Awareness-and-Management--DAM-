import React from 'react'
import Hero from './Hero';

function Resources() {
  return (
    <div>
        <Hero />
        <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center text-red-700 mb-6">Resources</h1>

      {/* User Guides */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-red-600">User Guides & Tutorials</h2>
        <p className="text-gray-600">Learn how to navigate and use our disaster response platform effectively.</p>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>How to Report a Disaster</li>
          <li>Sharing & Requesting Resources</li>
          <li>Coordinating Rescue Efforts</li>
          <li>Using the Map & Navigation Features</li>
        </ul>
      </section>

      {/* Disaster Preparedness */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-red-600">Disaster Preparedness & Response</h2>
        <p className="text-gray-600">Stay ready with these essential guides.</p>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>Emergency Kits Checklist</li>
          <li>Evacuation Plans & Procedures</li>
          <li>First Aid Basics</li>
          <li>Community Coordination Tips</li>
        </ul>
      </section>

      {/* Additional Resources */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-red-600">Additional Resources</h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>Disaster Helpline Numbers</li>
          <li>Live Updates & Alerts</li>
          <li>Download Our App & Tools</li>
        </ul>
      </section>
      </div>

    </div>
  );
}

export default Resources;
