import SocialMediaIcon from "./SocialMediaIcon";
const Footer = () => {
  return (
    <footer className="h-64 bg-teal-50">
      <div className="w-5/6 mx-auto p-2">
        <SocialMediaIcon />
        <div className="md:flex md:justify-between  justify-center text-center">
          <p className="font-serif text-teal-600 font-semibold text-2xl">
            JOHN DOE
          </p>
          <p className="font-serif text-teal-800 text-md">
            &copy; 2026 ALL RIGHT RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
