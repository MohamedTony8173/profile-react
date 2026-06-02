import LineGradient from "./LineGradient";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import imgP from "../assets/p2.jpg";
const MySkills = () => {
  const isAboveMediaScreens = useMediaQuery("(min-width:1060)");
  return (
    <section id="skills" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32 md:w-2/3 mx-auto pb-20">
        <motion.div
          className="md:w-2/3"
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
          <p className="font-serif font-semibold text-4xl mb-0">
            MY <span className="text-teal-700">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-5 mb-0 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            sed nemo, a accusantium vel Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Excepturi sed nemo, a accusantium vel
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMediaScreens ? (
            <div className="md:1/3">
              <img
                src={imgP}
                alt="skills image"
                className="z-10 md:max-w-120 rounded-xl md:max-h-50"
              />
            </div>
          ) : (
            <img
              src={imgP}
              alt="skills image"
              className="z-10 md:max-w-120 rounded-xl md:max-h-50"
            />
          )}
        </div>
      </div>
      {/* skills */}
      <div className="md:flex justify-between mt-16 gap-32">
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-serif font-semibold text-5xl">01</p>
              <p className="font-serif font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-24 md:h-32 bg-linear-60 from-teal-500 to-sky-800 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta nam
            quibusdam aspernatur sunt, vel ab omnis assumenda magni id sint,
            commodi harum nisi consequuntur recusandae vero facere voluptatem
            deserunt nesciunt.
          </p>
        </motion.div>
        {/* innovative */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-serif font-semibold text-5xl">02</p>
              <p className="font-serif font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-24 md:h-32 bg-linear-45 to-teal-500 from-sky-800 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta nam
            quibusdam aspernatur sunt, vel ab omnis assumenda magni id sint,
            commodi harum nisi consequuntur recusandae vero facere voluptatem
            deserunt nesciunt.
          </p>
        </motion.div>
        {/* imaginative */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-serif font-semibold text-5xl">03</p>
              <p className="font-serif font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-24 md:h-32 bg-linear-90 from-teal-500 to-sky-800  absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta nam
            quibusdam aspernatur sunt, vel ab omnis assumenda magni id sint,
            commodi harum nisi consequuntur recusandae vero facere voluptatem
            deserunt nesciunt.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default MySkills;
