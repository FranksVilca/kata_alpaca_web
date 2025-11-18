"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Aboreto, Jura } from "next/font/google";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

const jura = Jura({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const FormContactos: React.FC = () => {
  const f = useTranslations("Contact");

  const [formData, setFormData] = useState({
    enterpriseName: "",
    names: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Mensaje enviado con éxito");
        setFormData({
          enterpriseName: "",
          names: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        // Mostrar error detallado
        const errorMsg = data.details 
          ? `❌ Error: ${data.details.message}\nCódigo: ${data.details.code || 'N/A'}\nRespuesta: ${data.details.response || 'N/A'}`
          : `❌ Error: ${data.error}`;
        
        alert(errorMsg);
        console.error("Error completo:", data);
      }
    } catch (err) {
      alert("❌ Error de red al enviar el mensaje");
      console.error("Error de red:", err);
    }
  };

  return (
    <div className="py-6 sm:px-4 sm:py-10 sm:pl-14 text-[#292929] px-15">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg w-full max-w-md mx-auto sm:mx-0"
      >
        <div className={`${aboreto.className}`}>
          <h2 className="text-lg text-center sm:text-x2 sm:text-left pb-6 font-semibold">
            {f("form")}
          </h2>
        </div>

        <div className="mb-3 sm:mb-0">
          <label
            className={`block text-xs sm:text-lg mb-1 sm:mb-0 font-bold ${jura.className}`}
          >
            {f("enterpriseName")}
          </label>
          <input
            name="enterpriseName"
            value={formData.enterpriseName}
            type="text"
            className="w-full px-2 border rounded focus:ring-blue-500 my-2"
            placeholder={f("enterpriseName")}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 sm:mb-0">
          <label
            className={`block text-xs sm:text-lg mb-1 sm:mb-0 font-bold ${jura.className}`}
          >
            {f("names")}
          </label>
          <input
            name="names"
            value={formData.names}
            type="text"
            className="w-full px-2 border rounded focus:ring-blue-500 my-2"
            placeholder={f("names")}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 sm:mb-0">
          <label
            className={`block text-xs sm:text-lg mb-1 sm:mb-0 font-bold ${jura.className}`}
          >
            {f("email")}
          </label>
          <input
            name="email"
            value={formData.email}
            type="email"
            className="w-full px-2 border rounded focus:ring-blue-500 my-2"
            placeholder={f("email")}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 sm:mb-0">
          <label
            className={`block text-xs sm:text-lg mb-1 sm:mb-0 font-bold ${jura.className}`}
          >
            {f("phone")}
          </label>
          <input
            name="phone"
            value={formData.phone}
            type="tel"
            className="w-full px-2 border rounded focus:ring-blue-500 my-2"
            placeholder={f("phone")}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 sm:mb-0">
          <label
            className={`block text-xs sm:text-lg mb-1 sm:mb-0 font-bold ${jura.className}`}
          >
            {f("message")}
          </label>
          <textarea
            name="message"
            value={formData.message}
            className="w-full px-2 border rounded focus:ring-blue-500 my-2 resize-none leading-6"
            placeholder={f("message")}
            rows={1}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className={`w-auto bg-[#FF8112] text-white py-1 px-4 rounded font-bold hover:bg-[#FF8112]/50 transition ${jura.className}`}
        >
          {f("button")}
        </button>
        <div
          className={`pt-2 pb-20 text-xs sm:text-sm font-bold ${jura.className}`}
        >
          {f("simpleText")}
        </div>
      </form>
    </div>
  );
};

export default FormContactos;
