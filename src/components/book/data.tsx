import { Aboreto, Jura } from "next/font/google";
import { useTranslations } from "next-intl";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

const jura = Jura({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Data: React.FC = () => {
  const f = useTranslations("Book");

  return (
    <div className={`text-center mx-4 ${aboreto.className} mt-10`}>
      <div className="text-[#BE5103] text-3xl">{f("title")}</div>
      <div className="pb-6 text-xl font-semibold">{f("Ley")} N°29571</div>
      <div className={`py-4 border-t-2 border-black/20 ${jura.className}`}>
        <div>RUC: 20602909183 </div>
        <div>{f("Razon")}: KATA ALPACA</div>
        <div>{f("address")} Av. Tarapacá 1013, Miraflores 04004 - AREQUIPA</div>
      </div>
    </div>
  );
};

export default Data;
