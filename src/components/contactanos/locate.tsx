const Locate: React.FC = () => {
  return (
    <div>
      <div className="flex flex-row px-12 gap-8 py-8">
        <div className="flex-1">
          <div className="text-xl font-semibold uppercase">
            Sede Principal - Arequipa
          </div>{" "}
          <div className="py-4 border-y-1 pr-70">
            <span className="font-semibold">Dirección:</span> Av. Tarapacá
            1013-A Miraflores, Arequipa. Perú
          </div>
          <div className="pt-8 h-120">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.7721545966388!2d-71.51689842641433!3d-16.385565037786566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424bb0b42e9191%3A0x883c14a8f93ac227!2sAv.%20Tarapac%C3%A1%201013%2C%20Miraflores%2004004!5e0!3m2!1ses!2spe!4v1763059778645!5m2!1ses!2spe"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="flex-1">
          <div className="text-xl font-semibold uppercase">Sede - CUZCO</div>{" "}
          <div className="py-4 border-y-1 pr-70">
            <span className="font-semibold">Dirección:</span> Calle El Triunfo
            352 B, cercado, Cuzco. Perú
          </div>
          <div className="pt-8 h-120">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3879.31080621505!2d-71.977174!3d-13.516508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd673429354f5%3A0x1c2fa3e4c6ce78db!2sTriunfo%20352%2C%20Cusco%2008002!5e0!3m2!1ses!2spe!4v1763059690559!5m2!1ses!2spe"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locate;
