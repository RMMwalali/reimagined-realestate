import React from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../constants/scrollToTop";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";

const Showcase2Card = ({ src, href, title }) => {
  const handleSendMessage = () => {
    const propertyTitle = encodeURIComponent(title); // Encode title for URL
    const message = `Hey! I'm interested in buying a property in ${propertyTitle}. Can you provide more details?`;

    const whatsappLink = `https://wa.me/+254717818598?text=${message}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={animationVariants.fadeUp}
      viewport={{ once: true, amount: 0.2 }}
      style={{ height: 380 }}
      className="relative w-full"
    >
      
      <Link className="cursor-pointer" onClick={handleSendMessage}>
        <img className="w-full h-full object-cover" src={src} alt="img" />
      </Link>
    </motion.div>
  );
};

export default Showcase2Card;
