"use client";

import { useState } from "react";
import { Jura } from "next/font/google";
import { useTranslations } from "next-intl";

const jura = Jura({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const FormBook: React.FC = () => {
  const f = useTranslations("Book");

  const [formData, setFormData] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    tipoDocumento: "dni",
    numeroDocumento: "",
    correo: "",
    telefono: "",
    pais: "",
    direccion: "",
    tipoProducto: "producto",
    monto: "",
    descripcion: "",
    motivo: "",
    detalle: "",
    comprobante: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/complaintBook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Mensaje enviado con éxito");
      setFormData({
        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        tipoDocumento: "dni",
        numeroDocumento: "",
        correo: "",
        telefono: "",
        pais: "",
        direccion: "",
        tipoProducto: "producto",
        monto: "",
        descripcion: "",
        motivo: "",
        detalle: "",
        comprobante: "",
      });
    } else {
      alert("Hubo un error al enviar el mensaje");
    }
  };

  return (
    <div className={`md:mx-4 px-1 pt-10 max-w-full ${jura.className}`}>
      <div className="border-y-2 border-black/10 sm:border-y-0 sm:border-b-2 sm:border-black/50 md:px-8 sm:text-x2 text-lg mx-4 px-2 py-4 sm:py-0 ">
        {f("dates")}
      </div>

     <div className="px-4 sm:px-14 pt-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full mx-auto sm:mx-0"
        >
          {/* NOMBRE */}
          <div className="mb-3 flex flex-col items-start">
            <label className="block">{f("nombre")}</label>
            <input
              name="nombre"
              value={formData.nombre}
              type="text"
              className="w-full sm:w-3/8 px-2 bg-[#D9D9D950] my-2 shadow-sm"
              onChange={handleChange}
              required
            />
          </div>

          {/* APELLIDO PATERNO */}
          <div className="mb-3 flex flex-col items-start">
            <label className="block">{f("apellidoPaterno")}</label>
            <input
              name="apellidoPaterno"
              value={formData.apellidoPaterno}
              type="text"
              className="w-full sm:w-3/8 px-2 bg-[#D9D9D950] my-2 shadow-sm"
              onChange={handleChange}
              required
            />
          </div>

          {/* APELLIDO MATERNO */}
          <div className="mb-3 flex flex-col items-start">
            <label className="block">{f("apellidoMaterno")}</label>
            <input
              name="apellidoMaterno"
              value={formData.apellidoMaterno}
              type="text"
              className="w-full sm:w-3/8 px-2 bg-[#D9D9D950] my-2 shadow-sm"
              onChange={handleChange}
              required
            />
          </div>

          {/* DOCUMENTO */}
          <div className="flex flex-col sm:flex-row gap-8 sm:mb-30">
            <div className="flex-1 flex flex-col items-start">
              <label className="block">{f("tipoDocumento")}</label>
              <select
                name="tipoDocumento"
                value={formData.tipoDocumento}
                className="w-full sm:w-3/8 px-2 bg-[#D9D9D950] py-1 mt-1 shadow-sm mb-30 sm:mb-0"
                onChange={handleChange}
                required
              >
                <option value="dni">DNI</option>
                <option value="ruc">RUC</option>
                <option value="pasaporte">{f("pasaporte")}</option>
                <option value="ce">C.E.</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col items-start">
              <label className="block">{f("numeroDocumento")}</label>
              <input
                name="numeroDocumento"
                value={formData.numeroDocumento}
                type="text"
                className="w-3/4 px-2 bg-[#D9D9D950] my-2 shadow-sm"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="md:-mx-8 sm:text-x2 text-lg mb-8 border-b pb-4 pt-6 sm:pt-0 sm:pb-0 sm:border-none border-black/10">{f("datosContacto")}</div>
          {/* CORREO */}
          <div className="mb-3 flex flex-col items-start">
            <label className="block">{f("correo")}</label>
            <input
              name="correo"
              value={formData.correo}
              type="email"
              className="w-full sm:w-5/8 px-2 bg-[#D9D9D950] my-2 shadow-sm"
              onChange={handleChange}
              required
            />
          </div>

          {/* TELEFONO */}
          <div className="mb-3 flex flex-col items-start">
            <label className="block">{f("telefono")}</label>
            <div className="text-xs">{f("code")} (51)</div>
            <input
              name="telefono"
              value={formData.telefono}
              type="text"
              className="w-full sm:w-5/8 px-2 bg-[#D9D9D950] my-2 shadow-sm"
              onChange={handleChange}
              required
            />
          </div>

          {/* PAÍS */}
          <div className="mb-3 flex flex-col items-start">
            <label className="block">{f("pais")}</label>
            <input
              name="pais"
              value={formData.pais}
              type="text"
              className="w-full sm:w-5/8 px-2 bg-[#D9D9D950] my-2 shadow-sm"
              onChange={handleChange}
              required
            />
          </div>

          {/* DIRECCIÓN */}
          <div className="mb-3 flex flex-col items-start">
            <label className="block">{f("direccion")}</label>
            <input
              name="direccion"
              value={formData.direccion}
              type="text"
              className="w-full sm:w-5/8 px-2 bg-[#D9D9D950] my-2 shadow-sm"
              onChange={handleChange}
              required
            />
          </div>
          <div className="sm:-mx-8 sm:text-x2 text-lg pb-8">
            {f("identificacion")}
          </div>
          {/* PRODUCTO SERVICIO */}
          <div className="mb-18 flex flex-col items-start">
            <label className="block">{f("tipoProducto")}</label>
            <select
              name="tipoProducto"
              value={formData.tipoProducto}
              className="w-full sm:w-2/8 px-2 bg-[#D9D9D950] py-1 mt-1 shadow-sm"
              onChange={handleChange}
              required
            >
              <option value="producto">{f("producto")}</option>
              <option value="servicio">{f("servicio")}</option>
            </select>
          </div>

          {/* MONTO */}
          <div className="mb-3 flex flex-col items-start">
            <label className="block">{f("monto")}</label>
            <input
              name="monto"
              value={formData.monto}
              type="text"
              className="w-full sm:w-5/8 px-2 bg-[#D9D9D950] my-2 shadow-sm"
              onChange={handleChange}
              required
            />
          </div>

          {/* DESCRIPCIÓN */}
          <div className="mb-3 flex flex-col items-center sm:items-start">
            <label className="block">
              {f("descripcion")}
            </label>
            <textarea
              name="motivo"
              value={formData.motivo}
              className="w-full sm:w-5/8 px-2 bg-[#D9D9D950] my-2 resize-none shadow-sm"
              rows={4}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="md:-mx-8 sm:text-x2 text-lg mb-8 border-b pb-4 pt-6 sm:pt-0 sm:pb-0 sm:border-none border-black/10">{f("detalleReclamacion")}</div>
          {/* MOTIVO */}
          <div className="mb-3">
            <label className="block">{f("motivo")}</label>
            <div className="flex flex-row sm:px-20 sm:gap-30 py-10 items-center sm:items-start px-10 gap-20">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="phone"
                  value="opcion1"
                  onChange={handleChange}
                  className="mr-1"
                  required
                />
                {f("reclamo")}
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="phone"
                  value="opcion2"
                  onChange={handleChange}
                  className="mr-1"
                />
                {f("queja")}
              </label>
            </div>
          </div>

          {/* DETALLE */}
          <div className="mb-3 flex flex-col items-start">
            <label className="block">{f("detalle")}</label>
            <textarea
              name="detalle"
              value={formData.detalle}
              className="w-full sm:w-5/8 px-2 bg-[#D9D9D950] my-2 resize-none shadow-sm"
              rows={4}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* COMPROBANTE */}
          <div className="mb-3 flex flex-col items-start">
            <label className="block">{f("comprobante")}</label>
            <input
              name="comprobante"
              value={formData.comprobante}
              type="text"
              className="w-full sm:w-5/8 px-2 bg-[#D9D9D950] my-2 shadow-sm"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-center sm:justify-start">
            <button
              type="submit"
              className="w-auto font-bold bg-[#EE9C61] text-black py-2 px-16 hover:bg-[#FF8112]/50 transition mb-30 mt-10 shadow-[4px_4px_0px_rgba(0,0,0,0.4)]"
            >
              {f("button")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormBook;
