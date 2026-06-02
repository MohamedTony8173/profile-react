import { FaLinkedin, FaInstagramSquare, FaTelegram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const SocialMediaIcon = () => {
  return (
    <div className="flex justify-center items-center md:justify-start mt-10 gap-10">
      <a
        target="_blank"
        className="hover:opacity-50 transition duration-500"
        href="https://linkedin.com"
      >
        <FaLinkedin size={30} className="text-teal-900" />
      </a>{" "}
      <a
        target="_blank"
        className="hover:opacity-50 transition duration-500 "
        href="https://instagram.com"
      >
        <FaInstagramSquare size={30} className="text-teal-900" />
      </a>{" "}
      <a
        target="_blank"
        className="hover:opacity-50 transition duration-500"
        href="https://telegram.com"
      >
        <FaTelegram size={30} className="text-teal-900" />
      </a>{" "}
      <a
        target="_blank"
        className="hover:opacity-50 transition duration-500"
        href="https://x.com"
      >
        <BsTwitterX size={30} className="text-teal-900" />
      </a>
    </div>
  );
};
export default SocialMediaIcon;
