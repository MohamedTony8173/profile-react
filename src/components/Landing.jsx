import { useMediaQuery } from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLinkImport from "react-anchor-link-smooth-scroll";
const AnchorLink = AnchorLinkImport.default || AnchorLinkImport;
import imgP from "../assets/p2.jpg";
import SocialMediaIcon from "./SocialMediaIcon";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediaScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* image section  */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediaScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-8 before:z-[-1]
           before:-left-8 before:border-5 before:w-full before:h-full  before:rounded
            before:border-teal-300 before:max-w-150 before:border-r-0 before:border-b-0 

            after:absolute after:-bottom-8 after:z-[-1] after:rounded
           after:-right-8 after:border-5 after:w-full after:h-full 
            after:border-blue-300 after:max-w-150 after:border-l-0 after:border-t-0
            "
          >
            <img
              src={imgP}
              alt="profile image"
              className=" shadow hover:saturate-150 transition duration-500 z-10 
              w-full max-w-100 md:max-w-150 rounded-[10px] border-double "
            />
          </div>
        ) : (
          <div>
            <img
              src={imgP}
              alt="profile image"
              className="shadow hover:saturate-150 transition duration-500 z-10 
              w-full max-w-100 md:max-w-150 rounded-[20px] border-double "
            />
          </div>
        )}
      </div>
      {/* main section */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className=" text-6xl font-serif z-10 text-center md:text-start">
            John{" "}
            <span
              className="relative text-teal-800 font-semibold z-20
              before:content-[url('src/assets/Brush.png')] before:absolute
               before:-right-5 before:-bottom-2 before:z-[-1] "
            >
              Doe
            </span>
          </p>
          <p className="mt-7 text-sm text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            nostrum eligendi, consequuntur provident voluptates consectetur
            magnam reprehenderit facilis delectus explicabo fuga ipsam, sed
            quidem magni cupiditate nesciunt dolores iusto repellendus!
          </p>
        </motion.div>
        {/* call action */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-linear-to-r from-teal-500 to-blue-500 px-5 py-2 text-white rounded-sm 
            hover:bg-linear-to-l transition duration-500 liner"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>

          <AnchorLink
            className="rounded-r-sm border-2 border-l-0 border-t-teal-500 border-r-blue-500 border-b-teal-500 py-0.5 pr-0.5 "
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div
              className=" hover:bg-linear-to-l from-blue-500 to-teal-500 w-full h-full 
            flex items-center justify-center font-serif px-10 hover:text-white font-bold text-xl transition duration-500 liner"
            >
              let's talk
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcon />
        </motion.div>
      </div>
    </section>
  );
};
export default Landing;
