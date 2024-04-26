import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const handleWhatsAppRedirect = () => {
    const message = "Hi, I'm interested in booking a site visit. Can you provide more information?";
    const phoneNumber = "+254717818598"; // Replace with the phone number you want to send the message to
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      const whatsappButton = document.getElementById("whatsapp-button");
      if (whatsappButton) {
        if (window.scrollY > 100) {
          whatsappButton.style.display = "block";
        } else {
          whatsappButton.style.display = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      id="whatsapp-button"
      className="fixed bottom-10 right-10 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
      onClick={handleWhatsAppRedirect}
    >
      <FaWhatsapp className="text-3xl" />
    </button>
  );
};

export default WhatsAppButton;
