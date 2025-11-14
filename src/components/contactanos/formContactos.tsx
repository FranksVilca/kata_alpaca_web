"use client";
import { useState } from "react";

const FormContactos: React.FC = () => {
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
          FORMULARIO DE CONTACTO
        </h2>

        <div className="mb-3 sm:mb-0">
          <label className="block text-xs sm:text-sm mb-1 sm:mb-0">
            Nombre de empresa
          </label>
          <input
            name="enterpriseName"
            type="text"
            className="w-full px-2 border rounded focus:ring-blue-500 my-2"
            placeholder="Nombre de empresa"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 sm:mb-0">
          <label className="block text-xs sm:text-sm mb-1 sm:mb-0">
            Nombres y Apellidos
          </label>
          <input
            name="name"
            type="text"
            className="w-full px-2 border rounded focus:ring-blue-500 my-2"
            placeholder="Nombres y Apellidos"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 sm:mb-0">
          <label className="block text-xs sm:text-sm mb-1 sm:mb-0">
            Correo electrónico
          </label>
          <input
            name="email"
            type="email"
            className="w-full px-2 border rounded focus:ring-blue-500 my-2"
            placeholder="Correo electrónico"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 sm:mb-0">
          <label className="block text-xs sm:text-sm mb-1 sm:mb-0">
            Teléfono
          </label>
          <input
            name="telefono"
            type="number"
            className="w-full px-2 border rounded focus:ring-blue-500 my-2"
            placeholder="Teléfono"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 sm:mb-0">
          <label className="block text-xs sm:text-sm mb-1 sm:mb-0">
            Mensaje
          </label>
          <textarea
            name="message"
            className="w-full px-2 border rounded focus:ring-blue-500 my-2 resize-none leading-6"
            placeholder="Mensaje"
            rows={1}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-auto bg-[#FF8112] text-white py-1 px-4 rounded hover:bg-[#FF8112]/50 transition"
        >
          Enviar Mensaje
        </button>
        <div className="pt-2 pb-20 text-xs sm:text-sm">Campos requeridos</div>
      </form>
    </div>
  );
};

export default FormContactos;
