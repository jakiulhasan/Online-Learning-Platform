import React from "react";

const TopInstructor = () => {
  const educators = [
    {
      name: "James Whitmore, MBA",
      title: "Business & Marketing Educator",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Lisa Chen, M.Sc.",
      title: "Creative Arts & Design Educator",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Oliver Bennett, M.A.",
      title: "Master of Language Educator",
      img: "https://randomuser.me/api/portraits/men/31.jpg",
    },
    {
      name: "Sophia Martinez",
      title: "Psychology & Personal Coach",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <div className="bg-base-200">
      <div className="py-20  text-center w-11/12 mx-auto">
        <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-3">
          Our Expert Educators
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Talented Educators Building <br />
          Tomorrow’s Leaders With Passion
        </h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Our instructors design courses that cultivate leadership, critical
          thinking, and creativity, preparing learners to excel in today’s
          dynamic world.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
          {educators.map((ed, i) => (
            <div
              data-aos="flip-right"
              data-aos-delay={i * 150}
              key={i}
              className="card bg-base-100 shadow-md border border-gray-200 rounded-2xl"
            >
              <figure className="px-6 pt-6">
                <img
                  src={ed.img}
                  alt={ed.name}
                  className="rounded-xl w-40 h-40 object-cover mx-auto"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="font-semibold text-base">{ed.name}</h3>
                <p className="text-sm">{ed.title}</p>
                <div className="flex gap-3 mt-3">
                  <a className="btn btn-circle btn-sm bg-orange-500 text-white hover:bg-orange-600">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-circle btn-sm bg-orange-500 text-white hover:bg-orange-600">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a className="btn btn-circle btn-sm bg-orange-500 text-white hover:bg-orange-600">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopInstructor;
