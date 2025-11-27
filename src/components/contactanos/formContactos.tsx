"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Aboreto, Jura } from "next/font/google";
import { motion } from 'framer-motion';

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

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

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
        alert(`❌ Error: ${data.error || 'Error desconocido'}`);
        console.error("Error completo:", data);
      }
    } catch (err) {
      alert("❌ Error de red al enviar el mensaje");
      console.error("Error de red:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-6 sm:px-4 sm:py-10 sm:pl-14 text-[#292929] px-15 bg-white">
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg w-full max-w-md mx-auto sm:mx-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className={`${aboreto.className}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-lg text-center sm:text-x2 sm:text-left pb-6 font-semibold">
            {f("form")}
          </h2>
        </motion.div>

        <motion.div
          className="mb-3 sm:mb-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
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
            disabled={isLoading}
          />
        </motion.div>

        <motion.div
          className="mb-3 sm:mb-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
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
            disabled={isLoading}
          />
        </motion.div>

        <motion.div
          className="mb-3 sm:mb-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
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
            disabled={isLoading}
          />
        </motion.div>

        <motion.div
          className="mb-3 sm:mb-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
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
            disabled={isLoading}
          />
        </motion.div>

        <motion.div
          className="mb-3 sm:mb-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
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
            rows={4}
            onChange={handleChange}
            disabled={isLoading}
          ></textarea>
        </motion.div>

        <motion.button
          type="submit"
          disabled={isLoading}
          className={`w-auto bg-[#FF8112] text-white py-1 px-4 rounded font-bold hover:bg-[#FF8112]/50 transition disabled:opacity-50 disabled:cursor-not-allowed ${jura.className}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isLoading ? "Enviando..." : f("button")}
        </motion.button>
        <motion.div
          className={`pt-2 pb-20 text-xs sm:text-sm font-bold ${jura.className}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          {f("simpleText")}
        </motion.div>
      </motion.form>
    </div>
  );
};

export default FormContactos;