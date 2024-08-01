import { useState, useEffect } from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaFacebook, FaMapMarkerAlt, FaEdit } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  // State for modal functionality
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  // State for testimonial slider
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonials = [
    {
      quote: "Marry's expertise in web development helped us create a fantastic website. The project was delivered on time.Highly recommended!",
      author: "Taylor Smith, CEO at TechCorp",
    },
    {
      quote: "Working with Marry was a pleasure. Her attention to detail and creative solutions made our website stand out.",
      author: "Jordan Lee, Product Manager at Webify",
    },
    {
      quote: "Marry was instrumental in redesigning our website. Her technical skills and understanding of user experience were invaluable.",
      author: "Chris Evans, CTO at StartUp Inc.",
    },
  ];

  // Update testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [testimonials.length]);

  // Handler for image click to open modal
  const handleImageClick = (src) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  // Close modal handler
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  // Form state and handlers
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast.success("Form submitted successfully!");
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  // Dismiss toast notification on screen click
  useEffect(() => {
    const dismissToastOnClick = () => {
      toast.dismiss();
    };

    document.addEventListener("click", dismissToastOnClick);

    return () => {
      document.removeEventListener("click", dismissToastOnClick);
    };
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="bg-e3e2db min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <style>
          {`
            .zoom-in {
              transition: transform 0.3s ease;
            }
            .zoom-in:hover {
              transform: scale(1.05);
            }
            .zoom-out {
              transition: transform 0.3s ease;
            }
            .zoom-out:hover {
              transform: scale(0.95);
            }
          `}
        </style>

        <div className="container mx-auto p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg bg-white ">
          {/* Header */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-0b0e0f">
            Find a Web Developer
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Developer Info */}
            <div className="flex flex-col items-center zoom-out">
              <img
                src="./Images/Profile_img.jpg"
                alt="Web Developer"
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full mb-6 border-0b0e0f border-4"
              />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 text-0b0e0f">
                Marry
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-4a4237 mb-4 flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                San Francisco, CA
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-4a4237 mb-6 mt-3">
                Passionate web developer with a focus on creating responsive and user-friendly websites. Experienced in front-end and back-end technologies, committed to delivering high-quality digital solutions.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-4a4237 mb-6">
                With over a decade of experience in the tech industry, I have honed my skills in various programming languages and frameworks. My journey began with a degree in Computer Science, which laid the foundation for a career characterized by continuous learning and adaptation to the ever-evolving digital landscape.
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-4 mt-6 sm:mt-8 lg:mt-10">
                <a
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4a4237 hover:text-bb9553"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://twitter.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4a4237 hover:text-bb9553"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://www.instagram.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4a4237 hover:text-bb9553"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.youtube.com/c/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4a4237 hover:text-bb9553"
                >
                  <FaYoutube size={24} />
                </a>
                <a
                  href="https://www.facebook.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4a4237 hover:text-bb9553"
                >
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>

            {/* Portfolio, Testimonials, and Areas of Expertise */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              {/* Portfolio */}
              <div className="bg-c7c4b7 p-4 rounded-lg shadow-sm zoom-in">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-0b0e0f">
                  Portfolio
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2">
                  {[
                    "./Images/AdminForm.png",
                    "./Images/CrudApp.png",
                    "./Images/MultiStepForm.png",
                    "./Images/EcommerceWebsite.png",
                    "./Images/Portfolio.png",
                    "./Images/AdminForm.png",
                  ].map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`Portfolio Image ${index + 1}`}
                      className="rounded-lg border-877470 border cursor-pointer w-full h-32 object-cover"
                      onClick={() => handleImageClick(src)}
                    />
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-c7c4b7 py-6 px-4 mt-4 rounded-lg shadow-sm zoom-in">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-0b0e0f">
                  Testimonials
                </h3>
                <div
                  className="text-4a4237 mb-2 transition-all duration-500"
                  style={{ minHeight: "120px" }}
                >
                  <p>"{testimonials[testimonialIndex].quote}"</p>
                  <p className="text-877470 mt-2">
                    {testimonials[testimonialIndex].author}
                  </p>
                </div>
                <div className="flex items-center justify-center mt-2">
                  {testimonials.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full mx-1 ${index === testimonialIndex ? "bg-bb9553" : "bg-e3e2db"
                        }`}
                    />
                  ))}
                </div>
              </div>

              {/* Areas of Expertise */}
              <div className="bg-c7c4b7 p-4 mt-4 rounded-lg shadow-sm zoom-in">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-0b0e0f">
                  Areas of Expertise
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2">
                  <button className="bg-e3e2db text-0b0e0f py-1 px-2 rounded-lg text-sm sm:text-base lg:text-lg">
                    React
                  </button>
                  <button className="bg-e3e2db text-0b0e0f py-1 px-2 rounded-lg text-sm sm:text-base lg:text-lg">
                    Node.js
                  </button>
                  <button className="bg-e3e2db text-0b0e0f py-1 px-2 rounded-lg text-sm sm:text-base lg:text-lg">
                    JavaScript
                  </button>
                  <button className="bg-e3e2db text-0b0e0f py-1 px-2 rounded-lg text-sm sm:text-base lg:text-lg">
                    CSS
                  </button>
                  <button className="bg-e3e2db text-0b0e0f py-1 px-2 rounded-lg text-sm sm:text-base lg:text-lg">
                    HTML
                  </button>
                  <button className="bg-e3e2db text-0b0e0f py-1 px-2 rounded-lg text-sm sm:text-base lg:text-lg">
                    Mern Stack
                  </button>
                  <button className="bg-e3e2db text-0b0e0f py-1 px-2 rounded-lg text-sm sm:text-base lg:text-lg">
                    APIs
                  </button>
                  <button className="bg-e3e2db text-0b0e0f py-1 px-2 rounded-lg text-sm sm:text-base lg:text-lg">
                    Database Design
                  </button>
                  <button className="bg-e3e2db text-0b0e0f py-1 px-2 rounded-lg text-sm sm:text-base lg:text-lg">
                    Web Security
                  </button>
                </div>
              </div>
            </div>

            {/* Consultation and Contact Form */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1 zoom-in">
              <div className="bg-c7c4b7 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 text-0b0e0f">
                  Book a Consultation
                </h3>
                <div className="flex flex-col sm:flex-row justify-between mb-6">
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-0b0e0f">
                      $100
                    </h4>
                    <p className="text-sm sm:text-base lg:text-lg text-4a4237">
                      1 hour
                    </p>
                  </div>
                  <button className="bg-0b0e0f text-white py-2 px-4 rounded-lg text-sm sm:text-base lg:text-lg hover:bg-bb9553 focus:outline-none focus:ring-2 focus:ring-bb9553 flex items-center">
                    <FaEdit />
                  </button>
                </div>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 text-0b0e0f">
                  Initial Consultation
                </h4>
                <p className="text-sm sm:text-base lg:text-lg text-4a4237 mb-6">
                  Discuss your project needs, objectives, and receive a roadmap to achieve your goals with expert guidance.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6 text-0b0e0f">
                    Get in Touch with Us
                  </h3>
                  <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-sm sm:text-base lg:text-lg font-semibold text-0b0e0f"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleFormChange}
                        className="w-full p-3 border border-4a4237 rounded-lg text-4a4237 bg-white focus:outline-none focus:ring-2 focus:ring-bb9553"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm sm:text-base lg:text-lg font-semibold text-0b0e0f"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleFormChange}
                        className="w-full p-3 border border-4a4237 rounded-lg text-4a4237 bg-white focus:outline-none focus:ring-2 focus:ring-bb9553"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block text-sm sm:text-base lg:text-lg font-semibold text-0b0e0f"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleFormChange}
                        className="w-full p-3 border border-4a4237 rounded-lg text-4a4237 bg-white focus:outline-none focus:ring-2 focus:ring-bb9553"
                        rows="3"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-0b0e0f text-white py-2 px-4 rounded-lg text-sm sm:text-base lg:text-lg hover:bg-bb9553 focus:outline-none focus:ring-2 focus:ring-bb9553"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Enlarged Image */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg relative max-w-full max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
              >
                &times;
              </button>
              <img
                src={modalImage}
                alt="Enlarged"
                className="max-w-full max-h-full rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
