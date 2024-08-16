import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-primary-dark px-5 md:px-10 text-secondary py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h2 className="text-tertiary font-bold mb-4">About Us</h2>
          <p>
            AI AgentElite provides cutting-edge AI automation solutions to
            streamline your workflows and boost productivity.
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <h2 className="text-tertiary font-bold mb-4">Contact Details</h2>
          <p>123 AI Avenue, Tech City, USA</p>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@aiagentelite.com</p>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-tertiary font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-tertiary">
              <FiFacebook />
            </a>
            <a href="#" className="hover:text-tertiary">
              <FiTwitter />
            </a>
            <a href="#" className="hover:text-tertiary">
              <FiLinkedin />
            </a>
            <a href="#" className="hover:text-tertiary">
              <FiGithub />
            </a>
          </div>
        </div>

        {/* Contact Us CTA */}
        <div>
          <h2 className="text-tertiary font-bold mb-4">Get In Touch</h2>
          <a
            onClick={() => navigate("/contactus")}
            className="inline-block bg-tertiary cursor-pointer text-primary-dark font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-tertiary-dark hover:text-secondary transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="border-t border-secondary mt-8 pt-8 text-center">
        <p>&copy; 2024 AI AgentElite. All rights reserved.</p>
      </div>
    </footer>
  );
}
