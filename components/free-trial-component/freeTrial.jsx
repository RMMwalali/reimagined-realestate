import React from "react";
import Button from "../buttons-component/solidbutton";
import { scrollToTop } from "../../constants/scrollToTop";

const FreeTrial = () => {
  // Function to open WhatsApp with a predefined message
  const openWhatsApp = () => {
    const phoneNumber = "+254741370283"; // Your WhatsApp business number
    const message = "Hey, I'm interested in your real estate services! Can you provide more information?";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div
      className="py-28 max-sm:py-20 px-10 max-sm:px-5 flex flex-col justify-center items-center text-center gap-8 max-sm:gap-6 bg-red-500 bg-no-repeat text-white bg-center bg-cover"
      style={{
        backgroundImage: `url("/trial-bg.png")`,
      }}
    >
      <h1 className="text-5xl max-sm:text-4xl font-semibold">
        CONNECT WITH US INSTANTLY ON WHATSAPP FOR EXPERT ADVICE
      </h1>
      <Button
        content={"Message via WhatsApp"}
        fontSize={"text-2xl max-sm:text-xl"}
        padding={"px-6 py-2"}
        styles={{ borderColor: "white" }}
        onClick={openWhatsApp}
      />
    </div>
  );
};

export default FreeTrial;
