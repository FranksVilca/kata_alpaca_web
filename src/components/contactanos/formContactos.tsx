"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

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

  const handleSubmit = async () => {
    const res = await fetch("/api/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Mensaje enviado con éxito");
      setFormData({
        enterpriseName: "",
        names: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      alert("Hubo un error al enviar el mensaje");
    }
  };

  return (
    <div className="py-6 sm:px-4 sm:py-10 sm:pl-14 text-[#292929] px-15">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg w-full max-w-md mx-auto sm:mx-0"
      >
        <h2 className="text-lg text-center sm:text-xl sm:text-left pb-6">
          {f("form")}
        </h2>

        <div className="mb-3 sm:mb-0">
          <label className="block text-xs sm:text-sm mb-1 sm:mb-0">
            {f("enterpriseName")}
          </label>
          <input
            name="enterpriseName"
            value = {formData.enterpriseName}
            type="text"
            className="w-full px-2 border rounded focus:ring-blue-500 my-2"
            placeholder={f("enterpriseName")}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 sm:mb-0">
          <label className="block text-xs sm:text-sm mb-1 sm:mb-0">
            {f("names")}
          </label>
          <input
            name="names"
            value = {formData.names}
            type="text"
            className="w-full px-2 border rounded focus:ring-blue-500 my-2"
            placeholder={f("names")}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 sm:mb-0">
          <label className="block text-xs sm:text-sm mb-1 sm:mb-0">
            {f("email")}
          </label>
          <input
            name="email"
            value = {formData.email}
            type="email"
            className="w-full px-2 border rounded focus:ring-blue-500 my-2"
            placeholder={f("email")}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 sm:mb-0">
          <label className="block text-xs sm:text-sm mb-1 sm:mb-0">
            {f("phone")}
          </label>
          <input
            name="phone"
            value = {formData.phone}
            type="tell"
            className="w-full px-2 border rounded focus:ring-blue-500 my-2"
            placeholder={f("phone")}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 sm:mb-0">
          <label className="block text-xs sm:text-sm mb-1 sm:mb-0">
            {f("message")}
          </label>
          <textarea
            name="message"
            value = {formData.message}
            className="w-full px-2 border rounded focus:ring-blue-500 my-2 resize-none leading-6"
            placeholder={f("message")}
            rows={1}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-auto bg-[#FF8112] text-white py-1 px-4 rounded hover:bg-[#FF8112]/50 transition"
        >
          {f("button")}
        </button>
        <div className="pt-2 pb-20 text-xs sm:text-sm">{f("simpleText")}</div>
      </form>
    </div>
  );
};

export default FormContactos;
