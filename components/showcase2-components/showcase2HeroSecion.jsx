import React from "react";
import { animationVariants } from "../../constants/animationVariants";
import { motion } from "framer-motion";
const ShowCase2HeroSection = () => {
  return (
    <div className="bg-[url(https://res.cloudinary.com/dtnbwgpca/image/upload/q_auto:best,f_auto/v1715938274/Patnan%20Web/kq6gt0utecwhswazyvg4.png)] bg-no-repeat bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 flex justify-center items-center text-white ">
      <motion.h1
        initial="initial"
        whileInView="animate"
        variants={animationVariants.zoomOut}
        viewport={{ once: true, amount: 0.2 }}
        className="text-6xl title-font max-sm:text-5xl text-center font-semibold "
      >
        Welcome to Our Gallery
      </motion.h1>
    </div>
  );
};

export default ShowCase2HeroSection;
