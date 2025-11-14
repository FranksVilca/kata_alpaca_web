"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

const FormContactos: React.FC = () => {
  const f = useTranslations("Contact");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", form);
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
            name="name"
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
            name="telefono"
            type="number"
            className="w-full px-2 border rounded focus:ring-blue-500 my-2"
            placeholder={f("phone")}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 sm:mb-0">
          <label className="block text-xs sm:text-sm mb-1 sm:mb-0">
            {f("Message")}
          </label>
          <textarea
            name="message"
            className="w-full px-2 border rounded focus:ring-blue-500 my-2 resize-none leading-6"
            placeholder={f("Message")}
            rows={1}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
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
