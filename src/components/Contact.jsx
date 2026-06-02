import LineGradient from "./LineGradient";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import contactImage from "../assets/contact.jpg";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async () => {
    const isValid = await trigger();
    if (!isValid) return;
  };

  return (
    <section id="contact" className="pt-48 pb-58">
      <motion.div
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
        <div>
          <p className="font-serif font-semibold md:text-4xl text-2xl justify-center flex">
            <span className="text-teal-700">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="mx-auto w-2/4" />
          </div>
        </div>
      </motion.div>
      {/* form */}
      <div className="md:flex md:justify-between gap-8 mt-5">
        <motion.div
          className="md:mt-0 flex justify-center"
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
          <img
            src={contactImage}
            alt="image contact"
            className="rounded max-w-140 w-3/3"
          />
        </motion.div>

        <motion.div
          className="md:mt-0 basis-1/2 mt-10"
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
          <form
            action="https://formsubmit.co/your@email.com"
            method="POST"
            target="_blank"
            onSubmit={() => onSubmit()}
          >
            <input
              type="text"
              placeholder="Enter username"
              className="border border-teal-700 p-3 rounded font-semibold w-full outline-0"
              {...register("username", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.username && (
              <p className="text-red-600">
                {errors.username.type === "required" &&
                  "This Field is Required"}
                {errors.username.maxLength === "maxLength" &&
                  "This Field is max 100 Length char."}
              </p>
            )}{" "}
            <input
              type="email"
              placeholder="Enter@eample.com"
              className="border border-teal-700 p-3 rounded font-semibold w-full outline-0 mt-5"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              })}
            />
            {errors.email && (
              <p className="text-red-600">
                {errors.email.type === "required" && "This Field is Required"}
                {errors.email.pattern === "pattern" &&
                  "This Field is not match E_mail"}
              </p>
            )}
            <textarea
              placeholder="Enter Message here"
              className="border border-teal-700 p-3 rounded font-semibold w-full outline-0 my-5"
              {...register("message", {
                required: true,
                maxLength: 1000,
              })}
            ></textarea>
            {errors.message && (
              <p className="text-red-600">
                {errors.message.type === "required" && "This Field is Required"}
                {errors.message.maxLength === "maxLength" &&
                  "This Field max 1000 char"}
              </p>
            )}
            <button
              className="bg-linear-60 from-teal-600 to-blue-500 px-3 py-2 text-white cursor-pointer rounded"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
export default Contact;
