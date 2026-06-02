import LineGradient from "./LineGradient";
import { motion } from "framer-motion";
import Project from "./Project";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.jpg";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="pt-32 pb-32">
      <motion.div
        className="md:w-2/4 mx-auto text-center w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-serif font-semibold text-4xl ">
            <span className="text-teal-700">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>

        <p className="mt-5 mb-5 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          sed nemo, a accusantium vel Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Excepturi sed nemo, a accusantium vel
        </p>
      </motion.div>
      {/* projects */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          variants={container}
        >
          <div
            className="flex justify-center items-center text-center p-10 w-full
           bg-teal-100  text-2xl font-serif font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="project 1" projImg={project1} />
          <Project title="project 2" projImg={project2} />
          <Project title="project 3" projImg={project3} />
          <Project title="project 4" projImg={project4} />
          <Project title="project 5" projImg={project5} />
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;
