import { motion } from "framer-motion";
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, projImg }) => {
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const overlayStyles = `absolute w-full h-full opacity-0 hover:opacity-90 
    transition duration-500 bg-gray-100 z-30 flex flex-col justify-center items-center
    text-center p-10 text-teal-900 `;

  return (
    <motion.div variants={projectVariant} className="relative shadow">
      <div className={overlayStyles}>
        <p className="font-serif text-2xl">{title}</p>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          inventore hic ea eius necessitatibus, ipsam laboriosam, odio expedita
          repudiandae mollitia fugit voluptas consectetur atque explicabo illo
          optio voluptatibus eveniet fuga.
        </p>
      </div>
      <img src={projImg} alt={projectTitle} className="h-full w-full" />
    </motion.div>
  );
};
export default Project;
