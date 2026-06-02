import LineGradient from "./LineGradient";
import { motion } from "framer-motion";

const Testimonial = () => {
  const testimonialStyles = `mx-auto relative max-w-100 h-70 flex 
    flex-col justify-end pt-16 mt-48 before:absolute before:-top-30 
    before:ml-[110px] before:-left-5`;
  return (
    <section id="testimonials" className="pt-32 pb-32">
      <motion.div
        className="md:w-1/3 text-center md:text-left"
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
        <p className="font-serif font-semibold text-4xl mb-0 text-teal-700">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/4" />
        <p className="mt-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          sed nemo, a accusantium vel Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Excepturi sed nemo, a accusantium vel
        </p>
      </motion.div>
      {/* testimonials  */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className={`bg-teal-700 ${testimonialStyles} rounded before:content-[url('src/assets/testimonial1.png')]`}
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
          <p className="font-serif text-6xl z-30 text-teal-100  absolute left-7 top-24 text-shadow-2xs">
            ❝
          </p>
          <p className="text-center text-xl p-10 text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            ipsam, mollitia dolor repellendus harum .
          </p>
          <p className="font-serif text-6xl z-30 text-teal-100  absolute right-5 -bottom-4 text-shadow-2xs">
            ❞
          </p>
        </motion.div>
        <motion.div
          className={`bg-teal-700 ${testimonialStyles} rounded before:content-[url('src/assets/testimonial2.png')]`}
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
          <p className="font-serif text-6xl z-30 text-teal-100  absolute left-7 top-24 text-shadow-2xs">
            ❝
          </p>
          <p className="text-center text-xl p-10 text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            ipsam, mollitia dolor repellendus harum .
          </p>
          <p className="font-serif text-6xl z-30 text-teal-100  absolute right-5 -bottom-4 text-shadow-2xs">
            ❞
          </p>
        </motion.div>
        <motion.div
          className={`bg-teal-700 ${testimonialStyles} rounded before:content-[url('src/assets/testimonial3.png')]`}
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
          <p className="font-serif text-6xl z-30 text-teal-100  absolute left-7 top-24 text-shadow-2xs">
            ❝
          </p>
          <p className="text-center text-xl p-10 text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            ipsam, mollitia dolor repellendus harum .
          </p>
          <p className="font-serif text-6xl z-30 text-teal-100  absolute right-5 -bottom-4 text-shadow-2xs">
            ❞
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default Testimonial;
