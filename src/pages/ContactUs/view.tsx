import emailjs from "emailjs-com";
import { useState } from "react";

export default function ContactUs({
  agentName = "",
  className = "",
}: {
  agentName?: string;
  className?: string;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agentName,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Replace these with your actual EmailJS parameters
    const serviceID = "service_kg7jur7";
    const templateID = "template_hujdmj1";
    const userID = "Gr-yC-yYN7UlhLWgw";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSubmitted(true);
      })
      .catch((err) => {
        console.error("FAILED...", err);
      });
  };

  return (
    <div
      className={`min-h-screen w-full bg-transparent flex items-center justify-center p-5 md:p-20 ${className}`}
    >
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-primary-dark mb-8">
          Contact Us
        </h2>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full border text-black border-gray-300 rounded-md shadow-sm p-2 focus:ring-primary-light focus:border-primary-light"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="block text-black w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-primary-light focus:border-primary-light"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="block w-full border text-black border-gray-300 rounded-md shadow-sm p-2 focus:ring-primary-light focus:border-primary-light"
                placeholder="Write your message here..."
                //@ts-ignore
                rows="5"
                required
              ></textarea>
            </div>

            {agentName && (
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Agent Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  readOnly
                  value={formData.agentName}
                  onChange={handleChange}
                  className="block w-full border cursor-not-allowed text-black border-gray-300 rounded-md shadow-sm p-2 focus:ring-primary-light focus:border-primary-light"
                  placeholder="John Doe"
                  required
                />
              </div>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-primary-light text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-primary-dark transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        ) : (
          <p className="text-primary-dark text-center">
            Thank you for your message! We will get back to you soon.
          </p>
        )}
      </div>
    </div>
  );
}
