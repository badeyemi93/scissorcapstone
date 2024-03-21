// Import necessary libraries and components
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Logo from "../assets/icons/Logo-dark.svg";
import "./Footer.css";

// Footer component
const Footer = () => {
  return (
    // Footer element
    <footer className="">
      // Footer content
      <div className="footer_data flex justify-between ">
        // Logo section
        <div className="w-1/5">
          // Company logo
          <img src={Logo} alt="logo" />
          // Social media icons
          <ul className="flex gap-4  mt-4 list-none">
            <li>
              <Twitter />
            </li>
            <li>
              <Instagram />
            </li>
            <li>
              <LinkedIn />
            </li>
            <li>
              <Facebook />
            </li>
          </ul>
        </div>

        // Links section
        <div className="p-2 w-3/4">
          // First row of links
          <div className="flex justify-start gap-10 w-full mb-4">
            // Add sections here
            // Each section should follow the format of the example section below
            <div className="w-1/4">
              <h4 className="font-bold text-lg">Why Scissor?</h4>
              <ul>
                <li>Scissor 101</li>
                <li>Integrations & API</li>
                <li>Pricing</li>
              </ul>
            </div>
            // Add more sections as needed
          </div>

          // Second row of links
          <div className="flex justify-start gap-10 w-full">
          // Add sections here
          // Each section should follow the format of the example section below
          <div className="w-1/4">
              <h4 className="font-bold text-lg">Resources</h4>
              <ul>
                <li>Blog</li>
                <li>Resource Library</li>
                <li>Developers</li>
                <li>App Connectors</li>
                <li>Support</li>
                <li>Trust Center</li>
                <li>Browser Extension</li>
                <li>Mobile App</li>
              </ul>
            </div>
            // Add more sections as needed
          </div>
        </div>
      </div>
      // Footer note
      <p className="lg:text-right text-center">Term of Service | Security | Scissor ©2024</p>
    </footer>
  );
};

// Export the Footer component
export default Footer;
