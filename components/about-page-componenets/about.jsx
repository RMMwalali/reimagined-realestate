import React from "react";
import Button from "../buttons-component/solidbutton";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { scrollToTop } from "../../constants/scrollToTop";
import ReviewCard from "../home-page-components/reviewCard";
import Carousel from "../home-page-components/carousel";
import PartnerBrandCard from "../home-page-components/partnerBrandCard";
import { partnerBrands } from "../../constants/partnerBrands";
import "./about.css";

const AboutPage = () => {
  return (
    <>
      <div className="bg-[url(/Services/images/land.jpg)] bg-fixed bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 ">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="flex gap-10 justify-between items-end max-md:items-center px-10 mx-auto max-md:px-5 max-md:flex-col"
        >
          <div className="text-white flex flex-col gap-8 max-md:items-center max-md:text-center">
            <h1 className="text-5xl font-bold">Who We Are</h1>
            <p className="text-xl max-w-md">
            Our mission is to empower dreams through unparalleled real estate solutions
            </p>
          </div>
          <div className="flex gap-12 max-sm:text-center text-white">
            <div className="flex max-md:items-center flex-col gap-4">
              <h2 className="text-4xl title-font font-bold">15+</h2>
              <p className="text-lg">Years in Business</p>
            </div>
            <div className="flex max-md:items-center flex-col gap-4">
              <h2 className="text-4xl  title-font font-bold">1000+</h2>
              <p className="text-lg">Properties Sold</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* what we offer section start */}
      <div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="mx-auto  p-10 py-28  max-sm:px-5 max-md:py-16 "
        >
          <div className="flex w-full gap-10 max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center">
            <div className="flex flex-col items-start justify-between max-md:items-center">
              <h1 className="text-5xl font-bold w-max">
                What we offer
              </h1>
              <Link onClick={scrollToTop} to={"/services"}>
                <Button
                  content={"Services"}
                  fontSize={"text-xl"}
                  padding={"px-5  py-2"}
                  furtherClasses={"mt-8"}
                />
              </Link>
            </div>
            <div className="w-full">
              <img
                src="/Services/images/offer.jpg"
                className="w-full h-full"
                alt=""
              />
            </div>
          </div>
          <div className="what-we-do-cards mt-14 gap-8 max-md:grid-cols-1 max-md:grid-rows-3 grid grid-cols-3 grid-rows-1">
            <div>
              <h2 className="text-2xl text-red-500 font-semibold">
              Consultation and Assessment
              </h2>
              <p className="text-xl mt-2">
              We begin by conducting a thorough consultation to understand your unique needs and preferences.
              </p>
            </div>
            <div>
              <h2 className="text-2xl text-red-500 font-semibold">
              Property Search and Selection
              </h2>
              <p className="text-xl mt-2">
              We'll identify properties that align with your criteria, presenting you with a curated selection of options to choose from.
              </p>
            </div>
            <div>
              <h2 className="text-2xl text-red-500 font-semibold">
              Negotiation and Closing
              </h2>
              <p className="text-xl mt-2">
              Our team will handle all the necessary paperwork and logistics, facilitating a smooth and hassle-free closing process.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="bg-gray-700">
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto flex max-md:flex-col justify-center items-center max-md:text-center gap-20 max-md:gap-12 p-10 py-28  max-sm:px-5 max-md:py-16  md:pb-36 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className=" w-1/2 max-md:w-full flex flex-col text-white items-start justify-between max-md:items-center"
          >
            <h1 className="text-5xl font-bold title-font w-max">
              Who we are
            </h1>
            <p className="text-xl mt-5">
              We are real estate agency that has been established since 2009
              with many advantages over our competitors.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className=" w-1/2 max-md:w-full text-white/50"
          >
            <h2 className="text-2xl">Years in Business</h2>
            <div className="relative w-fit max-md:mx-auto -mt-7 max-md:-mt-5">
              <h1 className="text-[150px] max-sm:text-[120px] font-semibold relative text-red-500">
                15+
              </h1>
            </div>
          </motion.div>
        </div>
      </div>
      {/* we focus section start */}
      <div>
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto  p-10 py-28  max-sm:px-5 max-md:py-16  "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className=" flex max-md:flex-wrap-reverse justify-center items-end max-md:text-center gap-10 max-md:gap-12  -mt-44 max-md:mt-0 "
          >
            <div className=" w-1/2 max-md:w-full flex flex-col text-white items-start justify-between max-md:items-center">
              <img src="/Services/images/building.jpg" alt="" />
            </div>

            <div className=" w-1/2 text-5xl max-lg:text-4xl max-md:w-full ">
              <h1 className="font-semibold ">Fascinating Facts</h1>
              <h1 className="font-semibold  text-red-500">
              About Real Estate
              </h1>
            </div>
          </motion.div>
          <div className="we-focus-cards grid grid-cols-3 max-md:grid-cols-1 grid-rows-1 max-md:grid-rows-3 gap-6 mt-10">
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomIn}
              viewport={{ once: true, amount: 0.2 }}
              className="border-t-2 text-xl border-black/20 pt-4"
            >
              <h2 className="title-font font-semibold">-01</h2>
              <h2 className="title-font mt-7  font-medium text-red-500">
                Did you know that investing in real estate can provide a steady source of passive income through rental properties?
              </h2>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomIn}
              viewport={{ once: true, amount: 0.2 }}
              className="border-t-2 text-xl border-black/20 pt-4"
            >
              <h2 className="title-font font-semibold">-02</h2>
              <h2 className="title-font mt-7  font-medium text-red-500">
              Did you know that certain renovations or upgrades to your property can significantly increase its resale value?
              
              </h2>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomIn}
              viewport={{ once: true, amount: 0.2 }}
              className="border-t-2 text-xl border-black/20 pt-4"
            >
              <h2 className="title-font font-semibold">-03</h2>
              <h2 className="title-font mt-7  font-medium text-red-500">
                Did you know that location is one of the most important factors influencing the value of a property?
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
