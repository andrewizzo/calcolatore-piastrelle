import { useState } from "react";
import Mattonella from "../assets/MattonellaRes.png";
import "../index.css";

export const Calculator = () => {
  const [dimensioneMattonella1, setDimensioneMattonella1] = useState(0);
  const [dimensioneMattonella2, setDimensioneMattonella2] = useState(0);
  const [dimensioneMetroQuadro, setDimensioneMetroQuadro] = useState(0);
  const [risultato, setRisultato] = useState(0);

  const totMattonelle = (dimensioneMattonella1, dimensioneMattonella2, mq) => {
    const result =
      (mq * 10000) / (dimensioneMattonella1 * dimensioneMattonella2);
    return result;
  };

  const handleCalcola = () => {
    const result = totMattonelle(
      dimensioneMattonella1,
      dimensioneMattonella2,
      dimensioneMetroQuadro
    );
    setRisultato(result);
  };
  
  return (
    <div className="bg-[#454545] w-4/5 shrink-0 rounded-3xl">
      <div className="gap-10">
        <div className="w-4/5 mx-auto pt-5 pb-10">
          <div className="py-5 rounded-2xl shadow-3xl ">
            <p className="text-white text-center text-3xl">
              Dimensione Mattonella:
            </p>
          </div>
        </div>
        <div className="w-4/5 mx-auto flex flex-row place-content-evenly py-5 mb-6 rounded-2xl shadow-3xl max-lg:flex-col">
          <div className="max-lg:w-auto max-lg:mx-auto">
            <p className="text-white">Dimensione 1:</p>
            <input
              className="pl-1"
              required
              type="text"
              placeholder="ES.100"
              onChange={(e) => setDimensioneMattonella1(Number(e.target.value))}
            />
          </div>
          <div className="max-lg:w-auto max-lg:mx-auto ">
            <p className=" text-white text-3xl pt-3 max-lg:pt-0">x</p>
          </div>
          <div className="max-lg:w-auto max-lg:mx-auto">
            <p className="text-white">Dimensione 2:</p>
            <input
              className="pl-1"
              required
              type="text"
              placeholder="ES.100"
              onChange={(e) => setDimensioneMattonella2(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="gap-5 justify-center mx-auto py-5">
          <div className="flex flex-col gap-5 py-5 mb-6 w-4/5 rounded-3xl shadow-3xl mx-auto">
            <p className="text-white text-center text-3xl ">
              Dimensione MetroQuadro:
            </p>
            <input
              required
              className="w-44 mx-auto pl-1"
              type="text"
              placeholder="Ins.Dimensione"
              onChange={(e) => setDimensioneMetroQuadro(Number(e.target.value))}
            />
          </div>
          <div className="flex justify-center py-5">
            <button
              className="py-4 px-10 rounded-2xl shadow-3xl text-white text-6xl hover:bg-[#1E1E1E] hover:text-white"
              onClick={handleCalcola}>
              =
            </button>
          </div>
        </div>
        {risultato !== 0 && (
          <div className="pt-1 pb-5 w-max mx-auto">
            <div className="flex  justify-center items-center  w-max py-8 px-8 rounded-2xl shadow-3xl mx-auto max-lg:w-auto ">
              <div className=" flex gap-8 ">
                <p className="text-white text-7xl w-max text-center pt-5 max-lg:pt-0">
                  {Number.isInteger(risultato)
                    ? risultato
                    : Math.ceil(risultato)}
                </p>
                <img
                  src={Mattonella}
                  alt="#"
                  className="rotate-animation max-lg:hidden"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
