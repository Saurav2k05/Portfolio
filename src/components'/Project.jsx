import React from "react";
import agri from "../../public/agri.png"; // Import the agriconnect image
import project from "../../public/project.png"; // Import the sanction dashboard image

function Project() {
  const cardItem = [
    {
      id: 1,
      logo: "/agriconnect.png", // Path relative to the public folder
      name: "Agriconnect",
      description: "A platform connecting farmers to resources and services. The system helps farmers access real-time data, weather updates, and market prices.",
      demoLink: "https://agriconnect-three.vercel.app/", // Live demo link for Agriconnect
      image: agri, // Add the image here for Agriconnect
    },
    {
      id: 2,
      logo: "/sanction_dashboard.png", // Path relative to the public folder
      name: "Project Sanction Dashboard",
      description: "A dashboard to manage and track project sanctions for organizations, enabling efficient allocation and reporting of resources.",
      demoLink: "https://your-sanction-dashboard-demo-link.com", // Replace with your live demo link
      image: project, // Add the image for the Sanction Dashboard project
    },
  ];

  return (
    <div name="Project" className="max-w-screen-xl container mx-auto px-4 md:px-10 my-20 bg-black text-white py-10 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cardItem.map(({ id, logo, name, description, demoLink, image }) => (
          <div
            className="bg-black-800 border border-gray-700 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            key={id}
          >
            <div className="p-6 text-center">
              {/* Conditionally display the image for each project */}
              <img
                src={image}
                className="rounded-full md:w-[450px] md:h-[450px] border-4 border-white mx-auto mb-4"
                alt={name}
              />
              <h2 className="font-semibold text-2xl text-white mt-4">{name}</h2>
              <p className="text-gray-400 text-sm mt-2">{description}</p>
            </div>
            <div className="bg-black-700 p-4 rounded-b-lg flex justify-center items-center">
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
