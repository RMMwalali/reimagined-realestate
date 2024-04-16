import React, { useContext, useEffect, useState } from "react";
// import Button from "../buttons-components/solidbutton";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from "@chakra-ui/react";
import ImageSlider from "./imageSlider";
import { CartContext } from "../../context/cartContext";
import { formatCompactNumber } from "../../constants/formatNumber";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { useParams } from "react-router";
import { rentHouses } from "../../constants/data";
import ExculusivePropertyCard from "../home-page-components/exculusivePropertyCard";
const Product = ({
  id,
  title,
  moreImages,
  mainImage,
  descr,
  details,
  price,
}) => {
  const [btnLoader, setBtnLoader] = useState(false);

  const [inpt, setInpt] = useState(1);
  const { cartItems, addToCart, modal, setModal } = useContext(CartContext);

  const [otherItems, setOtherItems] = useState([]);

  const handleAddToCart = () => {
    setBtnLoader(true);
    setTimeout(() => {
      setBtnLoader(false);
      let currentInpValue = document.getElementById("inp");

      const newItem = {
        id: id,
        name: title,
        image: mainImage,
        quantity: Number(currentInpValue.value),
        price: price,
      };
      addToCart(newItem);
      setInpt(1);
      setModal(true);
    }, 400);
  };

  const openWhatsApp = () => {
    const message = "Hi Patnan Investment! 🏡 I'm interested in a site visit. Thanks! 🌟";
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/254741370283?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
};

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    setOtherItems(
      rentHouses.filter((e, i) => {
        return e.id != id;
      })
    );
  }, []);
  useEffect(() => {
    const body = document.getElementsByTagName("body").item(0);
    if (modal) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    }
  }, [modal]);
  return (
    <>
      {/* <ImageSlider images={moreImages} /> */}
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto mt-40 max-lg:mt-32 max-md:mt-28  pt-0 p-20 px-10 max-lg:px-5 flex max-lg:flex-wrap-reverse gap-10 "
      >
        <div className="w-2/4 max-lg:w-full  flex flex-col gap-5">
          {moreImages.map((e, i) => {
            return (
              <motion.div
                key={i}
                initial="initial"
                whileInView="animate"
                variants={animationVariants.zoomIn}
                viewport={{ once: true, amount: 0.2 }}
              >
                <img
                  className="w-full h-[500px] max-md:h-[400px] max-sm:h-[300px] object-cover"
                  src={e}
                  alt={e}
                />
              </motion.div>
            );
          })}
        </div>
        <div className="w-2/4 max-lg:w-full relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className="sticky max-lg:static top-32 flex flex-col gap-4"
          >
            <h1 className="text-4xl font-semibold">Property in {title}</h1>
            <p className="details text-xl">{descr}</p>
            <div className="flex flex-col gap-2">
              <Button
                // _hover={{ borderColor: "#3cb371" }}
                _hover={{ backgroundColor: "white", color: "#3cb371" }}
                backgroundColor={"#3cb371"}
                color={"white"}
                borderColor={"#3cb371"}
                variant={"outline"}
                size={"lg"}
                isLoading={btnLoader}
                loadingText={"Adding to Cart"}
                onClick={openWhatsApp}
                className="mt-4 max-lg:w-72 max-sm:w-full"
              >
                 Book A Site Visit
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto mt-10 pt-0 p-20 px-10 max-lg:px-5 "
      >
        <motion.h1
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          className="text-4xl font-semibold"
        >
          Just For You
        </motion.h1>
        <div className="grid grid-cols-2 grid-rows-1 max-sm:grid-cols-1 max-sm:grid-rows-5 gap-5 mt-2">
          {otherItems.map((e, i) => {
            return (
              <div
                key={i}
                className={
                  i === otherItems.length
                    ? "col-span-2 max-sm:col-auto"
                    : ""
                }
              >
                <ExculusivePropertyCard
                  imgSrc={e.mainImage}
                  titlePart1={"Property in "}
                  titlePart2={e.name}
                  pricing={e.price}
                  href={e.id}
                  type={e.type}
                  bgColor={"bg-white"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
