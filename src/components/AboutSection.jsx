import React from "react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-base-100 text-base-content">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold text-orange-500 uppercase mb-2">
            About Us
          </p>
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Committed To Excellence
            <br /> In Online Education
          </h2>
          <p className="text-base-content/70 mb-6">
            Our platform is built on trust, quality, and innovation, ensuring
            learners everywhere access knowledge that truly empowers and
            inspires.
          </p>
          <button className="btn btn-primary bg-orange-500 border-none text-white">
            Learn More →
          </button>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center">
          <div className="border rounded-xl p-4">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Students"
              className="rounded-lg"
            />
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-6 mt-8 w-full">
            <div className="flex items-start space-x-3">
              <div className="text-orange-500 text-2xl">
                <i className="fa-solid fa-user-tie"></i>
              </div>
              <div>
                <h4 className="font-semibold">Qualified Teachers</h4>
                <p className="text-sm text-base-content/70">
                  Experienced educators guiding with proven expertise
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="text-purple-500 text-2xl">
                <i className="fa-solid fa-book-open"></i>
              </div>
              <div>
                <h4 className="font-semibold">Modern Curriculum</h4>
                <p className="text-sm text-base-content/70">
                  Up-to-date courses aligned with industry needs
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="text-green-500 text-2xl">
                <i className="fa-solid fa-certificate"></i>
              </div>
              <div>
                <h4 className="font-semibold">Certified Institute</h4>
                <p className="text-sm text-base-content/70">
                  Officially recognized with globally trusted certifications
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="text-pink-500 text-2xl">
                <i className="fa-solid fa-laptop-house"></i>
              </div>
              <div>
                <h4 className="font-semibold">Flexible Learning</h4>
                <p className="text-sm text-base-content/70">
                  Study anytime anywhere with complete freedom
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto mt-16 bg-base-200 rounded-xl p-8 grid md:grid-cols-3 items-center gap-6">
        {/* Left Text */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Committed To Excellence</h3>
          <p className="text-base-content/70 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus.
          </p>
        </div>

        {/* Middle Button */}
        <div className="flex items-center justify-center space-x-4">
          <div className="avatar-group -space-x-4 rtl:space-x-reverse">
            <div className="avatar">
              <div className="w-10">
                <img src="https://randomuser.me/api/portraits/women/65.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-10">
                <img src="https://randomuser.me/api/portraits/men/45.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-10">
                <img src="https://randomuser.me/api/portraits/women/70.jpg" />
              </div>
            </div>
          </div>
          <div>
            <p className="font-semibold">Learn Smarter. Grow Faster.</p>
          </div>
          <button className="btn btn-primary bg-orange-500 border-none text-white">
            Join Us →
          </button>
        </div>

        {/* Right Stats */}
        <div className="text-right">
          <h3 className="text-3xl font-bold text-orange-500">320+</h3>
          <p className="font-medium mb-4">Expert Mentors</p>
          <h3 className="text-3xl font-bold text-orange-500">480+</h3>
          <p className="font-medium">Skill Courses</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
