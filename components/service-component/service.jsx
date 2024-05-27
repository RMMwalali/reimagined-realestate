import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import "./service.css";
import {
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import FreeTrial from "../free-trial-component/freeTrial";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { scrollToTop } from "../../constants/scrollToTop";
const ServicePage = ({ id, title, breif, descr, imageSrc }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
        className="relative bg-no-repeat bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 flex justify-center items-center text-white "
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/50"></div>
        <motion.h1
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          className="text-6xl max-md:text-5xl max-sm:text-4xl title-font font-semibold z-10"
        >
          {title}
        </motion.h1>
      </div>
      <div
        style={{ maxWidth: 1200 }}
        className=" mx-auto flex
         p-10 max-sm:px-5 relative items-start gap-16 max-lg:flex-col"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0 }}
          className="w-2/3 max-lg:w-full flex flex-col gap-5"
        >
          <h1 className="text-[46px] leading-none max-md:text-4xl font-semibold title-font">
          Patnan Investment's Comprehensive Services
          </h1>
          <div className="text-xl flex flex-col gap-3">
            <p>
              {breif}
            </p>
          </div>
          <div className="mt-10">
            <Accordion
              className="text-xl flex flex-col gap-5 "
              allowToggle={true}
            >
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#3cb371" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                    How do I know if a property has a clear title deed?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                At Patnan Investment, we conduct thorough due diligence on all properties we sell to ensure clear and legally verified title deeds. Our team of legal experts rigorously examines the property's documentation to confirm its ownership status and compliance with regulatory requirements.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#3cb371" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                    Are there any additional costs associated with purchasing land?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                In addition to the property's purchase price, there may be additional costs such as legal fees, stamp duty, land registration fees, and taxes. Our team provides transparent guidance on all associated costs upfront, ensuring clients are fully informed before making any commitments.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#3cb371" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                    Can I visit the property before making a purchase decision?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Absolutely! We encourage clients to schedule site visits to inspect the properties of interest firsthand. Our experienced agents accompany clients on site visits, providing detailed information and addressing any queries to help them make informed decisions.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#3cb371" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                    What happens after I purchase a property from Patnan Investment?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Our commitment to client satisfaction extends beyond the transaction. After purchasing a property from us, our team remains available to provide ongoing support and assistance. Whether it's help with property documentation, development plans, or any post-purchase queries, we're here to ensure a seamless and rewarding experience for our clients.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomIn}
          viewport={{ once: true, amount: 0.2 }}
          className="w-1/3 max-lg:w-full sticky top-36 questions-card p-8 gap-5 flex flex-col"
        >
          <h1 className="text-center text-2xl title-font font-semibold">
            Have Additional Questions?
          </h1>
          <div className="flex mt-2  gap-3 text-xl items-center">
            <div>
              <FaEnvelope className="text-red-500" />
            </div>
            <p>patnaninvestment@gmail.com</p>
          </div>
          <div className="flex  gap-3 text-xl items-center">
            <div>
              <FaPhone className="rotate-90 text-red-500" />
            </div>
            <p>+2547 1781 8598</p>
          </div>
          <div className="flex  gap-3 text-xl items-center">
            <div>
              <FaMapMarkerAlt className="text-red-500" />
            </div>
            <p>Solace near Saika Estate along Kangundo Road</p>
          </div>
          <Link
            to="/contact"
            onClick={scrollToTop}
            className="text-red-500 hover:text-black transition-all duration-300"
          >
            <div className="flex items-center gap-1">
              <p className="text-xl">Contact us</p>
              <FaArrowRight className="text-sm mt-[2px]" />
            </div>
          </Link>
        </motion.div>
      </div>
      <FreeTrial />
    </>
  );
};

export default ServicePage;
